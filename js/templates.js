// Dados utilizados para gerar os cards dos projetos
const projetos = [
  {
    titulo: "Oficina Bate Lata",
    badge: "Projeto ativo",
    classeBadge: "badge-ativo",
    descricao:
      "Oficinas de percussão que utilizam instrumentos produzidos com latas de tinta reaproveitadas, proporcionando às crianças o contato com a música de forma criativa, acessível e sustentável.",
  },
  {
    titulo: "Música que Ensina",
    badge: "",
    classeBadge: "",
    descricao:
      "Projeto que utiliza a música como ferramenta de aprendizagem, trabalhando conceitos de matemática, ritmo, contagem e raciocínio de maneira prática e divertida.",
  },
  {
    titulo: "Lata que Transforma",
    badge: "",
    classeBadge: "",
    descricao:
      "Iniciativa voltada à coleta e ao reaproveitamento de latas de tinta, transformando materiais que seriam descartados em instrumentos musicais e promovendo a consciência ambiental.",
  },
  {
    titulo: "Voluntariado",
    badge: "Voluntariado",
    classeBadge: "badge-voluntariado",
    descricao:
      "Os voluntários da Bate Lata podem participar das oficinas de percussão, auxiliar na organização das atividades e colaborar com as ações educativas desenvolvidas pela ONG.",
    link: "#cadastro",
    textoLink: "Quero ser voluntário",
  },
  {
    titulo: "Doações",
    badge: "Doações",
    classeBadge: "badge-doacao",
    descricao:
      "As doações ajudam a Bate Lata a manter suas oficinas e projetos sociais, contribuindo para a aquisição de baquetas, materiais para adaptação dos instrumentos e outros recursos utilizados nas atividades com as crianças.",
    link: "#cadastro",
    textoLink: "Quero contribuir",
  },
];

// Template reutilizável para gerar cada card
function criarCardProjeto(projeto) {
  return `
    <article>
      <h3>${projeto.titulo}</h3>

      ${projeto.badge
      ? `<span class="badge ${projeto.classeBadge}">${projeto.badge}</span>`
      : ""
    }

      <p>${projeto.descricao}</p>

      ${projeto.link
      ? `<a href="${projeto.link}" data-pagina="cadastro">
              ${projeto.textoLink}
            </a>`
      : ""
    }
    </article>
  `;
}

export function templateInicio() {
  return `
    <section class="col-12">
      <h2>Quem somos</h2>

      <img
        src="imagens/batelata1.webp"
        alt="Crianças participando de uma oficina de percussão com instrumentos feitos de latas reaproveitadas"
      />

      <p>
        A Bate Lata é uma organização que acredita no poder da música como
        ferramenta de transformação social e educação. Reaproveitamos latas de
        tinta que seriam descartadas e as transformamos em instrumentos de
        percussão, proporcionando a crianças em situação de vulnerabilidade
        social a oportunidade de aprender e vivenciar a música. Além da
        educação musical, nossas atividades contribuem para o desenvolvimento
        de outros conhecimentos, como a matemática, explorada de forma prática
        por meio do ritmo e da contagem musical. Dessa forma, unimos educação,
        cultura, inclusão social e consciência ambiental, transformando
        materiais que seriam descartados em novas possibilidades para o futuro.
      </p>
    </section>

    <section class="col-12">
      <h2>Nossa missão</h2>

      <p>
        Nossa missão é promover inclusão social e desenvolvimento educacional
        por meio da música, unindo criatividade, sustentabilidade e
        aprendizado prático para transformar realidades.
      </p>
    </section>

    <section class="col-12">
      <h2>Contato</h2>

      <p>E-mail: contato@batelata.org.br</p>
      <p>Telefone: (11) 99999-9999</p>
    </section>
  `;
}

export function templateProjetos() {
  const cardsProjetos = projetos
    .map(function (projeto) {
      return criarCardProjeto(projeto);
    })
    .join("");

  return `
    <section class="col-12 projetos-grid">
      <h2>Projetos</h2>

      <div class="alerta alerta-info" role="alert">
        <strong>Novidade!</strong>
        As inscrições para participar das oficinas e ações voluntárias estão abertas.
      </div>

      <button
        type="button"
        class="abrir-modal"
        id="abrir-modal"
      >
        Como posso ajudar?
      </button>

      <div
        class="modal"
        id="modal-ajuda"
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-modal"
        hidden
      >
        <div class="modal-conteudo">
          <h3 id="titulo-modal">Como ajudar a Bate Lata</h3>

          <p>
            Você pode contribuir participando como voluntário, realizando doações
            ou apoiando as atividades e oficinas desenvolvidas pela ONG.
          </p>

          <button type="button" id="fechar-modal">
            Fechar
          </button>
        </div>
      </div>

      ${cardsProjetos}
    </section>
  `;
}

export function templateCadastro() {
  return `
    <h2 class="col-12">Cadastro de participação</h2>

    <form class="col-12" id="form-cadastro">
      <p id="campos-obrigatorios">
        Os campos marcados com * são obrigatórios.
      </p>

      <fieldset>
        <legend>Dados pessoais</legend>

        <label for="nome">Nome: *</label>
        <input
          type="text"
          id="nome"
          name="nome"
          autocomplete="name"
          required
        />

        <label for="email">E-mail: *</label>
        <input
          type="email"
          id="email"
          name="email"
          autocomplete="email"
          required
        />

        <label for="telefone">Telefone: *</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          autocomplete="tel"
          required
          maxlength="15"
          pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
          placeholder="(00) 00000-0000"
          aria-describedby="ajuda-telefone"
        />
        <small id="ajuda-telefone">Formato: (00) 00000-0000</small>

        <label for="nascimento">Data de nascimento: *</label>
        <input
          type="date"
          id="nascimento"
          name="nascimento"
          autocomplete="bday"
          required
        />

        <label for="cpf">CPF: *</label>
        <input
          type="text"
          id="cpf"
          name="cpf"
          required
          maxlength="14"
          pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
          placeholder="000.000.000-00"
          aria-describedby="ajuda-cpf"
        />
        <small id="ajuda-cpf">Formato: 000.000.000-00</small>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>

        <label for="cep">CEP: *</label>
        <input
          type="text"
          id="cep"
          name="cep"
          autocomplete="postal-code"
          required
          maxlength="9"
          pattern="[0-9]{5}-[0-9]{3}"
          placeholder="00000-000"
          aria-describedby="ajuda-cep"
        />
        <small id="ajuda-cep">Formato: 00000-000</small>

        <label for="endereco">Endereço: *</label>
        <input
          type="text"
          id="endereco"
          name="endereco"
          autocomplete="street-address"
          required
        />
      </fieldset>

      <fieldset>
        <legend>Participação</legend>

        <label for="participacao">Tipo de participação: *</label>
        <select name="participacao" id="participacao" required>
          <option value="">Selecione</option>
          <option value="doador">Doador</option>
          <option value="parceiro">Parceiro</option>
          <option value="voluntario">Voluntário</option>
        </select>

        <label for="observacoes">Observações:</label>

        <textarea
          name="observacoes"
          id="observacoes"
        ></textarea>

        <button type="submit">Enviar cadastro</button>

        <p id="mensagem-formulario" aria-live="polite"></p>
      </fieldset>
    </form>
  `;
}