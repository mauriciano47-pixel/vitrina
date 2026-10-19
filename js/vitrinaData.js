/* ===================================================================
   VITRINA & INVESTOR HUB — Catálogo de Datos y Telemetría (vitrinaData.js)
   Versión: 1.9.9 (Grado Institucional AAA M&A)
   =================================================================== */

export const FLOTA_APPS = [
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

export const DEV_APPS_INFO = {
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

export const AUDITORIA_DATA = {
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

// Exposición en ámbito global para navegador
if (typeof window !== 'undefined') {
  window.FLOTA_APPS = FLOTA_APPS;
  window.DEV_APPS_INFO = DEV_APPS_INFO;
  window.AUDITORIA_DATA = AUDITORIA_DATA;
}
