//NavBar
function hideIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:none;");
  navigation.classList.remove("hide");
}

function showIconBar() {
  var iconBar = document.getElementById("iconBar");
  var navigation = document.getElementById("navigation");
  iconBar.setAttribute("style", "display:block;");
  navigation.classList.add("hide");
}

//COMENTARIOS
function showComment() {
  var commentArea = document.getElementById("comment-area");
  commentArea.classList.remove("hide");
}

//RESPONDER
function showReply() {
  var replyArea = document.getElementById("reply-area");
  replyArea.classList.remove("hide");
}


let topics = [];

// Funcionalidade ao botão "Novo Tópico"
document.getElementById("new-topic-btn").addEventListener("click", function () {
  var question = prompt("Digite sua pergunta:");
  if (question) {
    let tabelaDeTopicos = document.getElementById("tabela-postagem")

    let divTableRow = document.createElement("div")
    let divStatus = document.createElement("div")
    let divSubjects = document.createElement("div")
    let divReplies = document.createElement("div")
    let divLastReply = document.createElement("div")

    divStatus.innerHTML = `<i class="fa fa-fire"></i>`
    divStatus.classList.add("status")


    divSubjects.innerHTML = `<a href="">${question}</a><br><span>Iniciado por<b><a href="">Usuario</a></b> .</span>`
    divSubjects.classList.add("subjects")

    divReplies.innerHTML = `<button class="reply-button">Responder</button>`
    divReplies.classList.add("replies")

    divLastReply.innerHTML = `30 abril de 2024 <br>por <b><a href="">Usuario</a></b>`
    divLastReply.classList.add("last-reply")

    divTableRow.appendChild(divStatus)
    divTableRow.appendChild(divSubjects)
    divTableRow.appendChild(divReplies)
    divTableRow.appendChild(divLastReply)
    divTableRow.classList.add("table-row")
    tabelaDeTopicos.appendChild(divTableRow)

  
  }
});




