export const LayerShieldPage = (state = {}) => {
  const profile = state.layershield?.securityProfile || {};
  const hiddenAccounts = state.layershield?.hiddenAccounts || [];
  const ghostMode = state.layershield?.ghostMode || false;
  const fingerprint = state.deviceFingerprint || '';
  const trustedDevices = state.layershield?.trustedDevices || [];
  const accounts = state.accounts || [];
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Seguridad LayerShield</p>
        <form class="form" id="layershield-form">
          <label>MFA
            <select name="mfaEnabled">
              <option value="true" ${profile.mfaEnabled ? 'selected' : ''}>Activo</option>
              <option value="false" ${!profile.mfaEnabled ? 'selected' : ''}>Inactivo</option>
            </select>
          </label>
          <label>Límite por transacción
            <input type="number" name="perTransaction" value="${profile.spendLimits?.perTransaction || 0}" />
          </label>
          <label>Límite diario
            <input type="number" name="daily" value="${profile.spendLimits?.daily || 0}" />
          </label>
          <label>Ocultar cuentas
            <select name="hiddenAccounts" multiple size="4">
              ${
                accounts.length
                  ? accounts
                      .map(
                        (acc) =>
                          `<option value="${acc.id}" ${hiddenAccounts.includes(acc.id) ? 'selected' : ''}>${acc.name} (${acc.id.slice(0, 6)})</option>`
                      )
                      .join('')
                  : '<option disabled>Sin cuentas</option>'
              }
            </select>
          </label>
          <label class="inline">
            <input type="checkbox" name="ghostMode" ${ghostMode ? 'checked' : ''} /> Modo fantasma (oculta saldos)
          </label>
          <button class="btn primary" type="submit">Guardar</button>
        </form>
        <p class="muted">Configura MFA y vincula dispositivos desde los botones de la parte superior.</p>
      </div>
      <div class="card">
        <p class="tag">Dispositivo actual</p>
        <p class="muted">Fingerprint: <code>${fingerprint || 'no disponible'}</code></p>
        <button class="btn secondary" data-action="trust-device">Confiar dispositivo actual</button>
        <p class="tag">Dispositivos de confianza</p>
        <ul class="bullets">
          ${
            trustedDevices.length
              ? trustedDevices
                  .map(
                    (d) =>
                      `<li>${d.name || 'dispositivo'} · fp ${d.device_fingerprint?.slice(0, 8) || ''} · visto ${d.last_seen || ''}</li>`
                  )
                  .join('')
              : '<li>Sin dispositivos confiables.</li>'
          }
        </ul>
        <p class="tag">Privacidad</p>
        <ul class="bullets">
          <li>Ghost mode oculta saldos en las vistas de cuentas.</li>
          <li>Las cuentas marcadas como ocultas no se muestran en el dashboard.</li>
          <li>Requiere fingerprint confiable si se activa ENFORCE_TRUSTED_DEVICES.</li>
        </ul>
      </div>
    </section>
  `;
};
