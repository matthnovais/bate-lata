function iniciarFormulario() {
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

  // Exibe uma mensagem de erro abaixo do campo
  function mostrarErro(campo, texto) {
    removerErro(campo);

    campo.classList.add("campo-erro");

    const erro = document.createElement("span");
    erro.classList.add("mensagem-erro");
    erro.textContent = texto;

    campo.insertAdjacentElement("afterend", erro);
  }

  // Remove a mensagem e o estilo de erro
  function removerErro(campo) {
    campo.classList.remove("campo-erro");

    const proximoElemento = campo.nextElementSibling;

    if (
      proximoElemento &&
      proximoElemento.classList.contains("mensagem-erro")
    ) {
      proximoElemento.remove();
    }
  }

  // Recupera dados salvos anteriormente
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

  // Máscara do CPF
  cpf.addEventListener("input", function () {
    let valor = cpf.value.replace(/\D/g, "").slice(0, 11);

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    cpf.value = valor;

    removerErro(cpf);
  });

  // Máscara do telefone
  telefone.addEventListener("input", function () {
    let valor = telefone.value.replace(/\D/g, "").slice(0, 11);

    valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
    valor = valor.replace(/(\d{4,5})(\d{4})$/, "$1-$2");

    telefone.value = valor;

    removerErro(telefone);
  });

  // Máscara do CEP
  cep.addEventListener("input", function () {
    let valor = cep.value.replace(/\D/g, "").slice(0, 8);

    valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");

    cep.value = valor;

    removerErro(cep);
  });

  // Remove o erro quando o usuário corrige os demais campos
  const campos = [
    nome,
    email,
    nascimento,
    endereco,
    participacao,
  ];

  campos.forEach(function (campo) {
    campo.addEventListener("input", function () {
      removerErro(campo);
    });
  });

  // Validação no envio do formulário
  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    let formularioValido = true;

    // Limpa mensagem anterior
    mensagem.textContent = "";
    mensagem.classList.remove("mensagem-sucesso");

    // Nome
    if (nome.value.trim() === "") {
      mostrarErro(nome, "Informe o seu nome.");
      formularioValido = false;
    } else {
      removerErro(nome);
    }

    // E-mail
    if (email.value.trim() === "") {
      mostrarErro(email, "Informe o seu e-mail.");
      formularioValido = false;
    } else if (!email.validity.valid) {
      mostrarErro(email, "Informe um e-mail válido.");
      formularioValido = false;
    } else {
      removerErro(email);
    }

    // Telefone
    if (!telefone.validity.valid) {
      mostrarErro(
        telefone,
        "Informe um telefone válido. Exemplo: (11) 99999-9999."
      );
      formularioValido = false;
    } else {
      removerErro(telefone);
    }

    // Data de nascimento
    if (nascimento.value === "") {
      mostrarErro(
        nascimento,
        "Informe a sua data de nascimento."
      );
      formularioValido = false;
    } else {
      removerErro(nascimento);
    }

    // CPF
    if (!cpf.validity.valid) {
      mostrarErro(
        cpf,
        "Informe o CPF no formato 000.000.000-00."
      );
      formularioValido = false;
    } else {
      removerErro(cpf);
    }

    // CEP
    if (!cep.validity.valid) {
      mostrarErro(
        cep,
        "Informe o CEP no formato 00000-000."
      );
      formularioValido = false;
    } else {
      removerErro(cep);
    }

    // Endereço
    if (endereco.value.trim() === "") {
      mostrarErro(endereco, "Informe o seu endereço.");
      formularioValido = false;
    } else {
      removerErro(endereco);
    }

    // Tipo de participação
    if (participacao.value === "") {
      mostrarErro(
        participacao,
        "Selecione um tipo de participação."
      );
      formularioValido = false;
    } else {
      removerErro(participacao);
    }

    // Interrompe o envio caso exista algum erro
    if (!formularioValido) {
      return;
    }

    // Cria o objeto com os dados válidos
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

   // Salva no localStorage
    localStorage.setItem(
      "cadastroBateLata",
      JSON.stringify(dadosCadastro)
    );
  });
}