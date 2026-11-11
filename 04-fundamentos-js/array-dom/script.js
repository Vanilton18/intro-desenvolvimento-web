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