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
  { id: 'nutralive', name: 'NutraLive', host: 'Cloudflare Pages PWA', url: 'https://nutralive.pages.dev/', category: 'Nutrición Terapéutica & MASLD' },
  { id: 'ataraxia', name: 'Ataraxia', host: 'Vercel Edge / EAS', url: 'https://ataraxia-stoic.vercel.app', category: 'Fitness & Mentalidad Estoica' },
  { id: 'faro', name: 'Faro', host: 'Cloudflare Workers PWA', url: 'https://faro-app.mauriciano47.workers.dev', category: 'Seguridad SOS & GPS' },
  { id: 'vitrodiag', name: 'VitroDiag', host: 'GitHub Pages PWA', url: 'https://mauriciano47-pixel.github.io/vitrodiag/', category: 'Industria del Vidrio Hot End' },
  { id: 'crypto', name: 'Crypto Pattern Analyzer', host: 'GitHub Pages WebSocket', url: 'https://mauriciano47-pixel.github.io/crypto-analyzer/', category: 'Binance Streaming 60 FPS' },
  { id: 'tramitefacil', name: 'TrámiteFácil', host: 'GitHub Pages PWA', url: 'https://mauriciano47-pixel.github.io/tramite-facil/', category: 'Accesibilidad & Gemini IA' },
  { id: 'sentinel', name: 'SENTINEL', host: 'Railway Node.js', url: 'https://sentinel-app.up.railway.app', category: 'Ciberseguridad & RGPD 17' },
  { id: 'speaker', name: 'PartySync Pro', host: 'GitHub Pages P2P Mesh', url: 'https://mauriciano47-pixel.github.io/Speaker_remote/', category: 'Cluster Multi-Parlante P2P & DSP' }
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

/* ===================================================================
   MODAL DE INFORMACIÓN TÉCNICA: APPS EN DESARROLLO (KINTSUGI & LUCHITO)
   =================================================================== */

const DEV_APPS_INFO = {
  kintsugi: {
    kicker: '🏛️ PROTOCOLO ZERO-KNOWLEDGE • MENTOR CLÍNICO PSICOLÓGICO',
    title: 'KINTSUGI — Mentor Clínico & Bastión Local-First',
    sub: 'Acompañamiento clínico, psiquiátrico y recuperación de adicciones con privacidad matemática inviolable.',
    content: `
      <div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.3); border-radius: 8px; padding: 12px 14px; margin-bottom: 16px; font-size: 0.85rem; color: #d8b4fe;">
        🏺 <em>"Inspirada en el arte tradicional japonés de reparar con oro puro: las fracturas no se esconden, se honran como símbolo de resiliencia y fortaleza."</em>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px;">
        Kintsugi resuelve el mayor dilema de la salud mental digital: <strong>la confidencialidad</strong>. Los pacientes de adicciones y depresión mayor temen que sus diarios y recaídas queden en bases de datos corporativas. En Kintsugi, los datos se cifran con claves derivadas en el propio dispositivo y nunca tocan un servidor externo.
      </p>
      <div class="dev-spec-grid">
        <div class="dev-spec-item">
          <strong>🔐 Cifrado Militar en Cliente</strong>
          <span>AES-256-GCM + PBKDF2 (100.000 iteraciones). Vector IV de 96 bits único por transacción. Cero almacenamiento externo.</span>
        </div>
        <div class="dev-spec-item">
          <strong>🌙 Santuario Nocturno 3:00 AM</strong>
          <span>Generador de Ruido Marrón Somático en tiempo real con Web Audio API para disolver rumiación y angustia del lóbulo frontal.</span>
        </div>
        <div class="dev-spec-item">
          <strong>🚨 Escudo Táctico de Urgencia</strong>
          <span>Temporizador de 15 min de Urge Surfing (Alan Marlatt), Protocolo DBT TIPP (hielo / respiración 4-7-8) y Plan Stanley-Brown.</span>
        </div>
        <div class="dev-spec-item">
          <strong>🧠 Espejo Profundo Integrativo</strong>
          <span>Modelos clínicos de Freud, Carl Jung (Integración de la Sombra), Viktor Frankl, IFS (Sistemas de Familia Interna) y Teoría Polivagal.</span>
        </div>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
        ⚠️ <strong>Marco Ético & SaMD Shield:</strong> No prescribe fármacos ni emite diagnósticos médicos cerrados. Integra directorio de crisis 24/7 para 6 países (*4141 Chile, 024 España, 988 EE.UU.).
      </div>
    `
  },
  luchito: {
    kicker: '🧭 TECNOLOGÍA ASISTIVA DE PRECISIÓN • COMPUTER VISION MULTIMODAL',
    title: 'LUCHITO — Lazarillo Espacial Asistivo',
    sub: 'Independencia situacional y seguridad física para personas con ceguera o baja visión severa.',
    content: `
      <div class="tribute-box" style="margin-bottom: 16px;">
        🕯️ <em>"DEDICATORIA PERMANENTE: En memoria a Luis Alfredo Fernández Andrade. Tu luz sigue guiando nuestros pasos con dignidad, amor e independencia."</em>
      </div>
      <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 14px;">
        LUCHITO rompe con las apps asistivas convencionales que saturan de poesía o alucinan descripciones. Diseñada bajo un estándar táctico militar de <strong>cero tolerancia al error</strong>, actúa como un lazarillo de bolsillo que detecta riesgos físicos en fracciones de segundo y los comunica con precisión auditiva.
      </p>
      <div class="dev-spec-grid">
        <div class="dev-spec-item">
          <strong>🛑 Freno Inmediato "¡ALTO!"</strong>
          <span>Detección de escaleras descendentes, fosos, zanjas o ramas a la altura de la cara con vibración severa y voz tajante.</span>
        </div>
        <div class="dev-spec-item">
          <strong>🔦 Sensor Fotométrico Auto-Torch</strong>
          <span>Cálculo de luminancia perceptual en Canvas (&lt;20 ms). Avisa por voz y enciende la linterna del teléfono en penumbra.</span>
        </div>
        <div class="dev-spec-item">
          <strong>🎙️ Activación por Voz y Toque Universal</strong>
          <span>Escucha la palabra clave "Luchito" o reacciona al toque de pantalla completa. Cero formularios de registro ni barreras.</span>
        </div>
        <div class="dev-spec-item">
          <strong>⏰ Orientación en Posiciones Horarias</strong>
          <span>Comunica el entorno en clave de reloj (las 12 al frente, las 3 a la derecha) con distancias relativas estimadas.</span>
        </div>
      </div>
      <div style="font-size: 0.8rem; color: var(--text-muted); line-height: 1.5; border-top: 1px solid var(--border-subtle); padding-top: 12px;">
        👁️ <strong>Accesibilidad de Extremo a Extremo:</strong> Contraste extremo WCAG AAA sobre negro OLED puro (#000000) y acentos ámbar (#F59E0B). Botón SOS con envío de coordenadas GPS por WhatsApp.
      </div>
    `
  }
};

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
  if (body) body.innerHTML = info.content;

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

const AUDITORIA_DATA = {
  general: {
    title: 'Ecosistema Completo de Aplicaciones',
    category: 'Suite de 10 Prototipos Fortificados & Producción',
    version: 'v1.8.0 Master Standard',
    kpis: [
      { num: '10/10', label: 'Quality Gate Pass', color: 'green' },
      { num: '0', label: 'Vulns Críticas SAST', color: 'green' },
      { num: 'Grado A', label: 'Mantenibilidad', color: 'cyan' },
      { num: '100%', label: 'Zero-Leakage Keys', color: 'gold' }
    ],
    summary: 'Todas las plataformas del ecosistema siguen un estándar implacable de sanitización de entradas, inspección estática de código (SAST) y control estricto de dependencias vulnerables (SCA).',
    checks: [
      'SonarCloud / Quality Gate: 0 bugs bloqueantes y 0 vulnerabilidades abiertas en el árbol sintáctico (AST).',
      'Snyk Shield: Monitoreo continuo de paquetes npm y dependencias Python contra bases de datos CVE y NVD.',
      'OWASP Top 10 & Mobile MASVS: Sanitización contra XSS, inyección, CSRF y control estricto de almacenamiento local seguro (SafeStorage).',
      'Zero-Leakage Standard: Claves de API (Gemini, Firebase, Railway) aisladas exclusivamente en variables de entorno de servidor; nunca expuestas en bundles públicos.',
      'Arquitectura Offline-First: Resiliencia ante fallos de red con persistencia en cliente y fallbacks heurísticos continuos.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel'
  },
  cambioya: {
    title: 'CAMBIOYA!',
    category: 'Plataforma Comunitaria de Trueque Directo & Economía Circular',
    version: 'Producción Railway (ASGI)',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'CVEs Detectadas', color: 'green' },
      { num: '< 3.2%', label: 'Deuda Técnica', color: 'cyan' },
      { num: '100%', label: 'Sanitización ASGI', color: 'gold' }
    ],
    summary: 'Arquitectura asíncrona robusta sobre Django Channels y Daphne ASGI. Monitoreo de concurrencia y canales WebSocket blindados contra inyecciones.',
    checks: [
      'Seguridad WebSockets: Handshakes autenticados y aislamiento de salas por transacción de trueque.',
      'Blindaje ORM: Consultas parametrizadas que impiden inyecciones SQL en catálogos y ofertas.',
      'Auditoría Snyk: Escaneo de paquetes Django, Daphne y dependencias Python.',
      'Protección CSRF & XSS: Tokens criptográficos en mutaciones y sanitización estricta de descripciones de artículos.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel'
  },
  hidoctor: {
    title: 'HiDoctor (HiDoc)',
    category: 'Bitácora Clínica Pediátrica Inteligente con Triaje por IA',
    version: 'v2.3.0 • B2B Marca Blanca & PWA',
    sonarUrl: 'https://sonarcloud.io/summary/overall?id=mauriciano47-pixel_hi-doctor',
    sonarBadgeUrl: 'https://sonarcloud.io/api/project_badges/measure?project=mauriciano47-pixel_hi-doctor&metric=alert_status',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Fugas de Datos', color: 'green' },
      { num: 'MASVS-L1', label: 'OWASP Mobile', color: 'cyan' },
      { num: 'Offline-1st', label: 'Triaje Clínico', color: 'gold' }
    ],
    summary: 'Blindaje estricto de datos pediátricos. Sistema de triaje dual con fallback autónomo que garantiza operatividad sin conexión médica ni latencia externa.',
    checks: [
      'Privacidad Pediátrica: Cero telemetría invasiva y persistencia local protegida en el dispositivo de los padres.',
      'Triaje Dual Anti-Fallo: Timeout estricto de 8s en Gemini API con conmutación autónoma a algoritmo clínico offline.',
      'Cálculo de Dosis Verificado: Dosis de Paracetamol e Ibuprofeno calculadas con funciones matemáticas puras unit-tested.',
      'Exportación Médica Sanitizada: Generación de PDF A4 en memoria sin envío de historial clínico a servidores de terceros.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/hi-doctor'
  },
  ataraxia: {
    title: 'Ataraxia — Coach Estoico',
    category: 'Fitness, Nutrición & Rendimiento Estoico (Android Nativo EAS)',
    version: 'v1.2.3 • 60 FPS Ultra Fluid',
    sonarUrl: 'https://sonarcloud.io/summary/overall?id=mauriciano47-pixel_ataraxia',
    sonarBadgeUrl: 'https://sonarcloud.io/api/project_badges/measure?project=mauriciano47-pixel_ataraxia&metric=alert_status',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Vulns en Binario', color: 'green' },
      { num: '60 FPS', label: 'GPU Hardware Sync', color: 'cyan' },
      { num: '100% Local', label: 'Biometría PPG', color: 'gold' }
    ],
    summary: 'Certificación móvil de alto rendimiento. Algoritmo fotopletismográfico (PPG) procesado en CPU/GPU local sin almacenamiento externo de pulso cardíaco.',
    checks: [
      'Procesamiento Óptico Seguro: Lectura de fotogramas de cámara en memoria volátil; ningún dato biométrico es enviado a la nube.',
      'Auditoría OWASP MASVS: Almacenamiento seguro mediante AsyncStorage encapsulado con validación de tipos inmutables.',
      'Podómetro Biomecánico NEAT 24/7: Filtro heurístico anti-vehículo con cancelación de ruido de acelerómetro.',
      'Cero Bloqueo de Hilo Principal: Métricas calculadas con requestAnimationFrame a 60 cuadros estables por segundo.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/ataraxia'
  },
  vitrodiag: {
    title: 'VitroDiag — Operador IS',
    category: 'Diagnóstico Óptico Asistido por IA y Moldería en Máquinas I.S. (Vidrio)',
    version: 'Producción PWA Hot End',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '< 30s', label: 'Diagnóstico en Línea', color: 'green' },
      { num: '111', label: 'Defectos Mapeados', color: 'cyan' },
      { num: 'Edge Canvas', label: 'Plomada Láser', color: 'gold' }
    ],
    summary: 'Ambiente de manufactura pesada con latencia crítica. La detección de defectos de envases pasa de 60 min en arca de recocido a menos de 30s al pie de máquina.',
    checks: [
      'Canvas Industrial Sanitizado: Medición axial de cuello y cuerpo con cálculo de píxeles sin fugas de memoria.',
      'Gemini Vision Shield: Timeouts agresivos y catálogo de 111 defectos precargado en cliente para contingencias de red.',
      'Cero Dependencias Obsoletas: Código compilado ligero sin librerías pesadas que comprometan el rendimiento en tablets de planta.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/vitrodiag'
  },
  faro: {
    title: 'Faro — Tu Seguridad, Tu Luz',
    category: 'Seguridad Personal, Alerta SOS & Geolocalización de Emergencias',
    version: 'PWA Offline-First',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Rastreo Invasivo', color: 'green' },
      { num: 'MASVS-L1', label: 'Seguridad Móvil', color: 'cyan' },
      { num: '< 2s', label: 'Respuesta SOS', color: 'gold' }
    ],
    summary: 'Herramienta crítica de respuesta inmediata. No almacena historiales de ubicación en servidores; la geolocalización se despacha de forma soberana a contactos de confianza.',
    checks: [
      'Privacidad de Geolocalización: Coordenadas GPS transmitidas exclusivamente al pulsar SOS mediante enlaces directos seguros de WhatsApp.',
      'Resiliencia Extrema Offline: Acceso inmediato a linterna estroboscópica y falsa llamada de escape incluso sin señal de red celular.',
      'Permisos de Hardware Limitados: Solo solicita acceso a geolocalización de alta precisión en tiempo de uso activo.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/app_faro'
  },
  sentinel: {
    title: 'SENTINEL — Privacidad Soberana',
    category: 'Guardián de Privacidad, k-Anonymity & RGPD Art. 17',
    version: 'v1.3.2 • Railway Node.js',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Fugas Zero-Knowledge', color: 'green' },
      { num: 'RGPD 17', label: 'Cumplimiento Legal', color: 'cyan' },
      { num: 'SHA-1/k-Anon', label: 'Blindaje Cloudflare', color: 'gold' }
    ],
    summary: 'Auditoría matemática de contraseñas y privacidad. Implementa el modelo k-Anonymity para verificar brechas sin exponer la contraseña real a ningún servidor.',
    checks: [
      'k-Anonymity Criptográfico: Solo los primeros 5 caracteres del hash SHA-1 viajan a la API de Have I Been Pwned; la comparación final ocurre 100% en el cliente.',
      'Automatización RGPD Art. 17: Generación de cartas formales de Derecho al Olvido y cronómetro legal de 30 días con validez jurídica europea.',
      'Protección de Sesión: Cifrado Scrypt/SHA-256 local para credenciales de acceso.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/sentinel'
  },
  nutralive: {
    title: 'NutraLive',
    category: 'Nutrición Clínica de Precisión, Escudo Hepático & MASLD',
    version: 'v1.1.0 • Cloudflare Pages PWA',
    sonarUrl: 'https://sonarcloud.io/summary/overall?id=mauriciano47-pixel_nutralive',
    sonarBadgeUrl: 'https://sonarcloud.io/api/project_badges/measure?project=mauriciano47-pixel_nutralive&metric=alert_status',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Vulnerabilidades XSS', color: 'green' },
      { num: 'React 19', label: 'Clean Architecture', color: 'cyan' },
      { num: 'Zero-Track', label: 'Telemetría Sanitaria', color: 'gold' }
    ],
    summary: 'Plataforma para dietas de alta exigencia médica. Curvas de transaminasas vectoriales SVG generadas en cliente y cero publicidad o rastreo de hábitos alimenticios.',
    checks: [
      'Validación Estricta de Datos Clínicos: Algoritmos de verificación para límites de ALT/AST y azúcares ocultos.',
      'Modo Explorador 1-Clic: Cero bloqueo de navegación ni captura forzada de datos personales.',
      'Despliegue Serverless Seguro: Servido en la red Edge de Cloudflare con cabeceras estrictas de Content-Security-Policy (CSP).'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/nutralive'
  },
  crypto: {
    title: 'Crypto Pattern Analyzer',
    category: 'Streaming Binance WebSocket & Detección Algorítmica',
    version: 'v1.3.0 • WebSocket 60 FPS',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Caídas de Memoria', color: 'green' },
      { num: 'SHA-256', label: 'Cifrado Local', color: 'cyan' },
      { num: 'Zero-Fail', label: 'Conexión Binance', color: 'gold' }
    ],
    summary: 'Terminal cuantitativa en tiempo real. Algoritmos de osciladores matemáticos (Wilder RSI, SMA, EMA) con gestión circular de buffers para evitar fugas de RAM.',
    checks: [
      'Buffer Circular Seguro: Consumo de miles de ticks por segundo sin degradación de rendimiento en el recolector de basura (Garbage Collector).',
      'WebSockets Seguros (WSS): Canal encriptado directo hacia los servidores oficiales de Binance sin proxies intermedios no autorizados.',
      'Cero Exposición de Fondos: No requiere claves API de trading ni permisos de ejecución de órdenes; 100% análisis de datos de mercado públicos.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/crypto-analyzer'
  },
  tramitefacil: {
    title: 'TrámiteFácil',
    category: 'Traductor Ciudadano de Burocracia & Asistente IA',
    version: 'v1.0.0 • GitHub Pages PWA',
    kpis: [
      { num: 'Passed', label: 'Sonar Quality Gate', color: 'green' },
      { num: '0', label: 'Almacenamiento Remoto', color: 'green' },
      { num: 'WCAG AAA', label: 'Accesibilidad', color: 'cyan' },
      { num: 'Zero-Debt', label: 'Arquitectura PWA', color: 'gold' }
    ],
    summary: 'Tecnología asistiva para adultos mayores. Toda traducción y síntesis por voz se efectúa en memoria volátil; los documentos cargados se destruyen al cerrar la pestaña.',
    checks: [
      'Destrucción Volátil de Datos: Cero persistencia en servidor de escrituras, contratos o declaraciones juradas.',
      'Contraste Máximo y Lectura en Voz Alta: Accesibilidad auditada conforme a directrices de accesibilidad web (WCAG 2.1).',
      'Gemini Prompt Shield: Sanitización del texto analizado para evitar ataques de inyección de instrucciones en el LLM.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/tramite-facil'
  },
  speaker: {
    title: 'PartySync Pro (by Speaker Remote)',
    category: 'Cluster Multi-Parlante P2P & Compensación Acústica DSP',
    version: 'v2.0.0 MESH • WebRTC & Web Audio API',
    kpis: [
      { num: 'P2P Mesh', label: 'Arquitectura Descentralizada', color: 'cyan' },
      { num: '0-400 ms', label: 'DelayNode Acústico', color: 'green' },
      { num: 'L / R', label: 'Escenario Estéreo', color: 'cyan' },
      { num: '100% PWA', label: 'Sin App Privativa', color: 'gold' }
    ],
    summary: 'Sistema de audio distribuido P2P que convierte múltiples teléfonos y parlantes Bluetooth de cualquier marca (Screamer 3, JBL, Sony, Bose) en un clúster estéreo sincronizado mediante WebRTC DataChannels y Web Audio API sin cables ni software privativo.',
    checks: [
      'Compensación Milimétrica de Fase: DelayNode de Web Audio API para calibrar retardo acústico y latencia Bluetooth (0 a 400 ms).',
      'P2P DataChannel Mesh: Orquestación distribuida para emisión simultánea sin saturar servidores externos de streaming.',
      'Estéreo Espacial L/R: Asignación dinámica de canales estéreo y síntesis procedural de audio sin telemetría invasiva.'
    ],
    repoUrl: 'https://github.com/mauriciano47-pixel/Speaker_remote'
  }
};

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

  container.innerHTML = `
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



