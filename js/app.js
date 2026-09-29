const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const conteudo = document.getElementById("conteudo");
const botaoTema = document.getElementById("alternar-tema");

/* =========================
   MENU MOBILE
========================= */

menuToggle.addEventListener("click", function () {
  menu.classList.toggle("ativo");

  const menuAberto = menu.classList.contains("ativo");

  menuToggle.setAttribute("aria-expanded", menuAberto);
  menuToggle.setAttribute(
    "aria-label",
    menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação",
  );
});

/* =========================
   MODO ESCURO
========================= */

function atualizarBotaoTema(modoEscuro) {
  if (modoEscuro) {
    botaoTema.textContent = "☀️";
    botaoTema.setAttribute("aria-label", "Ativar modo claro");
    botaoTema.setAttribute("title", "Ativar modo claro");
    botaoTema.setAttribute("aria-pressed", "true");
  } else {
    botaoTema.textContent = "🌙";
    botaoTema.setAttribute("aria-label", "Ativar modo escuro");
    botaoTema.setAttribute("title", "Ativar modo escuro");
    botaoTema.setAttribute("aria-pressed", "false");
  }
}

function aplicarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema");

  if (temaSalvo === "escuro") {
    document.body.classList.add("dark-mode");
    atualizarBotaoTema(true);
  } else {
    document.body.classList.remove("dark-mode");
    atualizarBotaoTema(false);
  }
}

botaoTema.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  const modoEscuro = document.body.classList.contains("dark-mode");

  if (modoEscuro) {
    localStorage.setItem("tema", "escuro");
  } else {
    localStorage.setItem("tema", "claro");
  }

  atualizarBotaoTema(modoEscuro);
});

aplicarTemaSalvo();

/* =========================
   SPA
========================= */

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

/* =========================
   NAVEGAÇÃO DA SPA
========================= */

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
    menuToggle.setAttribute(
      "aria-label",
      "Abrir menu de navegação",
    );
  }
});