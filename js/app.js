const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  const menuAberto = menu.classList.contains("ativo");
  menuToggle.setAttribute("aria-expanded", menuAberto);
});

const conteudo = document.getElementById("conteudo");

function carregarPagina(pagina) {
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

  carregarPagina(pagina);

  window.location.hash = pagina;
});
