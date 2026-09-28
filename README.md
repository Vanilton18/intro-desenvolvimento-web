# Introdução ao Desenvolvimento Web — Exercícios & Projetos

Repositório dedicado ao armazenamento, documentação e versionamento das práticas e avaliações desenvolvidas no componente curricular **Introdução ao Desenvolvimento Web** (Turma IEM01 — Ensino Médio Técnico).

---

## 👨‍💻 Identificação do Estudante

* **Turma:** IEM01
* **Docente:** Prof. Vanilton Pinheiro
* **Ano Letivo:** 2026



---

## 🗂️ Estrutura de Diretórios do Repositório

O projeto segue a padronização de arquivos locais recomendada pela disciplina (HTML na raiz de cada módulo, com subpastas exclusivas para `css/`, `js/` e `imagens/`):

```text
meu-portfolio-web/
│
├── README.md                           # Documentação central do repositório
│
├── 01-fundamentos-html5/               # Aulas 1 a 5: Marcação, Acessibilidade e Semântica
│   ├── av1-historia-familia/           # Avaliação Prática Individual (AV1)
│   │   ├── index.html
│   │   └── imagens/
│   │       ├── pais-namoro.jpg
│   │       ├── casamento.jpg
│   │       └── nascimento.jpg
│   └── exercicios-iniciais/
│       └── index.html
│
├── 02-estilizacao-css3/                # Aulas 6 a 11: Estilização, Box Model e Layout
│   ├── desafio-esqueleto-identidade/   # Desafio prático autônomo (Aula 6)
│   │   ├── index.html
│   │   ├── respostas.txt
│   │   ├── desfio.txt
│   │   └── css/
│   │       └── style.css
│   ├── exercicio-iniciais/       # Estudo de px, %, em, rem, vh e cores (hex, rgb, hsl)
│   │   ├── index.html
│   │   └── css/
│   │       └── estilo.css
│   └── av2-landing-page/               # Mini-projeto de Landing Page responsiva
│       ├── index.html
│       ├── css/
│       │   └── estilo.css
│       └── imagens/
│
├── 03-formularios-e-interatividade/    # Aulas 12 a 16: Interatividade e DOM
│   ├── tela-login/                     # Interface de Login com validação e Glassmorphism
│   │   ├── index.html
│   │   ├── css/
│   │   │   └── estilo.css
│   │   ├── js/
│   │   │   └── login.js
│   │   └── img/
│   │       └── logo-fpf-educacional.png
│   └── av1-4bim-interface/             # Interface responsiva com formulários
│       ├── index.html
│       ├── css/
│       │   └── estilo.css
│       └── js/
│           └── script.js
│
└── 04-projeto-integrador/              # Aulas 17 a 20: JavaScript, jQuery e Projeto Final
    └── av2-projeto-web/
        ├── index.html
        ├── css/
        │   └── estilo.css
        ├── js/
        │   └── app.js
        └── imagens/

```

---

## 📌 Relação de Módulos e Atividades

### 1. Fundamentos da Web & HTML5 Semântico (3º Bimestre)

* **Conteúdos:** Arquitetura cliente-servidor, HTTP, DevTools, doctype, tags semânticas estruturais (`header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, `footer`), hierarquia de títulos, listas, tabelas e acessibilidade básica (`alt` descritivo).


* **Principais Entregas:**
* **AV1 — Página Biográfica ("A História dos Meus Pais"):** Construção de página memorial sem o uso de CSS externo ou contêineres genéricos (`<div>`), focando unicamente na semântica padrão do navegador e links âncora funcionais (`href="#id"`).





### 2. Estilização Visual com CSS3 & Layout (3º / 4º Bimestre)

* **Conteúdos:** Folhas de estilo externas (`<link rel="stylesheet">`), cascata, herança, cálculo de especificidade (tag vs. classe vs. ID vs. perigos do `!important`), modelos de cores (`HEX`, `RGB`, `HSL`), unidades de medida (`px`, `%`, `em`, `rem`, `vw`/`vh`), modelo de caixas (*Box Model*), Flexbox, CSS Grid e *Media Queries* (*Mobile-First*).


* **Principais Entregas:**
* **Desafio Autônomo (Aula 6):** Pesquisa investigativa da documentação (MDN/W3Schools) e estilização da estrutura semântica sem tags `<div>`.


* **Laboratório de Cores e Unidades:** Implementação prática das diferenças de escala entre unidades relativas (`rem`, `em`, `vh`) e absolutas (`px`).


* **AV2 — Landing Page:** Mini-projeto de página de apresentação responsiva com tipografia e diagramação em caixas.





### 3. Formulários, JavaScript & Manipulação do DOM (4º Bimestre)

* **Conteúdos:** Formulários acessíveis (`form`, `label`, `input`, `button`), inclusão de scripts (`login.js`), seleção de elementos do DOM por ID (`document.getElementById`), escuta de eventos (`submit`), interceptação de recarregamento (`event.preventDefault`) e validação dinâmica sem estilos inline.


* **Principais Entregas:**
* **Tela de Login com Glassmorphism:** Formulário com validação de campos vazios e senha mínima em JavaScript, estilizado com gradiente moderno e feedback visual dinâmico via classes (`.erro` e `.sucesso`).



### 4. Integração & Projeto Final (4º Bimestre)

* **Conteúdos:** Validação avançada, introdução e comparação com jQuery, manipulação dinâmica do DOM, usabilidade e testes funcionais.


* **Principais Entregas:**
* **AV2 — Projeto Web Interativo:** Aplicação integrando HTML semântico, CSS estruturado e regras dinâmicas de front-end.





---

## 🛠️ Tecnologias e Ferramentas Utilizadas

* **HTML5:** Marcação estrutural e semântica nativa.


* **CSS3:** Estilização modular, especificidade controlada e responsividade.


* **JavaScript:** Lógica de controle, validação de formulários e manipulação do DOM.


* **Visual Studio Code:** Editor de código-fonte utilizado nas práticas de laboratório.


* **Navegadores & DevTools:** Inspeção do modelo de caixas, regras de cascata/especificidade e depuração de rede/erros de console.



---

## 📜 Princípios de Código e Boas Práticas

1. **Semântica Estrita:** Priorização de elementos com significado estrutural em vez do uso indiscriminado de divisões genéricas.


2. **Acessibilidade Web:** Inclusão sistemática de texto alternativo (`alt`) em imagens informativas, associação de rótulos (`label for`) em formulários e garantia de contraste entre texto e fundo.


3. **Cascata e Especificidade Limpa:** Organização de estilos baseada prioritariamente em classes reutilizáveis (`0-1-0`), evitando acoplamento excessivo e a diretiva `!important`.


4. **Separação de Camidas (Tríade da Web):** HTML reservado à estrutura/conteúdo, CSS responsável pela apresentação visual e JavaScript encarregado do comportamento e regras de interação.