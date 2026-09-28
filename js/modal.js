function iniciarModal() {
  const abrirModal = document.getElementById("abrir-modal");
  const fecharModal = document.getElementById("fechar-modal");
  const modalAjuda = document.getElementById("modal-ajuda");

  if (!abrirModal || !fecharModal || !modalAjuda) {
    return;
  }

  abrirModal.addEventListener("click", function () {
    modalAjuda.hidden = false;
    fecharModal.focus();
  });

  fecharModal.addEventListener("click", function () {
    modalAjuda.hidden = true;
    abrirModal.focus();
  });

  modalAjuda.addEventListener("click", function (event) {
    if (event.target === modalAjuda) {
      modalAjuda.hidden = true;
      abrirModal.focus();
    }
  });
}
