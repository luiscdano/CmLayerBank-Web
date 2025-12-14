export const LoginPage = () => `
  <section class="grid two hero">
    <div>
      <p class="eyebrow">Acceso privado</p>
      <h1>Ingreso seguro CmLayerBank</h1>
      <p class="subhead">Solo administrador seed. El registro público está bloqueado.</p>
      <div class="chips">
        <button class="chip primary" data-view="landing">Volver a la landing</button>
      </div>
    </div>
    <form class="card form" id="login-form">
      <p class="tag">Log In</p>
      <label>Email
        <input type="email" name="email" placeholder="tu@email.com" required />
      </label>
      <label>Contraseña
        <input type="password" name="password" placeholder="********" required />
      </label>
      <button class="btn primary" type="submit">Continuar</button>
      <p class="muted">Usa las credenciales provistas al owner.</p>
    </form>
  </section>
`;
