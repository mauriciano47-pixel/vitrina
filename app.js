/* ===================================================================
   VITRINA & INVESTOR HUB — Lógica Interactiva (app.js)
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  inicializarFiltros();
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

// Cerrar al hacer clic en el fondo oscuro
window.addEventListener('click', (e) => {
  const modal = document.getElementById('modal-donacion');
  if (e.target === modal) {
    cerrarModalDonacion();
  }
});

// Cerrar con Escape
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    cerrarModalDonacion();
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
 * Alternar sub-moneda Cripto (BTC vs ETH)
 */
function cambiarSubCripto(sub) {
  const boxBtc = document.getElementById('sub-box-btc');
  const boxEth = document.getElementById('sub-box-eth');
  const btnBtc = document.getElementById('btn-sub-btc');
  const btnEth = document.getElementById('btn-sub-eth');

  if (sub === 'btc') {
    if (boxBtc) boxBtc.style.display = 'block';
    if (boxEth) boxEth.style.display = 'none';
    if (btnBtc) {
      btnBtc.style.background = 'rgba(245, 158, 11, 0.2)';
      btnBtc.style.color = '#f59e0b';
      btnBtc.style.borderColor = 'rgba(245, 158, 11, 0.4)';
    }
    if (btnEth) {
      btnEth.style.background = 'transparent';
      btnEth.style.color = 'var(--text-secondary)';
      btnEth.style.borderColor = 'var(--border-subtle)';
    }
  } else {
    if (boxBtc) boxBtc.style.display = 'none';
    if (boxEth) boxEth.style.display = 'block';
    if (btnBtc) {
      btnBtc.style.background = 'transparent';
      btnBtc.style.color = 'var(--text-secondary)';
      btnBtc.style.borderColor = 'var(--border-subtle)';
    }
    if (btnEth) {
      btnEth.style.background = 'rgba(99, 102, 241, 0.2)';
      btnEth.style.color = '#818cf8';
      btnEth.style.borderColor = 'rgba(99, 102, 241, 0.4)';
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
