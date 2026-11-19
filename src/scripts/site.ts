// JS mínimo del sitio: menú, carrusel, aparición al hacer scroll, CTA flotante, cookies y formularios.
// Todo el contenido es HTML estático: sin este script la web se lee igual.

const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* modo privado */ } },
};

// ---------- menú de escritorio ----------
const dropdowns = [...document.querySelectorAll<HTMLElement>('[data-dropdown]')];
function setOpen(dd: HTMLElement, open: boolean) {
  const btn = dd.querySelector('button')!;
  const panel = dd.querySelector<HTMLElement>('[id^="nav-panel-"]')!;
  btn.setAttribute('aria-expanded', String(open));
  panel.hidden = !open;
  btn.querySelector('svg')?.classList.toggle('rotate-180', open);
}
for (const dd of dropdowns) {
  const btn = dd.querySelector('button')!;
  dd.addEventListener('mouseenter', () => setOpen(dd, true));
  dd.addEventListener('mouseleave', () => setOpen(dd, false));
  btn.addEventListener('click', () => {
    const open = btn.getAttribute('aria-expanded') !== 'true';
    dropdowns.forEach((o) => o !== dd && setOpen(o, false));
    setOpen(dd, open);
  });
  dd.addEventListener('focusout', (e) => { if (!dd.contains(e.relatedTarget as Node)) setOpen(dd, false); });
}

// ---------- menú móvil ----------
const mobile = document.getElementById('mobile-menu');
const openBtn = document.querySelector<HTMLElement>('[data-mobile-open]');
function closeMobile() {
  if (!mobile || mobile.hidden) return;
  mobile.hidden = true;
  document.body.style.overflow = '';
  openBtn?.setAttribute('aria-expanded', 'false');
  openBtn?.focus();
}
openBtn?.addEventListener('click', () => {
  if (!mobile) return;
  mobile.hidden = false;
  document.body.style.overflow = 'hidden';
  openBtn.setAttribute('aria-expanded', 'true');
  mobile.querySelector<HTMLElement>('[data-mobile-close]')?.focus();
});
mobile?.querySelector('[data-mobile-close]')?.addEventListener('click', closeMobile);

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  dropdowns.forEach((d) => setOpen(d, false));
  closeMobile();
});

// ---------- aparición al hacer scroll ----------
const reveal = document.querySelectorAll<HTMLElement>('[data-reveal]');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add('is-visible'); io.unobserve(en.target); }
  }, { rootMargin: '0px 0px -8% 0px' });
  reveal.forEach((el) => io.observe(el));
} else reveal.forEach((el) => el.classList.add('is-visible'));

// ---------- CTA flotante ----------
const floating = document.querySelector<HTMLElement>('[data-floating-cta]');
if (floating) {
  const links = floating.querySelectorAll('a');
  const onScroll = () => {
    const show = window.scrollY > 600;
    floating.classList.toggle('opacity-0', !show);
    floating.classList.toggle('translate-y-3', !show);
    links.forEach((a) => a.classList.toggle('pointer-events-none', !show));
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ---------- cookies ----------
const banner = document.querySelector<HTMLElement>('[data-cookie-banner]');
if (banner && !store.get('cn-cookie-consent')) banner.hidden = false;
banner?.querySelectorAll<HTMLElement>('[data-cookie-choice]').forEach((b) =>
  b.addEventListener('click', () => { store.set('cn-cookie-consent', b.dataset.cookieChoice!); banner.hidden = true; }),
);

// ---------- carrusel de testimonios ----------
for (const car of document.querySelectorAll<HTMLElement>('[aria-roledescription="carrusel"]')) {
  const track = car.querySelector<HTMLElement>('.flex.transition-transform');
  if (!track) continue;
  const slides = [...track.children] as HTMLElement[];
  const dots = [...car.querySelectorAll<HTMLElement>('[role="tab"]')];
  const live = car.querySelector('[aria-live]');
  const [prev, next] = car.querySelectorAll<HTMLElement>('[role="group"] button');
  const ON = ['w-8', 'bg-primary'];
  const OFF = ['w-2.5', 'bg-[hsl(215_16%_47%/0.35)]', 'hover:bg-[hsl(215_16%_47%/0.6)]'];
  let i = 0;
  let timer: number | undefined;
  const go = (n: number) => {
    i = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${i * 100}%)`;
    slides.forEach((s, k) => s.setAttribute('aria-hidden', String(k !== i)));
    dots.forEach((d, k) => {
      d.setAttribute('aria-selected', String(k === i));
      d.classList.remove(...(k === i ? OFF : ON));
      d.classList.add(...(k === i ? ON : OFF));
    });
    if (live) live.textContent = `Testimonio ${i + 1} de ${slides.length}: ${slides[i].querySelector('[itemprop="name"]')?.textContent ?? ''}`;
  };
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const stop = () => window.clearInterval(timer);
  const start = () => { if (!reduce) { stop(); timer = window.setInterval(() => go(i + 1), 6000); } };
  prev?.addEventListener('click', () => go(i - 1));
  next?.addEventListener('click', () => go(i + 1));
  dots.forEach((d, k) => d.addEventListener('click', () => go(k)));
  car.addEventListener('mouseenter', stop);
  car.addEventListener('mouseleave', start);
  car.addEventListener('focusin', stop);
  car.addEventListener('focusout', start);
  car.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') go(i - 1);
    if (e.key === 'ArrowRight') go(i + 1);
  });
  start();
}

// ---------- formularios (contacto y diagnósticos) ----------
for (const form of document.querySelectorAll<HTMLFormElement>('form[data-cn-form]')) {
  const ts = form.querySelector<HTMLInputElement>('input[name="ts"]');
  if (ts) ts.value = String(Math.floor(Date.now() / 1000));
  const src = form.querySelector<HTMLInputElement>('input[name="source_path"]');
  if (src) src.value = location.pathname;
  const err = form.querySelector<HTMLElement>('[data-cn-form-error]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const showError = (msg: string) => { if (err) { err.textContent = msg; err.classList.remove('hidden'); } };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    err?.classList.add('hidden');
    // validación nativa (el formulario lleva novalidate para mostrar un mensaje propio)
    const fields = [...form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input:not([type=hidden]), textarea')];
    const invalid = fields.find((el) => !el.checkValidity());
    if (invalid) {
      invalid.focus();
      const label = form.querySelector(`label[for="${invalid.id}"]`)?.textContent ?? invalid.name;
      showError(invalid.type === 'checkbox'
        ? 'Necesitamos tu consentimiento para tratar la solicitud.'
        : `Revisa el campo «${label}».`);
      return;
    }
    const data = new FormData(form);
    // etiquetas visibles, para que el correo que llega al equipo se lea igual que el formulario
    const labels: Record<string, string> = {};
    form.querySelectorAll<HTMLLabelElement>('label[for]').forEach((l) => {
      const el = document.getElementById(l.htmlFor) as HTMLInputElement | null;
      if (el?.name) labels[el.name] = l.textContent?.trim() ?? el.name;
    });
    data.set('labels', JSON.stringify(labels));
    if (submit) submit.disabled = true;
    try {
      const r = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      const j = await r.json().catch(() => ({}));
      if (!r.ok || !j.ok) throw new Error(j.error || 'error');
      const box = document.createElement('div');
      box.className = 'border border-border bg-card p-8';
      box.setAttribute('role', 'status');
      box.tabIndex = -1;
      box.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" class="h-8 w-8 text-primary" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>'
        + '<h3 class="mt-4 font-display text-xl font-semibold text-[hsl(var(--ink))]">Solicitud recibida</h3>'
        + '<p class="mt-2 text-sm leading-relaxed text-muted-foreground">Te contactamos en un plazo máximo de 24 horas laborables para concretar el alcance del diagnóstico.</p>'
        + '<button type="button" class="mt-6 min-h-[44px] border border-border px-4 text-xs font-semibold uppercase tracking-[0.1em] transition-colors hover:border-primary hover:text-primary">Enviar otra solicitud</button>';
      // mismo comportamiento que LeadForm.jsx: "Enviar otra solicitud" vuelve al formulario vacío
      box.querySelector('button')!.addEventListener('click', () => {
        form.reset();
        if (ts) ts.value = String(Math.floor(Date.now() / 1000));
        if (submit) submit.disabled = false;
        box.replaceWith(form);
      });
      form.replaceWith(box);
      box.focus();
    } catch {
      showError('No hemos podido enviar la solicitud. Escríbenos a info@coolnetworks.it y la gestionamos igualmente.');
      if (submit) submit.disabled = false;
    }
  });
}
