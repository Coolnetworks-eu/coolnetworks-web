<?php
/**
 * PLANTILLA. La copia real se llama contacto-config.php y se crea A MANO en el servidor, en la carpeta
 * del dominio, un nivel por encima de public_html (p. ej. /home/uXXXX/domains/<dominio>/contacto-config.php).
 * Nunca se sube al repositorio ni a public_html. Permisos 600.
 */
return [
    // Hostinger Mail: smtp.hostinger.com, 465 (SSL). El buzón remitente debe existir en Hostinger Mail.
    'smtp_host' => 'smtp.hostinger.com',
    'smtp_port' => 465,
    'smtp_user' => 'BUZON_REMITENTE@coolnetworks.it',
    'smtp_pass' => 'CONTRASEÑA_DEL_BUZON',
    'from'      => 'BUZON_REMITENTE@coolnetworks.it',
    'from_name' => 'Web Coolnetworks',

    // A quién llegan las solicitudes
    'to' => ['info@coolnetworks.it'],

    // Copia de cada solicitud (JSON por líneas) y contador antispam. Carpeta FUERA de public_html.
    // Vacío = sin copia (el contador usa la carpeta temporal del sistema).
    'store_dir' => '/home/uXXXX/domains/DOMINIO/solicitudes-web',
    'max_per_hour' => 5,

    // Orígenes extra que pueden enviar (además del propio dominio). Normalmente vacío.
    'allowed_origins' => [],
];
