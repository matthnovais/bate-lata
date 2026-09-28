const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const conteudo = document.getElementById("conteudo");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  const menuAberto = menu.classList.contains("ativo");

  menuToggle.setAttribute("aria-expanded", menuAberto);
  menuToggle.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação",
  );
});

function carregarPagina(pagina, moverFoco = false) {
  if (pagina === "inicio") {
    conteudo.innerHTML = templateInicio();
  }

  if (pagina === "projetos") {
    conteudo.innerHTML = templateProjetos();
    iniciarModal();
  }

  if (pagina === "cadastro") {
    conteudo.innerHTML = templateCadastro();
    iniciarFormulario();
  }

  if (moverFoco) {
    conteudo.focus();
  }
}

const paginaInicial = window.location.hash.replace("#", "") || "inicio";

carregarPagina(paginaInicial);

document.addEventListener("click", function (event) {
  const link = event.target.closest("[data-pagina]");

  if (!link) {
    return;
  }

  event.preventDefault();

  const pagina = link.dataset.pagina;

  carregarPagina(pagina, true);

  window.location.hash = pagina;

  if (menu.classList.contains("ativo")) {
    menu.classList.remove("ativo");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu de navegação");
  }
});