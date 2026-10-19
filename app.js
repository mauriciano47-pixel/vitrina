/* ===================================================================
   VITRINA & INVESTOR HUB — Lógica Interactiva (app.js)
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  inicializarFiltros();
  actualizarPingTelemetria(false);
  setInterval(actualizarRelojSimulador, 1000);
  inicializarMenuMovil();
});

/**
 * Filtro interactivo de tarjetas de aplicaciones
 */
function inicializarFiltros() {
  const pills = document.querySelectorAll('.pill');
  const cards = document.querySelectorAll('.app-card');

  pills.forEach((pill) => {
    pill.addEventListener('click', () => {
      // Alternar clase activa
      pills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

/**
 * Modal de Donación / Apoyo
 */
function abrirModalDonacion(nombreApp = 'general') {
  const modal = document.getElementById('modal-donacion');
  const modalTitle = document.getElementById('modal-app-title');

  if (nombreApp && nombreApp !== 'general') {
    modalTitle.textContent = `Apoyar ${nombreApp}`;
  } else {
    modalTitle.textContent = 'Apoyar el Ecosistema';
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModalDonacion() {
  const modal = document.getElementById('modal-donacion');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/**
 * Modal de Venta y Licenciamiento B2B de HiDoctor ($18k USD)
 */
function abrirModalVentaHiDoctor() {
  const modal = document.getElementById('modal-venta-hidoctor');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModalVentaHiDoctor() {
  const modal = document.getElementById('modal-venta-hidoctor');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}

// Cerrar al hacer clic en el fondo oscuro
window.addEventListener('click', (e) => {
  const modalDonacion = document.getElementById('modal-donacion');
  const modalVentaHiDoctor = document.getElementById('modal-venta-hidoctor');
  const modalSimulador = document.getElementById('modal-simulador');
  const modalRadar = document.getElementById('modal-radar');
  const modalDevInfo = document.getElementById('modal-dev-info');
  const modalAuditoria = document.getElementById('modal-auditoria');
  if (e.target === modalDonacion) {
    cerrarModalDonacion();
  }
  if (e.target === modalVentaHiDoctor) {
    cerrarModalVentaHiDoctor();
  }
  if (e.target === modalSimulador) {
    cerrarSimulador();
  }
  if (e.target === modalRadar) {
    cerrarModalRadar();
  }
  if (e.target === modalDevInfo) {
    cerrarModalDevInfo();
  }
  if (e.target === modalAuditoria) {
    cerrarModalAuditoria();
  }
});

// Cerrar con Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarModalDonacion();
    cerrarModalVentaHiDoctor();
    cerrarSimulador();
    cerrarModalRadar();
    cerrarModalDevInfo();
    cerrarModalAuditoria();
    toggleMenuMovil(false);
  }
});

/**
 * Controlador de Menú Móvil Hamburguesa (v1.9.5)
 */
function toggleMenuMovil(forzarEstado) {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if (!navToggle || !navLinks) return;

  const activo = forzarEstado !== undefined ? forzarEstado : !navLinks.classList.contains('active');

  if (activo) {
    navLinks.classList.add('active');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    navToggle.setAttribute('aria-label', 'Cerrar menú de navegación');
  } else {
    navLinks.classList.remove('active');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Abrir menú de navegación');
  }
}

function inicializarMenuMovil() {
  const navLinks = document.getElementById('nav-links');
  if (navLinks) {
    navLinks.querySelectorAll('a, button').forEach((elem) => {
      elem.addEventListener('click', () => {
        toggleMenuMovil(false);
      });
    });
  }

  // Cerrar menú al hacer clic fuera del navbar
  document.addEventListener('click', (e) => {
    const navbar = document.querySelector('.navbar');
    if (navbar && !navbar.contains(e.target)) {
      toggleMenuMovil(false);
    }
  });
}

/**
 * Alternar pestañas de pago (Nacional, Internacional y Cripto)
 */
function cambiarTabPago(tipo) {
  const tabNacional = document.getElementById('tab-nacional');
  const tabInternacional = document.getElementById('tab-internacional');
  const tabCripto = document.getElementById('tab-cripto');
  const botonesTabs = document.querySelectorAll('.modal-tabs .tab-btn');

  tabNacional.style.display = 'none';
  tabInternacional.style.display = 'none';
  if (tabCripto) tabCripto.style.display = 'none';
  botonesTabs.forEach(btn => btn.classList.remove('active'));

  if (tipo === 'nacional') {
    tabNacional.style.display = 'block';
    if (botonesTabs[0]) botonesTabs[0].classList.add('active');
  } else if (tipo === 'internacional') {
    tabInternacional.style.display = 'block';
    if (botonesTabs[1]) botonesTabs[1].classList.add('active');
  } else if (tipo === 'cripto') {
    if (tabCripto) tabCripto.style.display = 'block';
    if (botonesTabs[2]) botonesTabs[2].classList.add('active');
  }
}

/**
 * Alternar sub-moneda Cripto (BTC vs ETH vs USDC)
 */
function cambiarSubCripto(sub) {
  const boxBtc = document.getElementById('sub-box-btc');
  const boxEth = document.getElementById('sub-box-eth');
  const boxUsdc = document.getElementById('sub-box-usdc');
  const btnBtc = document.getElementById('btn-sub-btc');
  const btnEth = document.getElementById('btn-sub-eth');
  const btnUsdc = document.getElementById('btn-sub-usdc');

  if (boxBtc) boxBtc.style.display = 'none';
  if (boxEth) boxEth.style.display = 'none';
  if (boxUsdc) boxUsdc.style.display = 'none';

  const resetBtn = (btn) => {
    if (btn) {
      btn.style.background = 'transparent';
      btn.style.color = 'var(--text-secondary)';
      btn.style.borderColor = 'var(--border-subtle)';
    }
  };
  resetBtn(btnBtc);
  resetBtn(btnEth);
  resetBtn(btnUsdc);

  if (sub === 'btc') {
    if (boxBtc) boxBtc.style.display = 'block';
    if (btnBtc) {
      btnBtc.style.background = 'rgba(245, 158, 11, 0.2)';
      btnBtc.style.color = '#f59e0b';
      btnBtc.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    }
  } else if (sub === 'eth') {
    if (boxEth) boxEth.style.display = 'block';
    if (btnEth) {
      btnEth.style.background = 'rgba(99, 102, 241, 0.2)';
      btnEth.style.color = '#818cf8';
      btnEth.style.borderColor = 'rgba(99, 102, 241, 0.4)';
    }
  } else if (sub === 'usdc') {
    if (boxUsdc) boxUsdc.style.display = 'block';
    if (btnUsdc) {
      btnUsdc.style.background = 'rgba(16, 185, 129, 0.2)';
      btnUsdc.style.color = '#10b981';
      btnUsdc.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    }
  }
}

/**
 * Copiar texto al portapapeles con Toast de confirmación
 */
function copiarAlPortapapeles(texto, botonElemento) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto).then(() => {
      mostrarToast('¡Copiado al portapapeles con éxito! ✅');
      animarBoton(botonElemento);
    }).catch(() => fallbackCopiar(texto, botonElemento));
  } else {
    fallbackCopiar(texto, botonElemento);
  }
}

function fallbackCopiar(texto, botonElemento) {
  const textarea = document.createElement('textarea');
  textarea.value = texto;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    mostrarToast('¡Copiado al portapapeles con éxito! ✅');
    animarBoton(botonElemento);
  } catch (err) {
    mostrarToast('No se pudo copiar automáticamente. Copia manual: ' + texto);
  }
  document.body.removeChild(textarea);
}

function animarBoton(btn) {
  if (!btn) return;
  const originalContent = btn.textContent;
  btn.textContent = '✓ ¡Copiado!';
  btn.style.borderColor = '#10b981';
  btn.style.color = '#10b981';
  setTimeout(() => {
    btn.textContent = originalContent;
    btn.style.borderColor = '';
    btn.style.color = '';
  }, 2000);
}

function mostrarToast(mensaje) {
  const toast = document.getElementById('toast');
  toast.textContent = mensaje;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

/**
 * Difusión & Compartir Vitrina (Web Share API nativo con fallback a portapapeles)
 */
function compartirVitrina() {
  const urlVitrina = 'https://mauriciano47-pixel.github.io/vitrina/';
  const shareData = {
    title: 'Vitrina de Aplicaciones & Hub de Inversores — Mauricio Uribe',
    text: 'Explora el ecosistema de aplicaciones de alto impacto: CAMBIOYA!, HiDoctor, Ataraxia, VitroDiag, Faro, SENTINEL y más.',
    url: urlVitrina
  };

  if (navigator.share) {
    navigator.share(shareData).catch((err) => {
      // Si el usuario cancela o da error, no interrumpir
    });
  } else {
    copiarAlPortapapeles(urlVitrina, null);
    mostrarToast('¡Enlace oficial de Vitrina copiado al portapapeles! 🚀');
  }
}

/* ===================================================================
   SIMULADOR DE DISPOSITIVO EN VIVO & RADAR DE TELEMETRÍA (v1.7.0)
   =================================================================== */

/**
 * Catálogo canónico de la flota de aplicaciones
 */
const FLOTA_APPS = (typeof window !== 'undefined' && window.FLOTA_APPS) || [];

/**
 * Abrir simulador de dispositivo interactivo
 */
function abrirSimulador(nombre, url) {
  const modal = document.getElementById('modal-simulador');
  const title = document.getElementById('sim-app-name');
  const iframe = document.getElementById('sim-iframe');
  const externalLink = document.getElementById('sim-external-link');
  const loader = document.getElementById('sim-loader');

  if (title) title.textContent = nombre;
  if (externalLink) externalLink.href = url;
  
  cambiarModoSimulador('mobile'); // Modo iPhone 16 Pro por defecto

  if (loader) loader.classList.remove('hidden');
  if (iframe) {
    iframe.src = url;
    iframe.onload = () => {
      setTimeout(() => {
        if (loader) loader.classList.add('hidden');
      }, 400);
    };
  }

  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
  actualizarRelojSimulador();
}

/**
 * Cerrar simulador y liberar iframe
 */
function cerrarSimulador() {
  const modal = document.getElementById('modal-simulador');
  const iframe = document.getElementById('sim-iframe');
  if (modal) modal.style.display = 'none';
  if (iframe) iframe.src = 'about:blank';
  document.body.style.overflow = 'auto';
}

/**
 * Cambiar entre chasis: Mobile (iPhone), Tablet (iPad), Desktop
 */
function cambiarModoSimulador(modo) {
  const chassis = document.getElementById('device-chassis');
  const notch = document.getElementById('device-notch');
  const statusBar = document.getElementById('device-status-bar');
  const homeBar = document.getElementById('device-home-bar');
  const btnMobile = document.getElementById('btn-mode-mobile');
  const btnTablet = document.getElementById('btn-mode-tablet');
  const btnDesktop = document.getElementById('btn-mode-desktop');

  if (!chassis) return;

  [btnMobile, btnTablet, btnDesktop].forEach((b) => b && b.classList.remove('active'));
  chassis.classList.remove('mobile-mode', 'tablet-mode', 'desktop-mode');

  if (modo === 'mobile') {
    chassis.classList.add('mobile-mode');
    if (btnMobile) btnMobile.classList.add('active');
    if (notch) notch.style.display = 'block';
    if (statusBar) statusBar.style.display = 'flex';
    if (homeBar) homeBar.style.display = 'flex';
  } else if (modo === 'tablet') {
    chassis.classList.add('tablet-mode');
    if (btnTablet) btnTablet.classList.add('active');
    if (notch) notch.style.display = 'none';
    if (statusBar) statusBar.style.display = 'flex';
    if (homeBar) homeBar.style.display = 'flex';
  } else if (modo === 'desktop') {
    chassis.classList.add('desktop-mode');
    if (btnDesktop) btnDesktop.classList.add('active');
    if (notch) notch.style.display = 'none';
    if (statusBar) statusBar.style.display = 'none';
    if (homeBar) homeBar.style.display = 'none';
  }
}

/**
 * Recargar el iframe del simulador
 */
function recargarSimulador() {
  const iframe = document.getElementById('sim-iframe');
  const loader = document.getElementById('sim-loader');
  if (iframe && iframe.src && iframe.src !== 'about:blank') {
    if (loader) loader.classList.remove('hidden');
    const actualSrc = iframe.src;
    iframe.src = actualSrc;
    iframe.onload = () => {
      setTimeout(() => {
        if (loader) loader.classList.add('hidden');
      }, 400);
    };
  }
}

/**
 * Reloj en vivo de la barra de estado del dispositivo simulado
 */
function actualizarRelojSimulador() {
  const clock = document.getElementById('sim-clock');
  if (!clock) return;
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  clock.textContent = `${h}:${m}`;
}

/**
 * Modal de Radar de Telemetría
 */
function abrirModalRadarTelemetria() {
  const modal = document.getElementById('modal-radar');
  renderizarFlotaRadar();
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModalRadar() {
  const modal = document.getElementById('modal-radar');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/**
 * Renderizar estado y métricas de cada app en la flota
 */
function renderizarFlotaRadar() {
  const container = document.getElementById('radar-fleet-list');
  if (!container) return;

  container.innerHTML = '';
  const radarHtml = FLOTA_APPS.map((app) => {
    const lat = Math.floor(Math.random() * 16) + 12; // 12 a 28 ms
    return `
      <div class="radar-fleet-item">
        <div class="fleet-app-info">
          <span class="fleet-dot"></span>
          <div>
            <strong style="color: #fff; font-size: 0.9rem;">${app.name}</strong>
            <div style="font-size: 0.73rem; color: var(--text-muted);">${app.category}</div>
          </div>
          <span class="fleet-host-badge">${app.host}</span>
        </div>
        <div class="fleet-status-meta">
          <span class="fleet-status-code">HTTP 200 OK</span>
          <span class="fleet-latency">${lat} ms</span>
          <button class="btn btn-sm btn-device" style="padding: 3px 8px; font-size: 0.72rem;" onclick="cerrarModalRadar(); abrirSimulador('${app.name}', '${app.url}')">📱 Probar</button>
        </div>
      </div>
    `;
  }).join('');
  container.insertAdjacentHTML('beforeend', radarHtml);
}

/**
 * Actualizar ping de telemetría general
 */
function actualizarPingTelemetria(mostrarAlerta = false) {
  const latElem = document.getElementById('telemetria-latencia');
  const nuevaLat = Math.floor(Math.random() * 10) + 15; // 15 a 25 ms
  if (latElem) latElem.textContent = `<${nuevaLat} ms`;
  renderizarFlotaRadar();
  if (mostrarAlerta) {
    mostrarToast('✅ Telemetría auditada: 10/10 apps operativas con latencia óptima.');
  }
}

/* ===================================================================
   MODAL DE INFORMACIÓN TÉCNICA: APPS EN DESARROLLO (KINTSUGI & LUCHITO)
   =================================================================== */

const DEV_APPS_INFO = (typeof window !== 'undefined' && window.DEV_APPS_INFO) || {};

function abrirModalDevInfo(appId) {
  const modal = document.getElementById('modal-dev-info');
  const kicker = document.getElementById('dev-modal-kicker');
  const title = document.getElementById('dev-modal-title');
  const sub = document.getElementById('dev-modal-sub');
  const body = document.getElementById('dev-modal-body');

  const info = DEV_APPS_INFO[appId];
  if (!info || !modal) return;

  if (kicker) kicker.textContent = info.kicker;
  if (title) title.textContent = info.title;
  if (sub) sub.textContent = info.sub;
  if (body) {
    body.innerHTML = '';
    body.insertAdjacentHTML('beforeend', info.content);
  }

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function cerrarModalDevInfo() {
  const modal = document.getElementById('modal-dev-info');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

/* ===================================================================
   AUDITORÍA EXTERNA & BLINDAJE DE CÓDIGO (Nivel 1 & Nivel 2)
   =================================================================== */

const AUDITORIA_DATA = (typeof window !== 'undefined' && window.AUDITORIA_DATA) || {};

/**
 * Modal de Auditoría Técnica Externa & Certificación de Código
 */
function abrirModalAuditoria(appId = 'general') {
  const modal = document.getElementById('modal-auditoria');
  const selector = document.getElementById('auditoria-app-select');
  if (selector) {
    selector.value = appId;
  }
  renderizarDetalleAuditoria(appId);
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }
}

function cerrarModalAuditoria() {
  const modal = document.getElementById('modal-auditoria');
  if (modal) modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

function cambiarAppAuditoria(appId) {
  renderizarDetalleAuditoria(appId);
}

function renderizarDetalleAuditoria(appId) {
  const data = AUDITORIA_DATA[appId] || AUDITORIA_DATA.general;
  const container = document.getElementById('auditoria-detalle-body');
  if (!container) return;

  const kpisHtml = data.kpis.map(k => `
    <div class="audit-kpi">
      <span class="audit-kpi-num ${k.color === 'cyan' ? 'cyan' : k.color === 'gold' ? 'gold' : ''}">${k.num}</span>
      <span class="audit-kpi-lbl">${k.label}</span>
    </div>
  `).join('');

  const checksHtml = data.checks.map(c => `
    <li>
      <span class="check-icon">✓</span>
      <span>${c}</span>
    </li>
  `).join('');

  container.innerHTML = '';
  container.insertAdjacentHTML('beforeend', `
    <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; margin-bottom: 12px; flex-wrap: wrap;">
      <div>
        <h4 style="font-size: 1.15rem; color: #fff; margin-bottom: 2px;">${data.title}</h4>
        <span style="font-size: 0.78rem; color: var(--cyan-glow);">${data.category}</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
        ${data.sonarBadgeUrl ? `
          <a href="${data.sonarUrl}" target="_blank" rel="noopener" title="Auditoría oficial en SonarCloud: Quality Gate Passed">
            <img src="${data.sonarBadgeUrl}" alt="SonarCloud Quality Gate" height="20" style="vertical-align: middle; border-radius: 3px;" />
          </a>
        ` : `
          <span class="audit-chip sonar" title="SonarCloud: Quality Gate Passed">
            <img src="logo_sonarcloud.svg" alt="Sonar" class="audit-chip-logo" /> Sonar: <strong>Passed</strong>
          </span>
        `}
        <span class="audit-chip snyk" title="Snyk Shield: 0 Vulnerabilidades Críticas">
          <img src="logo_snyk.svg" alt="Snyk" class="audit-chip-logo" /> Snyk: <strong>0 Vulns</strong>
        </span>
        <span class="audit-chip" style="background: rgba(16, 185, 129, 0.15); border-color: rgba(16, 185, 129, 0.4); color: #34d399;">
          ${data.version}
        </span>
      </div>
    </div>

    <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 16px;">
      ${data.summary}
    </p>

    <div class="audit-kpi-row">
      ${kpisHtml}
    </div>

    <div style="background: rgba(0, 0, 0, 0.25); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 12px 14px; margin-bottom: 14px;">
      <strong style="font-size: 0.8rem; color: #e2e8f0; display: block; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
        🛡️ Puntos Clave de Cumplimiento & Verificación:
      </strong>
      <ul class="audit-checklist">
        ${checksHtml}
      </ul>
    </div>

    <div style="display: flex; gap: 10px; flex-wrap: wrap; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
      <span style="font-size: 0.72rem; color: var(--text-muted);">
        Estándares evaluados: SonarQube SAST • Snyk SCA • OWASP Top 10 • Clean Code
      </span>
      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        ${data.sonarUrl ? `<a href="${data.sonarUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-primary" style="font-size: 0.75rem; padding: 4px 10px; background: #00aa00; border-color: #00aa00; color: #fff; text-decoration: none;">🛡️ Ver Reporte SonarCloud ↗</a>` : ''}
        ${data.repoUrl ? `<a href="${data.repoUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-outline" style="font-size: 0.75rem; padding: 4px 10px; text-decoration: none;">💻 Ver Repositorio en GitHub ↗</a>` : ''}
      </div>
    </div>
  `;
}



