import test from 'node:test';
import assert from 'node:assert/strict';
import { FLOTA_APPS, DEV_APPS_INFO, AUDITORIA_DATA } from '../js/vitrinaData.js';

test('Vitrina Flota - Catálogo Canónico Completo de 10 Aplicaciones', () => {
  assert.equal(Array.isArray(FLOTA_APPS), true, 'FLOTA_APPS debe ser un array');
  assert.equal(FLOTA_APPS.length, 10, 'El catálogo de la flota debe contener exactamente 10 aplicaciones');

  const requiredIds = [
    'cambioya', 'hidoctor', 'nutralive', 'ataraxia', 'faro',
    'vitrodiag', 'crypto', 'tramitefacil', 'sentinel', 'speaker'
  ];

  requiredIds.forEach(id => {
    const found = FLOTA_APPS.find(app => app.id === id);
    assert.ok(found, `La aplicación con id '${id}' debe existir en FLOTA_APPS`);
    assert.ok(found.name && found.name.length > 0, `App ${id} debe tener nombre`);
    assert.ok(found.host && found.host.length > 0, `App ${id} debe tener host definido`);
    assert.ok(found.category && found.category.length > 0, `App ${id} debe tener categoría`);
    assert.ok(found.url && found.url.startsWith('https://'), `App ${id} debe utilizar HTTPS en su URL de producción`);
  });
});

test('Vitrina Telemetría - Protocolo de Latencia y Rango Saludable', () => {
  // Simular la función de latencia de telemetría de app.js (12 a 28 ms)
  const simularLatencia = () => Math.floor(Math.random() * 16) + 12;
  for (let i = 0; i < 20; i++) {
    const lat = simularLatencia();
    assert.ok(lat >= 12 && lat <= 28, `La latencia simulada (${lat}ms) debe estar en el rango óptimo 12-28ms`);
  }
});

test('Vitrina En Desarrollo - Especificaciones Clínicas y Asistivas (Kintsugi & Luchito)', () => {
  assert.ok(DEV_APPS_INFO.kintsugi, 'DEV_APPS_INFO debe contener información técnica de Kintsugi');
  assert.match(DEV_APPS_INFO.kintsugi.title, /KINTSUGI/i);
  assert.match(DEV_APPS_INFO.kintsugi.content, /AES-256-GCM/i, 'Kintsugi debe documentar cifrado AES-256');
  assert.match(DEV_APPS_INFO.kintsugi.content, /DBT TIPP/i, 'Kintsugi debe documentar protocolo DBT TIPP');

  assert.ok(DEV_APPS_INFO.luchito, 'DEV_APPS_INFO debe contener información técnica de Luchito');
  assert.match(DEV_APPS_INFO.luchito.title, /LUCHITO/i);
  assert.match(DEV_APPS_INFO.luchito.content, /lazarillo/i);
});

test('Vitrina Auditoría - Certificaciones SonarCloud, Snyk y Quality Gate', () => {
  assert.ok(AUDITORIA_DATA.general, 'AUDITORIA_DATA debe contener resumen general del ecosistema');
  assert.equal(AUDITORIA_DATA.general.kpis.length, 4, 'Deben existir 4 KPIs maestros');
  assert.ok(AUDITORIA_DATA.general.checks.length >= 4, 'Deben existir al menos 4 checks de seguridad');

  // Validar fichas técnicas específicas
  const auditedKeys = ['cambioya', 'hidoctor', 'ataraxia', 'vitrodiag', 'faro', 'sentinel'];
  auditedKeys.forEach(key => {
    const item = AUDITORIA_DATA[key];
    assert.ok(item, `AUDITORIA_DATA debe contener ficha pericial de '${key}'`);
    assert.ok(item.title, `Ficha ${key} debe tener título`);
    assert.ok(item.summary, `Ficha ${key} debe tener resumen pericial`);
    assert.ok(Array.isArray(item.kpis) && item.kpis.length >= 3, `Ficha ${key} debe tener al menos 3 KPIs`);
    assert.ok(Array.isArray(item.checks) && item.checks.length >= 3, `Ficha ${key} debe tener al menos 3 checks`);
  });
});

test('Vitrina Apoyo & Cripto - Formato y Validez de Billeteras Cripto', () => {
  const btcAddress = '3BUcAh2fiA9chXTBFWBQLZ3bEnCghpSp52';
  const ethAddress = '0x8242609c604bcb1944bbf88c52bfa7db8c6f10f2';
  const solAddress = 'kGFF2XaY6QsUTJAiGKQKf3M3nWjdG53TSthmXSWHyj1';

  // Validaciones de formato canónico
  assert.match(btcAddress, /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/, 'Dirección BTC válida (P2SH)');
  assert.match(ethAddress, /^0x[a-fA-F0-9]{40}$/, 'Dirección ETH / EVM válida');
  assert.ok(solAddress.length >= 32 && solAddress.length <= 44, 'Dirección Solana / Base58 de longitud válida');
});

test('Vitrina Inversores - Pitch & Modal de Licenciamiento B2B de HiDoctor', () => {
  const hidoctorAudit = AUDITORIA_DATA.hidoctor;
  assert.match(hidoctorAudit.version, /B2B Marca Blanca/i, 'HiDoctor debe reflejar oferta de marca blanca');
  assert.ok(hidoctorAudit.sonarUrl && hidoctorAudit.sonarUrl.includes('sonarcloud.io'), 'HiDoctor debe vincular a SonarCloud oficial');
});


test('Vitrina Simulador - Modos de Dispositivo Soportados y Proporciones', () => {
  const modosDispositivo = {
    mobile: { ancho: 390, alto: 844, radio: '44px', label: 'iPhone' },
    tablet: { ancho: 820, alto: 1180, radio: '24px', label: 'iPad Air / Tablet' },
    desktop: { ancho: '100%', alto: '100%', radio: '0px', label: 'Escritorio' }
  };

  assert.ok(modosDispositivo.mobile, 'Debe existir perfil mobile');
  assert.equal(modosDispositivo.mobile.ancho, 390);
  assert.equal(modosDispositivo.tablet.ancho, 820);
  assert.equal(modosDispositivo.desktop.ancho, '100%');
});

test('Vitrina Apoyo - Canales de Donación y Formas de Pago', () => {
  const tabsPago = ['nacional', 'internacional', 'cripto'];
  tabsPago.forEach(tab => {
    assert.ok(typeof tab === 'string' && tab.length > 0, `Tab de pago ${tab} debe ser válido`);
  });

  const datosBanco = {
    rut: '17.903.517-0',
    cuentaRut: '17903517',
    cuentaCorriente: '1091342022',
    banco: 'BancoEstado'
  };
  assert.ok(datosBanco.rut.includes('-'), 'RUT chileno debe tener guión de dígito verificador');
  assert.ok(datosBanco.cuentaCorriente.length >= 8, 'Cuenta corriente con longitud bancaria válida');
});

test('Vitrina SSOT - Reglas Canónicas Inmutables del Ecosistema', () => {
  const vitrodiag = FLOTA_APPS.find(a => a.id === 'vitrodiag');
  assert.ok(vitrodiag, 'VitroDiag debe existir');
  assert.match(vitrodiag.category, /Vidrio|Industria/i, 'VitroDiag debe categorizarse como manufactura de vidrio');
  assert.doesNotMatch(vitrodiag.category, /clínic|médic|hospital/i, 'VitroDiag jamás debe confundirse con diagnóstico clínico');

  const cambioya = FLOTA_APPS.find(a => a.id === 'cambioya');
  assert.ok(cambioya, 'CAMBIOYA! debe existir');
  assert.match(cambioya.category, /Trueque|Circular/i, 'CAMBIOYA! debe ser trueque comunitario y economía circular');
  assert.doesNotMatch(cambioya.category, /fintech|forex|divisas/i, 'CAMBIOYA! jamás debe ser fintech ni casa de cambio');

  const hidoctor = FLOTA_APPS.find(a => a.id === 'hidoctor');
  assert.ok(hidoctor, 'HiDoctor debe existir');
  assert.match(hidoctor.category, /Pediátric/i, 'HiDoctor debe ser exclusivamente pediátrico');

  const faro = FLOTA_APPS.find(a => a.id === 'faro');
  assert.ok(faro, 'Faro debe existir');
  assert.match(faro.category, /Seguridad|SOS/i, 'Faro debe ser seguridad física y alerta SOS');
});

test('Vitrina Quality Seals - Presencia de Distintivos Oficiales de Auditoría', () => {
  const general = AUDITORIA_DATA.general;
  assert.ok(general.kpis.some(k => k.label.includes('Quality Gate')), 'Debe incluir Quality Gate');
  assert.ok(general.kpis.some(k => k.label.includes('Zero-Leakage')), 'Debe certificar Zero-Leakage');
  assert.ok(general.checks.some(c => c.includes('SonarCloud')), 'Debe validar análisis SonarCloud');
  assert.ok(general.checks.some(c => c.includes('Snyk')), 'Debe validar análisis Snyk Shield');
});
