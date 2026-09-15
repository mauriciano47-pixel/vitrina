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
 * Alternar pestañas de pago (Nacional vs Internacional)
 */
function cambiarTabPago(tipo) {
  const tabNacional = document.getElementById('tab-nacional');
  const tabInternacional = document.getElementById('tab-internacional');
  const botonesTabs = document.querySelectorAll('.modal-tabs .tab-btn');

  if (tipo === 'nacional') {
    tabNacional.style.display = 'block';
    tabInternacional.style.display = 'none';
    botonesTabs[0].classList.add('active');
    botonesTabs[1].classList.remove('active');
  } else {
    tabNacional.style.display = 'none';
    tabInternacional.style.display = 'block';
    botonesTabs[0].classList.remove('active');
    botonesTabs[1].classList.add('active');
  }
}

/**
 * Copiar texto al portapapeles con Toast de confirmación
 */
function copiarAlPortapapeles(texto, botonElemento) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(texto).then(() => {
      mostrarToast('¡Alias copiado al portapapeles! ✅');
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
    mostrarToast('¡Alias copiado con éxito! ✅');
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
