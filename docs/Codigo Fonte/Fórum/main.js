//NavBar
function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}

//COMENTARIOS
function showComment(){
    var commentArea = document.getElementById("comment-area");
    commentArea.classList.remove("hide");
}

//RESPONDER
function showReply(){
    var replyArea = document.getElementById("reply-area");
    replyArea.classList.remove("hide");
}


let topics = [];

// Funcionalidade ao botão "Novo Tópico"
document.getElementById("new-topic-btn").addEventListener("click", function() {
    var question = prompt("Digite sua pergunta:");
    if (question) {
       
        alert("Sua pergunta foi postada!");
    }
});


function addQuestionToList(question) {
    // Crie um novo elemento de lista
    var listItem = document.createElement("li");
    // Defina o texto da pergunta como o conteúdo do elemento de lista
    listItem.textContent = question;
    // Adicione o elemento de lista à lista de perguntas
    document.getElementById("questions-list").appendChild(listItem);
}

document.getElementById("new-topic-btn").addEventListener("click", function() {
    var question = prompt("Digite sua pergunta:");
    if (question) {
        addQuestionToList(question);
        alert("Sua pergunta foi postada!");
    }
});
// botão de responder
document.querySelector('.reply-button').addEventListener('click', function() {
    alert('Botão Responder clicado!'); // Exemplo: exibir um alerta
   
});
