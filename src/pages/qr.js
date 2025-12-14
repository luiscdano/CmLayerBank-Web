export const QrPage = (state = {}) => {
  const qr = state.qrResult;
  const ghost = state.ghostMode;
  return `
    <section class="grid two">
      <div class="card">
        <p class="tag">Generar QR</p>
        <form class="form" id="qr-generate-form">
          <label>Merchant ID
            <input type="text" name="merchantId" placeholder="UUID del comercio" required />
          </label>
          <label>Monto
            <input type="number" step="0.01" name="amount" placeholder="1200" required />
          </label>
          <label>Moneda
            <input type="text" name="currency" value="DOP" />
          </label>
          <label>Descripción
            <input type="text" name="description" placeholder="Compra QR" />
          </label>
          <label>Expira en (minutos)
            <input type="number" name="expiresMinutes" value="30" />
          </label>
          <button class="btn secondary" type="submit">Generar</button>
        </form>
        <p class="muted">Usa el QR generado en el módulo BNPL o compártelo al cliente.</p>
      </div>
      <div class="card">
        <p class="tag">Escanear/validar QR</p>
        <div class="scanner">
          <div class="scanner-frame">
            <div class="scan-line"></div>
          </div>
          <button class="btn ghost" type="button" id="btn-qr-camera">Escanear con cámara</button>
          <video id="qr-video" class="hidden" playsinline></video>
          <div id="qr-fallback"></div>
          <p class="muted">Ingresa payload QR o usa la cámara (BarcodeDetector o fallback html5-qrcode).</p>
        </div>
        <form class="form" id="qr-scan-form">
          <label>Payload QR (JSON)
            <input type="text" name="qrData" placeholder='{"merchantId":"...","amount":1200,"currency":"DOP","description":"Compra","expiresAt":"2025-12-31T00:00:00Z","checksum":"..."}' />
          </label>
          <button class="btn primary" type="submit">Validar QR</button>
        </form>
      </div>
    </section>
    <section class="grid two">
      <div class="card">
        <p class="tag">Detalle del comercio</p>
        ${
          qr && !qr.error
            ? `
          <p class="label">${qr.merchant?.name || 'Comercio'}</p>
          <p class="value sensitive">${ghost ? '••••' : `RD$ ${Number(qr.amount).toFixed(2)}`} (${qr.currency})</p>
          <p class="muted">${qr.description}</p>
          <p class="muted">Expira: ${qr.expiresAt}</p>
          <form class="form" id="qr-create-bnpl-form">
            <input type="hidden" name="qrData" value='${JSON.stringify(qr)}' />
            <button class="btn secondary" type="submit">Crear BNPL desde QR</button>
          </form>
        `
            : `<p class="muted">${qr?.error || 'Valida un QR para ver detalles.'}</p>`
        }
      </div>
    </section>
  `;
};
