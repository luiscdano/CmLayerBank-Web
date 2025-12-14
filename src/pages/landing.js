let starsAnimation;

export const LandingPage = () => `
  <div class="page">
    <canvas id="stars-canvas"></canvas>
    <div class="content-shell">
      <section class="container landing-hero section">
        <div class="hero-copy reveal-up">
          <p class="eyebrow">Neobanco dominicano</p>
          <h1>Finanzas inteligentes con IA y BNPL transparente.</h1>
          <p class="muted">Diseño tipo Revolut/Klarna con seguridad LayerShield, Pay in 3/4 y tarjetas Protect.</p>
          <div class="hero-ctas">
            <button class="btn primary" data-action="cta-open">Abrir cuenta</button>
            <button class="btn ghost" data-action="cta-contact">Contactar</button>
            <button class="btn secondary" data-action="cta-explore">Explorar</button>
          </div>
          <div class="trust-row">
            <span class="pill">Launching soon</span>
            <span class="pill">IA Interest Rate</span>
            <span class="pill">LayerShield™ MFA</span>
          </div>
        </div>
        <div class="logo-block reveal-up">
          <div class="logo-glow">
            <img src="/assets/isotipo.png" alt="CmLayerBank isotipo" />
          </div>
        </div>
      </section>

      <section class="container section" id="value-section">
        <div class="section-header reveal-up">
          <div>
            <p class="eyebrow">Value proposition</p>
            <h2>Lo esencial CmLayerBank</h2>
          </div>
        </div>
        <div class="value-grid">
          ${[
            { title: 'IA Interest Rate™', text: 'Tasa dinámica según comportamiento y score.', pill: 'IA' },
            { title: 'LayerShield™', text: 'MFA, device binding y seguridad visual Protect.', pill: 'Seguridad' },
            { title: 'BNPL & QR Pay Later', text: 'Pay in 3/4, QR-Pay Later, recordatorios y transparencia.', pill: 'BNPL' },
            { title: 'Kids & Teens', text: 'Cuentas guiadas, reglas de gasto y misiones educativas.', pill: 'Kids' }
          ]
            .map(
              (item) => `
              <div class="value-card reveal-up">
                <span class="chip">${item.pill}</span>
                <h3>${item.title}</h3>
                <p class="muted">${item.text}</p>
              </div>
            `
            )
            .join('')}
        </div>
      </section>

      <section class="container section">
        <div class="feature reveal-up">
          <div class="feature-copy">
            <p class="eyebrow">BNPL + QR</p>
            <h2>Pay in 3/4 con transparencia.</h2>
            <p class="muted">Ordena BNPL, conecta QR y sigue cuotas con impacto en CmLayerScore. Recordatorios y fee estimado visibles.</p>
            <div class="chips">
              <span class="chip">Calendario cuotas</span>
              <span class="chip">QR Pay Later</span>
              <span class="chip">Impacto en score</span>
            </div>
          </div>
          <div class="illustration card reveal-up">
            <p class="muted">Mock visual de órdenes BNPL y QR.</p>
          </div>
        </div>
      </section>

      <section class="container section">
        <div class="feature reverse reveal-up">
          <div class="feature-copy">
            <p class="eyebrow">LayerShield™</p>
            <h2>Seguridad visual y MFA.</h2>
            <p class="muted">MFA, binding de dispositivos, bloqueo/activación de Protect Cards y alertas de comportamiento.</p>
            <div class="chips">
              <span class="chip">MFA dinámico</span>
              <span class="chip">Dispositivos confiables</span>
              <span class="chip">Tarjeta Protect</span>
            </div>
          </div>
          <div class="illustration card reveal-up">
            <p class="muted">Mock de tarjetas y MFA.</p>
          </div>
        </div>
      </section>

      <section class="container section">
        <div class="section-header reveal-up">
          <div>
            <p class="eyebrow">Confianza</p>
            <h2>Compliance y observabilidad.</h2>
          </div>
          <div class="chips">
            <span class="chip">KYC/AML</span>
            <span class="chip">Observabilidad</span>
            <span class="chip">Backups</span>
          </div>
        </div>
        <div class="cta-block reveal-up">
          <h3>Listos para el siguiente paso.</h3>
          <p class="muted">BNPL, IA y LayerShield integrados en una sola experiencia.</p>
          <div class="hero-ctas" style="justify-content:center;">
            <button class="btn primary" data-action="cta-open">Abrir cuenta</button>
            <button class="btn ghost" data-action="cta-contact">Contactar</button>
          </div>
        </div>
      </section>

      <section class="container section" id="contact-section">
        <div class="contact-card reveal-up">
          <h3>Contact Us</h3>
          <form class="form contact-form" id="contact-form">
            <label>Name *
              <input type="text" name="name" required />
            </label>
            <label>Email *
              <input type="email" name="email" required />
            </label>
            <input type="text" name="hp" class="hidden" autocomplete="off" tabindex="-1" aria-hidden="true" />
            <label>Message *
              <textarea name="message" rows="4" required></textarea>
            </label>
            <input type="hidden" name="captchaToken" id="contact-captcha-token" />
            <button class="btn primary wide" type="submit">SEND</button>
            <p class="muted" id="contact-status"></p>
          </form>
        </div>
      </section>

      <footer class="container footer">
        <span>© 2025 CmLayerBank. All rights reserved</span>
        <span>Powered by CmLayer</span>
      </footer>
    </div>
  </div>
`;

const initReveal = () => {
  const items = document.querySelectorAll('.reveal-up');
  if (!items.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  items.forEach((el) => observer.observe(el));
};

const initStars = () => {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas || canvas.dataset.inited) return;
  canvas.dataset.inited = 'true';
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);
  const stars = Array.from({ length: 180 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    z: Math.random() * 0.8 + 0.2,
    o: Math.random() * 0.6 + 0.4
  }));

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', resize);

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#050b18';
    ctx.fillRect(0, 0, width, height);
    stars.forEach((s) => {
      s.y += 0.1 * s.z;
      if (s.y > height) s.y = 0;
      ctx.beginPath();
      ctx.fillStyle = `rgba(79, 209, 255, ${s.o})`;
      ctx.arc(s.x, s.y, 1.2 * s.z, 0, Math.PI * 2);
      ctx.fill();
    });
    starsAnimation = requestAnimationFrame(draw);
  };

  draw();
};

export const initLandingEffects = () => {
  if (starsAnimation) cancelAnimationFrame(starsAnimation);
  initReveal();
  initStars();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  document.querySelectorAll('[data-action="cta-contact"], [data-action="cta-open"]').forEach((btn) =>
    btn.addEventListener('click', () => scrollTo('contact-section'))
  );
  document.querySelectorAll('[data-action="cta-explore"]').forEach((btn) =>
    btn.addEventListener('click', () => scrollTo('value-section'))
  );
};

export const destroyLandingEffects = () => {
  if (starsAnimation) cancelAnimationFrame(starsAnimation);
  starsAnimation = null;
};
