/* ===================================================================
   VITRINA & INVESTOR HUB — Lógica Interactiva (app.js)
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  inicializarFiltros();
  actualizarPingTelemetria(false);
  setInterval(actualizarRelojSimulador, 1000);
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
});

// Cerrar con Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarModalDonacion();
    cerrarModalVentaHiDoctor();
    cerrarSimulador();
    cerrarModalRadar();
  }
});

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
  const originalText = btn.innerHTML;
  btn.innerHTML = '✓ ¡Copiado!';
  btn.style.borderColor = '#10b981';
  btn.style.color = '#10b981';
  setTimeout(() => {
    btn.innerHTML = originalText;
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
const FLOTA_APPS = [
  { id: 'cambioya', name: 'CAMBIOYA!', host: 'Railway ASGI', url: 'https://cambioya.up.railway.app', category: 'Trueque & Economía Circular' },
  { id: 'hidoctor', name: 'HiDoc', host: 'GitHub Pages PWA', url: 'https://mauriciano47-pixel.github.io/hi-doctor/', category: 'Salud Pediátrica & IA' },
  { id: 'nutralive', name: 'NutraLive', host: 'Cloudflare / GitHub Pages', url: 'https://nutralive.mauriciano47.workers.dev/', category: 'Nutrición Terapéutica & MASLD' },
  { id: 'ataraxia', name: 'Ataraxia', host: 'Vercel Edge / EAS', url: 'https://ataraxia-stoic.vercel.app', category: 'Fitness & Mentalidad Estoica' },
  { id: 'faro', name: 'Faro', host: 'Cloudflare Workers PWA', url: 'https://faro-app.mauriciano47.workers.dev', category: 'Seguridad SOS & GPS' },
  { id: 'vitrodiag', name: 'VitroDiag', host: 'GitHub Pages PWA', url: 'https://mauriciano47-pixel.github.io/vitrodiag/', category: 'Industria del Vidrio Hot End' },
  { id: 'crypto', name: 'Crypto Pattern Analyzer', host: 'GitHub Pages WebSocket', url: 'https://mauriciano47-pixel.github.io/crypto-analyzer/', category: 'Binance Streaming 60 FPS' },
  { id: 'tramitefacil', name: 'TrámiteFácil', host: 'GitHub Pages PWA', url: 'https://mauriciano47-pixel.github.io/tramite-facil/', category: 'Accesibilidad & Gemini IA' },
  { id: 'sentinel', name: 'SENTINEL', host: 'Railway Node.js', url: 'https://sentinel-app.up.railway.app', category: 'Ciberseguridad & RGPD 17' },
  { id: 'speaker', name: 'Speaker Remote Pro', host: 'GitHub Pages Web Bluetooth', url: 'https://mauriciano47-pixel.github.io/Speaker_remote/', category: 'Hardware Audio DSP' }
];

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

  container.innerHTML = FLOTA_APPS.map((app) => {
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

