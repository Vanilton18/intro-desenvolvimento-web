let lista = ["Lavar Louça", 
    "Limpar a Casa", 
    "Estudar JavaScript", 
    "Fazer Exercícios", 
    "Ler um Livro"];

// 1. Localizar o elemento pai da lista
const tarefas = document.getElementById("lista-tarefas")

function criarItemNaLista(item){
    const li = document.createElement("li");
    li.textContent = item;
    // Adicionar o elemento li como filho do elemento pai (ul)
    tarefas.appendChild(li);
}

// Percorrer o array e criar cada elemento dinamicamente
lista.forEach(item =>{
    criarItemNaLista(item);
})

// Exercício para adicionar novas tarefas à lista
function adicionarTarefa() {
    const campoTarefa = document.getElementById("campo-tarefa");
    const novaTarefa = campoTarefa.value.trim();

    if (novaTarefa !== "") {
        criarItemNaLista(novaTarefa);
        campoTarefa.value = ""; // Limpar o campo de entrada
    } else {
        alert("Por favor, digite uma tarefa válida.");
    }
}

// Adicionar evento de clique ao botão
const botaoAdicionar = document.getElementById("botao-adicionar");
botaoAdicionar.addEventListener("click", adicionarTarefa);

// Adicionar evento de tecla "Enter" no campo de entrada
const campoTarefa = document.getElementById("campo-tarefa");
campoTarefa.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});

//Exercício para limpar a lista de tarefas
function limparLista() {
    tarefas.innerHTML = ""; // Limpar o conteúdo da lista
}

// Adicionar evento de clique ao botão de limpar
const botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click", limparLista);

//Exercício para editar tarefas da lista
function editarTarefa(event) {
    const li = event.target;
    const novaTarefa = prompt("Edite a tarefa:", li.textContent);
    
    if (novaTarefa !== null && novaTarefa.trim() !== "") {
        li.textContent = novaTarefa.trim();
    }
}

// Adicionar evento de clique duplo para editar tarefas
tarefas.addEventListener("dblclick", function(event) {
    if (event.target.tagName === "LI") {
        editarTarefa(event);
    }
}); 