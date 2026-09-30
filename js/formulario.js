export function iniciarFormulario() {
  const formulario = document.getElementById("form-cadastro");

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const telefone = document.getElementById("telefone");
  const nascimento = document.getElementById("nascimento");
  const cpf = document.getElementById("cpf");
  const cep = document.getElementById("cep");
  const endereco = document.getElementById("endereco");
  const participacao = document.getElementById("participacao");
  const observacoes = document.getElementById("observacoes");

  const mensagem = document.getElementById("mensagem-formulario");

  if (!formulario) {
    return;
  }

  function mostrarErro(campo, texto) {
    removerErro(campo);

    campo.classList.add("campo-erro");
    campo.setAttribute("aria-invalid", "true");

    const erro = document.createElement("span");
    const idErro = `erro-${campo.id}`;

    erro.id = idErro;
    erro.classList.add("mensagem-erro");
    erro.textContent = texto;

    const descricaoExistente = campo.getAttribute("aria-describedby");

    campo.setAttribute(
      "aria-describedby",
      descricaoExistente ? `${descricaoExistente} ${idErro}` : idErro,
    );

    campo.insertAdjacentElement("afterend", erro);
  }

  function removerErro(campo) {
    campo.classList.remove("campo-erro");
    campo.removeAttribute("aria-invalid");

    const idErro = `erro-${campo.id}`;
    const erro = document.getElementById(idErro);

    if (erro) {
      erro.remove();
    }

    const descricoes = campo
      .getAttribute("aria-describedby")
      ?.split(" ")
      .filter(function (id) {
        return id !== idErro;
      });

    if (descricoes && descricoes.length > 0) {
      campo.setAttribute("aria-describedby", descricoes.join(" "));
    } else {
      campo.removeAttribute("aria-describedby");
    }
  }

  const dadosSalvos = localStorage.getItem("cadastroBateLata");

  if (dadosSalvos) {
    const dados = JSON.parse(dadosSalvos);

    nome.value = dados.nome || "";
    email.value = dados.email || "";
    telefone.value = dados.telefone || "";
    nascimento.value = dados.nascimento || "";
    cpf.value = dados.cpf || "";
    cep.value = dados.cep || "";
    endereco.value = dados.endereco || "";
    participacao.value = dados.participacao || "";
    observacoes.value = dados.observacoes || "";
  }

  cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "").slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;

    removerErro(cpf);
  });

  telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, "").slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");

    telefone.value = valor;

    removerErro(telefone);
  });

  cep.addEventListener("input", function () {
    let valor = cep.value.replace(/\D/g, "").slice(0, 8);

    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

    cep.value = valor;

    removerErro(cep);
  });

  const campos = [nome, email, nascimento, endereco, participacao];

  campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
      removerErro(campo);
    });
  });

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let formularioValido = true;

    mensagem.textContent = "";
    mensagem.classList.remove("mensagem-sucesso");

    if (nome.value.trim() === "") {
      mostrarErro(nome, "Informe o seu nome.");
      formularioValido = false;
    } else {
      removerErro(nome);
    }

    if (email.value.trim() === "") {
      mostrarErro(email, "Informe o seu e-mail.");
      formularioValido = false;
    } else if (!email.validity.valid) {
      mostrarErro(email, "Informe um e-mail válido.");
      formularioValido = false;
    } else {
      removerErro(email);
    }

    if (!telefone.validity.valid) {
      mostrarErro(
        telefone,
        "Informe um telefone válido. Exemplo: (11) 99999-9999.",
      );
      formularioValido = false;
    } else {
      removerErro(telefone);
    }

    if (nascimento.value === "") {
      mostrarErro(nascimento, "Informe a sua data de nascimento.");
      formularioValido = false;
    } else {
      removerErro(nascimento);
    }

    if (!cpf.validity.valid) {
      mostrarErro(cpf, "Informe o CPF no formato 000.000.000-00.");
      formularioValido = false;
    } else {
      removerErro(cpf);
    }

    if (!cep.validity.valid) {
      mostrarErro(cep, "Informe o CEP no formato 00000-000.");
      formularioValido = false;
    } else {
      removerErro(cep);
    }

    if (endereco.value.trim() === "") {
      mostrarErro(endereco, "Informe o seu endereço.");
      formularioValido = false;
    } else {
      removerErro(endereco);
    }

    if (participacao.value === "") {
      mostrarErro(participacao, "Selecione um tipo de participação.");
      formularioValido = false;
    } else {
      removerErro(participacao);
    }

    if (!formularioValido) {
      const primeiroCampoComErro = formulario.querySelector(".campo-erro");

      if (primeiroCampoComErro) {
        primeiroCampoComErro.focus();
      }

      return;
    }

    const dadosCadastro = {
      nome: nome.value.trim(),
      email: email.value.trim(),
      telefone: telefone.value,
      nascimento: nascimento.value,
      cpf: cpf.value,
      cep: cep.value,
      endereco: endereco.value.trim(),
      participacao: participacao.value,
      observacoes: observacoes.value.trim(),
    };

    localStorage.setItem("cadastroBateLata", JSON.stringify(dadosCadastro));

    mensagem.textContent = "Cadastro realizado com sucesso.";
    mensagem.classList.add("mensagem-sucesso");
  });
}