export const NotificationsPage = (state = {}) => {
  const items = state.notifications || [];
  return `
    <section class="card">
      <p class="tag">Notificaciones</p>
      ${
        items.length
          ? `<ul class="bullets">
          ${items
            .map(
              (n) =>
                `<li><strong>${n.template}</strong> · ${n.channel} · ${n.status} · ${new Date(
                  n.createdAt
                ).toLocaleString()}<br/><small>${JSON.stringify(n.payload || {})}</small></li>`
            )
            .join('')}
        </ul>`
          : '<p class="muted">Aún no tienes notificaciones.</p>'
      }
      <form class="form" id="notif-form">
        <p class="tag">Crear notificación (stub)</p>
        <label>Título/Template <input type="text" name="template" value="bnpl_due" /></label>
        <label>Canal
          <select name="channel">
            <option value="in-app">In-app</option>
            <option value="email">Email</option>
            <option value="sms">SMS</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </label>
        <label>Mensaje <input type="text" name="message" value="Recordatorio BNPL" /></label>
        <button class="btn secondary" type="submit">Enviar</button>
      </form>
    </section>
  `;
};
