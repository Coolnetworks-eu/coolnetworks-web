<?php
/**
 * Backend del formulario de contacto y de los diagnósticos (sustituye al backend de Horizons/PocketBase).
 *
 * Recibe el POST del formulario, lo valida, lo envía por SMTP (Hostinger Mail) al buzón del equipo
 * y, si está configurado, guarda una copia en un fichero fuera de public_html.
 *
 * La configuración (usuario y contraseña SMTP) NO está en el repositorio: vive en
 *   <carpeta del dominio>/contacto-config.php   (un nivel por encima de public_html)
 * Plantilla: php/contacto-config.example.php. Ver README.md → "Formulario".
 */

declare(strict_types=1);

const MAX_LEN = ['company' => 200, 'contact_name' => 200, 'sector' => 200, 'email' => 200, 'phone' => 60,
    'contact' => 200, 'situation' => 4000, 'goal' => 4000];
const FORMS = ['contacto' => 'Contacto', 'diagnostico-it' => 'Diagnóstico IT',
    'diagnostico-ciberseguridad' => 'Diagnóstico Ciberseguridad', 'diagnostico-compliance' => 'Diagnóstico Compliance',
    'diagnostico-ia-360' => 'Diagnóstico IA 360'];

header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

$wantsJson = str_contains($_SERVER['HTTP_ACCEPT'] ?? '', 'application/json');

function reply(int $code, bool $ok, string $error = ''): never
{
    global $wantsJson;
    http_response_code($code);
    if ($wantsJson) {
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode($ok ? ['ok' => true] : ['ok' => false, 'error' => $error], JSON_UNESCAPED_UNICODE);
    } else {
        // envío sin JavaScript: volver a la página con un aviso
        $back = clean($_POST['source_path'] ?? '/', 300);
        if (!preg_match('#^/[a-z0-9/_-]*$#', $back)) $back = '/';
        header('Location: ' . $back . ($ok ? '?enviado=1' : '?error=1'), true, 303);
    }
    exit;
}

function clean(mixed $v, int $max): string
{
    $s = is_string($v) ? $v : '';
    $s = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $s) ?? '';
    return mb_substr(trim($s), 0, $max);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    header('Content-Type: text/plain; charset=utf-8');
    exit("Solo POST\n");
}

// ---------- configuración ----------
$configPath = getenv('CN_CONTACT_CONFIG') ?: dirname($_SERVER['DOCUMENT_ROOT'] ?? __DIR__ . '/../..') . '/contacto-config.php';
if (!is_file($configPath)) {
    error_log('contacto.php: falta ' . $configPath);
    reply(500, false, 'config');
}
$cfg = require $configPath;

// ---------- origen ----------
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
$host = $_SERVER['HTTP_HOST'] ?? '';
if ($origin !== '' && parse_url($origin, PHP_URL_HOST) !== $host
    && !in_array($origin, $cfg['allowed_origins'] ?? [], true)) {
    reply(403, false, 'origin');
}

// ---------- antispam ----------
if (clean($_POST['company_website'] ?? '', 200) !== '') reply(200, true); // honeypot: se descarta en silencio
$ts = (int)($_POST['ts'] ?? 0);
$age = time() - $ts;
if ($ts > 0 && $age < 3) reply(200, true);                                // enviado por un bot en < 3 s
if ($ts > 0 && $age > 86400 * 2) reply(400, false, 'expired');

$stateDir = $cfg['store_dir'] ?? sys_get_temp_dir();
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$rlFile = rtrim($stateDir, '/') . '/rl-' . hash('sha256', $ip . date('YmdH')) . '.cnt';
$count = is_file($rlFile) ? (int)file_get_contents($rlFile) : 0;
if ($count >= (int)($cfg['max_per_hour'] ?? 5)) reply(429, false, 'rate');
@file_put_contents($rlFile, (string)($count + 1), LOCK_EX);
if (random_int(1, 20) === 1) { // limpieza de contadores viejos
    foreach (glob(rtrim($stateDir, '/') . '/rl-*.cnt') ?: [] as $old) if (filemtime($old) < time() - 7200) @unlink($old);
}

// ---------- campos ----------
$form = clean($_POST['form'] ?? '', 60);
if (!isset(FORMS[$form])) reply(400, false, 'form');
$f = [];
foreach (MAX_LEN as $k => $max) $f[$k] = clean($_POST[$k] ?? '', $max);
if (($_POST['consent'] ?? '') === '') reply(400, false, 'consent');
if ($f['company'] === '') reply(400, false, 'company');

// los diagnósticos piden "Email o teléfono" en un solo campo
if ($f['email'] === '' && $f['contact'] !== '') {
    if (filter_var($f['contact'], FILTER_VALIDATE_EMAIL)) $f['email'] = $f['contact'];
    elseif ($f['phone'] === '') $f['phone'] = $f['contact'];
}
if ($f['email'] !== '' && !filter_var($f['email'], FILTER_VALIDATE_EMAIL)) reply(400, false, 'email');
if ($f['email'] === '' && $f['phone'] === '') reply(400, false, 'contact');

$labels = json_decode((string)($_POST['labels'] ?? '{}'), true);
$labels = is_array($labels) ? $labels : [];
$source = clean($_POST['source_path'] ?? '', 300);

// ---------- correo ----------
$lines = [FORMS[$form] . ' — solicitud desde la web', str_repeat('=', 50), ''];
foreach ($f as $k => $v) {
    if ($v === '') continue;
    $label = isset($labels[$k]) && is_string($labels[$k]) ? clean($labels[$k], 80) : $k;
    $lines[] = $label . ':';
    $lines[] = '  ' . str_replace("\n", "\n  ", $v);
    $lines[] = '';
}
$lines[] = '---';
$lines[] = 'Página: ' . ($source ?: '-');
$lines[] = 'Fecha: ' . date('c');
$lines[] = 'Consentimiento: sí (casilla marcada)';
$body = implode("\n", $lines);
$subject = '[Web] ' . FORMS[$form] . ': ' . ($f['company'] ?: $f['contact_name']);

$record = ['at' => date('c'), 'form' => $form, 'fields' => $f, 'source' => $source, 'ip_hash' => hash('sha256', $ip)];
if (!empty($cfg['store_dir'])) {
    @file_put_contents(rtrim($cfg['store_dir'], '/') . '/solicitudes-' . date('Y-m') . '.jsonl',
        json_encode($record, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
}

try {
    smtp_send($cfg, $subject, $body, $f['email'] ?: null);
} catch (Throwable $e) {
    error_log('contacto.php SMTP: ' . $e->getMessage());
    reply(502, false, 'smtp');
}
reply(200, true);

// ---------- SMTP mínimo (TLS implícito 465 o STARTTLS 587, AUTH LOGIN) ----------
function smtp_send(array $cfg, string $subject, string $body, ?string $replyTo): void
{
    $host = $cfg['smtp_host'];
    $port = (int)$cfg['smtp_port'];
    $secure = $port === 465 ? 'ssl://' : 'tcp://';
    $ctx = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true, 'peer_name' => $host]]);
    $s = @stream_socket_client($secure . $host . ':' . $port, $errno, $errstr, 15, STREAM_CLIENT_CONNECT, $ctx);
    if (!$s) throw new RuntimeException("conexión $host:$port: $errstr ($errno)");
    stream_set_timeout($s, 20);

    $read = function () use ($s): string {
        $data = '';
        while (($line = fgets($s, 1024)) !== false) {
            $data .= $line;
            if (strlen($line) < 4 || $line[3] === ' ') break;
        }
        return $data;
    };
    $cmd = function (string $c, array $expect) use ($s, $read): string {
        if ($c !== '') fwrite($s, $c . "\r\n");
        $r = $read();
        if (!in_array((int)substr($r, 0, 3), $expect, true)) {
            $shown = str_starts_with($c, 'AUTH') || strlen($c) > 60 ? '[oculto]' : $c;
            throw new RuntimeException("SMTP '$shown' -> " . trim($r));
        }
        return $r;
    };

    $ehloName = parse_url('https://' . ($_SERVER['HTTP_HOST'] ?? 'localhost'), PHP_URL_HOST) ?: 'localhost';
    $cmd('', [220]);
    $cmd('EHLO ' . $ehloName, [250]);
    if ($port !== 465) {
        $cmd('STARTTLS', [220]);
        if (!stream_socket_enable_crypto($s, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) throw new RuntimeException('STARTTLS falló');
        $cmd('EHLO ' . $ehloName, [250]);
    }
    $cmd('AUTH LOGIN', [334]);
    $cmd(base64_encode($cfg['smtp_user']), [334]);
    $cmd(base64_encode($cfg['smtp_pass']), [235]);
    $from = $cfg['from'] ?? $cfg['smtp_user'];
    $cmd('MAIL FROM:<' . $from . '>', [250]);
    $to = (array)$cfg['to'];
    foreach ($to as $rcpt) $cmd('RCPT TO:<' . $rcpt . '>', [250, 251]);
    $cmd('DATA', [354]);

    $enc = fn(string $t) => '=?UTF-8?B?' . base64_encode($t) . '?=';
    $headers = [
        'Date: ' . date('r'),
        'From: ' . $enc($cfg['from_name'] ?? 'Web Coolnetworks') . ' <' . $from . '>',
        'To: ' . implode(', ', array_map(fn($r) => '<' . $r . '>', $to)),
        'Subject: ' . $enc($subject),
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . substr(strrchr($from, '@') ?: '@localhost', 1) . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: base64',
        'Auto-Submitted: auto-generated',
    ];
    if ($replyTo && filter_var($replyTo, FILTER_VALIDATE_EMAIL) && !preg_match('/[\r\n<>]/', $replyTo)) {
        $headers[] = 'Reply-To: <' . $replyTo . '>';
    }
    $msg = implode("\r\n", $headers) . "\r\n\r\n" . rtrim(chunk_split(base64_encode($body), 76, "\r\n"));
    $cmd($msg . "\r\n.", [250]);
    $cmd('QUIT', [221]);
    fclose($s);
}
