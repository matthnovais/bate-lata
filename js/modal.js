export function iniciarModal() {
  const abrirModal = document.getElementById("abrir-modal");
  const fecharModal = document.getElementById("fechar-modal");
  const modalAjuda = document.getElementById("modal-ajuda");

  if (!abrirModal || !fecharModal || !modalAjuda) {
    return;
  }

  function abrir() {
    modalAjuda.hidden = false;
    fecharModal.focus();
  }

  function fechar() {
    modalAjuda.hidden = true;
    abrirModal.focus();
  }

  abrirModal.addEventListener("click", abrir);

  fecharModal.addEventListener("click", fechar);

  modalAjuda.addEventListener("click", function (event) {
    if (event.target === modalAjuda) {
      fechar();
    }
  });

  modalAjuda.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      fechar();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const elementosFocaveis = modalAjuda.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );

    if (elementosFocaveis.length === 0) {
      event.preventDefault();
      return;
    }

    const primeiroElemento = elementosFocaveis[0];
    const ultimoElemento = elementosFocaveis[elementosFocaveis.length - 1];

    if (event.shiftKey && document.activeElement === primeiroElemento) {
      event.preventDefault();
      ultimoElemento.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === ultimoElemento
    ) {
      event.preventDefault();
      primeiroElemento.focus();
    }
  });
}