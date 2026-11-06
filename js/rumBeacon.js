/**
 * V-GUARD RUM Beacon (Real User Monitoring) v1.0.0
 * Telemetría Pasiva No Intrusiva y de Cero Coste Operacional ($0 OPEX)
 * Titularidad Exclusiva: Mauricio Uribe Maldonado
 */

(function initVGuardRUM() {
  if (typeof window === 'undefined') return;

  const STORAGE_KEY = 'vguard_rum_metrics';
  const MAX_EVENTS = 25;

  const rumState = {
    appName: document.title.split('—')[0].trim() || 'Vitrina & Launchpad',
    sessionId: `rum_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    timings: {},
    errors: [],
  };

  function sanitize(str) {
    if (!str || typeof str !== 'string') return '';
    return str
      .replace(/[\w.-]+@[\w.-]+\.\w+/g, '[EMAIL_REDACTED]')
      .replace(/(?:sk_live|ghp|AIza)[0-9a-zA-Z-_]+/g, '[TOKEN_REDACTED]')
      .replace(/\?.*$/, '');
  }

  function persist() {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      stored.unshift({
        timestamp: new Date().toISOString(),
        session: rumState.sessionId,
        app: rumState.appName,
        timings: rumState.timings,
        errors: rumState.errors.slice(-5)
      });
      while (stored.length > MAX_EVENTS) stored.pop();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // Ignorar errores de almacenamiento
    }
  }

  window.addEventListener('error', (event) => {
    const errorRecord = {
      type: 'uncaught_exception',
      message: sanitize(event.message || 'Error desconocido'),
      source: sanitize(event.filename || ''),
      lineno: event.lineno || 0,
      colno: event.colno || 0,
      time: Math.round(performance.now())
    };
    rumState.errors.push(errorRecord);
    persist();
  });

  window.addEventListener('unhandledrejection', (event) => {
    const reason = event.reason || {};
    const errorRecord = {
      type: 'unhandled_rejection',
      message: sanitize(reason.message || String(reason)),
      stack: sanitize((reason.stack || '').split('\n')[0]),
      time: Math.round(performance.now())
    };
    rumState.errors.push(errorRecord);
    persist();
  });

  window.addEventListener('load', () => {
    setTimeout(() => {
      try {
        const perfNav = performance.getEntriesByType('navigation')[0];
        if (perfNav) {
          rumState.timings = {
            dnsLookupMs: Math.round(perfNav.domainLookupEnd - perfNav.domainLookupStart),
            tcpHandshakeMs: Math.round(perfNav.connectEnd - perfNav.connectStart),
            ttfbMs: Math.round(perfNav.responseStart - perfNav.requestStart),
            domReadyMs: Math.round(perfNav.domContentLoadedEventEnd - perfNav.startTime),
            pageLoadMs: Math.round(perfNav.loadEventEnd - perfNav.startTime)
          };
        } else if (performance.timing) {
          const t = performance.timing;
          rumState.timings = {
            ttfbMs: t.responseStart - t.requestStart,
            domReadyMs: t.domContentLoadedEventEnd - t.navigationStart,
            pageLoadMs: t.loadEventEnd - t.navigationStart
          };
        }
        persist();
      } catch {
        // Fallback silencioso
      }
    }, 100);
  });

  window.__VGUARD_RUM__ = {
    getMetrics: () => {
      try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      } catch {
        return [];
      }
    },
    getCurrentSession: () => ({ ...rumState }),
    clear: () => {
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  };
})();
