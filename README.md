# Bate Lata 🥁

Aplicação web desenvolvida como projeto acadêmico para apresentar a ONG fictícia Bate Lata, iniciativa voltada à inclusão social de crianças por meio da música, da percussão e do reaproveitamento de materiais.

A proposta consiste em transformar latas de tinta descartadas em instrumentos musicais, promovendo educação, sustentabilidade e desenvolvimento social.

## Tecnologias utilizadas

- HTML5: estrutura semântica e acessível.
- CSS3: estilização, responsividade e modo escuro.
- JavaScript: interatividade e manipulação dinâmica do DOM.
- ES6 Modules: modularização do código com `import` e `export`.
- LocalStorage: persistência de dados e preferências.
- Vite: servidor de desenvolvimento e automatização do build.
- Git e GitHub: versionamento e organização do desenvolvimento.
- GitHub Actions: integração e publicação automatizada.
- GitHub Pages: hospedagem da aplicação.

## Funcionalidades

- Navegação SPA utilizando rotas baseadas em hash.
- Menu responsivo.
- Apresentação da ONG e dos projetos sociais.
- Modal com informações sobre participação.
- Formulário de cadastro com validações.
- Máscaras para CPF, telefone e CEP.
- Persistência de dados utilizando LocalStorage.
- Modo escuro com armazenamento da preferência do usuário.
- Melhorias de acessibilidade baseadas nas diretrizes WCAG 2.1.

## Estrutura do projeto

O projeto utiliza separação de responsabilidades entre HTML, CSS, JavaScript e recursos estáticos.

```text
bate-lata/
├── .github/workflows/    # Automação do deploy
├── css/                  # Estilos da aplicação
├── imagens/              # Recursos originais
├── js/                   # Módulos JavaScript
├── public/imagens/       # Imagens copiadas para o build
├── index.html            # Entrada principal da SPA
├── package.json          # Dependências e scripts
├── package-lock.json     # Registro das dependências
├── vite.config.js        # Configuração do Vite
└── README.md             # Documentação
```

A pasta `dist/` é gerada automaticamente pelo Vite e não deve ser versionada.

## Versionamento

O projeto utiliza Git com fluxo baseado no GitFlow:

- `main`: versões estáveis destinadas à publicação.
- `develop`: integração das funcionalidades em desenvolvimento.
- `feature/`: implementação isolada de novas funcionalidades.

As alterações são integradas por meio de Pull Requests.

O histórico utiliza mensagens baseadas em Conventional Commits, incluindo os prefixos `feat`, `refactor`, `perf`, `docs` e `chore`.

O repositório possui a tag `v1.0.0`, seguindo o modelo de versionamento semântico MAJOR.MINOR.PATCH.

## Pré-requisitos

Para executar e desenvolver o projeto, são necessários:

- Node.js e npm compatíveis com a versão do Vite instalada.
- Git.
- Navegador moderno.
- Visual Studio Code ou outro editor de código (recomendado).

## Instalação e execução

Clone o repositório:

```bash
git clone https://github.com/matthnovais/bate-lata.git
```

Entre na pasta:

```bash
cd bate-lata
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço informado pelo terminal.

## Build de produção

Para gerar a versão otimizada da aplicação:

```bash
npm run build
```

O Vite processa os módulos JavaScript, otimiza os recursos e gera os arquivos de produção na pasta `dist/`.

Para visualizar localmente o resultado do build:

```bash
npm run preview
```

## Testes

O projeto ainda não possui uma suíte de testes automatizados.

A validação funcional é realizada manualmente no navegador, verificando:

- Navegação entre as seções da SPA.
- Carregamento das imagens.
- Responsividade e funcionamento do menu.
- Abertura e fechamento do modal.
- Validação e máscaras do formulário.
- Persistência de dados com LocalStorage.
- Alternância entre os modos claro e escuro.
- Recursos de acessibilidade.

O comando `npm run preview` permite verificar localmente a versão gerada para produção.

## Deploy automatizado

A publicação é realizada por meio do GitHub Actions, utilizando o workflow `.github/workflows/deploy.yml`.

Após a integração de alterações à branch `main`, o workflow executa automaticamente as seguintes etapas:

1. Obtém o código do repositório.
2. Configura o ambiente Node.js.
3. Instala as dependências com `npm ci`.
4. Executa `npm run build`.
5. Publica o conteúdo da pasta `dist/` no GitHub Pages.

A aplicação utiliza a configuração `base: "/bate-lata/"` no Vite para garantir o funcionamento dos caminhos na hospedagem.

**Site publicado:** https://matthnovais.github.io/bate-lata/

**Repositório:** https://github.com/matthnovais/bate-lata
