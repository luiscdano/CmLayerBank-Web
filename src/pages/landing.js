export const LandingPage = () => `
  <div class="page hero-video">
    <div class="video-bg">
      <video
        autoplay
        loop
        muted
        playsinline
        poster="assets/isotipo_blanco.png"
        id="hero-video"
      >
        <source src="https://storage.googleapis.com/coverr-main/mp4/Northern_Lights.mp4" type="video/mp4" />
      </video>
      <div class="video-overlay"></div>
    </div>

    <div class="content-shell">
      <section class="hero-full">
        <div class="hero-logo">
          <img src="assets/isotipo_blanco.png" alt="CmLayerBank" />
          <div class="brand-text">
            <h1 class="brand-name">CmLayerBank</h1>
            <p class="brand-slogan">Tu dinero, con inteligencia</p>
          </div>
        </div>
        <div class="hero-title">
          <h2>Launching Soon</h2>
        </div>
      </section>

      <div class="transition-band"></div>

      <section class="contact-section" id="contact-section">
        <div class="contact-card reveal-up">
          <h3>Contáctanos</h3>
          <p class="muted">Déjanos un mensaje</p>
          <form class="form contact-form" id="contact-form">
            <label>Nombre y apellido *
              <input type="text" name="name" required placeholder="Tu nombre y apellido" />
            </label>
            <label>Correo *
              <input type="email" name="email" required placeholder="tu@email.com" />
            </label>
            <input type="text" name="hp" class="hidden" autocomplete="off" tabindex="-1" aria-hidden="true" />
            <label>Mensaje *
              <textarea name="message" rows="4" required placeholder="Cuéntanos más"></textarea>
            </label>
            <input type="hidden" name="captchaToken" id="contact-captcha-token" />
            <button class="btn primary wide" type="submit">Enviar</button>
            <p class="muted" id="contact-status"></p>
          </form>
        </div>
      </section>

      <footer class="footer">
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

export const initLandingEffects = () => {
  initReveal();
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  document.querySelectorAll('[data-action="cta-contact"], [data-action="cta-open"], [data-action="cta-explore"]').forEach((btn) =>
    btn.addEventListener('click', () => scrollTo('contact-section'))
  );
};

export const destroyLandingEffects = () => {
};
