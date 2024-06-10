// Funcionalidade ao botão "Responder" para as linhas existentes
document.querySelectorAll(".reply-button").forEach(button => {
  button.addEventListener("click", function () {
    toggleReplyArea(this);
  });
});

// Função para criar funcionalidade de "Responder" para novas linhas
function createReplyFunctionality(replyButton) {
  replyButton.addEventListener("click", function () {
    toggleReplyArea(this);
  });
}

// Função para alternar a área de resposta
function toggleReplyArea(button) {
  var replyArea = button.parentElement.nextElementSibling;
  replyArea.classList.toggle("hide");
  if (!replyArea.classList.contains("hide")) {
    var replyInput = document.createElement("input");
    replyInput.setAttribute("type", "text");
    replyInput.setAttribute("placeholder", "Digite sua resposta...");
    var replyButton = document.createElement("button");
    replyButton.textContent = "Enviar";
    replyButton.addEventListener("click", function () {
      var replyText = this.previousElementSibling.value;
      if (replyText) {
        var replyRow = document.createElement("div");
        replyRow.classList.add("table-row");
        var emptyDiv = document.createElement("div");
        emptyDiv.classList.add("status");
        var replySubject = document.createElement("div");
        replySubject.classList.add("subjects");
        replySubject.innerHTML = `<p>${replyText}</p><br><span>Respondido por <b><a href="">Usuario</a></b>.</span>`;
        var emptyReplies = document.createElement("div");
        emptyReplies.classList.add("replies");
        var lastReply = document.createElement("div");
        lastReply.classList.add("last-reply");
        var currentDate = new Date().toLocaleDateString("pt-BR");
        lastReply.innerHTML = `${currentDate} <br>por <b><a href="">Usuario</a></b>`;
        replyRow.appendChild(emptyDiv);
        replyRow.appendChild(replySubject);
        replyRow.appendChild(emptyReplies);
        replyRow.appendChild(lastReply);
        button.parentElement.parentElement.parentElement.insertBefore(replyRow, button.parentElement.parentElement.nextElementSibling);
        this.previousElementSibling.value = "";
        // Adiciona funcionalidade de "Responder" para a nova linha
        createReplyFunctionality(replyRow.querySelector(".reply-button"));
      }
    });
    replyArea.innerHTML = "";
    replyArea.appendChild(replyInput);
    replyArea.appendChild(replyButton);
  } else {
    replyArea.innerHTML = "";
  }
}

// Adiciona funcionalidade de "Responder" para as linhas existentes
document.querySelectorAll(".reply-button").forEach(button => {
  createReplyFunctionality(button);
});

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

    let replyButton = document.createElement("button");
    replyButton.classList.add("reply-button");
    replyButton.textContent = "Responder";
    // Adiciona funcionalidade de "Responder" para a nova linha
    createReplyFunctionality(replyButton);

    divReplies.appendChild(replyButton);
    divReplies.classList.add("replies")

    

    divTableRow.appendChild(divStatus)
    divTableRow.appendChild(divSubjects)
    divTableRow.appendChild(divReplies)
    divTableRow.appendChild(divLastReply)
    divTableRow.classList.add("table-row")
    tabelaDeTopicos.appendChild(divTableRow)

  }
})



replyArea.classList.add("hide");

// Funcionalidade ao botão "Responder" para as linhas existentes
document.querySelectorAll(".reply-button").forEach(button => {
  button.addEventListener("click", function () {
      toggleReplyArea(this);
  });
});

// Função para criar funcionalidade de "Responder" para novas linhas
function createReplyFunctionality(replyButton) {
  replyButton.addEventListener("click", function () {
      toggleReplyArea(this);
  });
}

// Função para alternar a área de resposta
function toggleReplyArea(button) {
  var replyArea = button.parentElement.nextElementSibling;
  replyArea.classList.toggle("hide");
  if (!replyArea.classList.contains("hide")) {
      var replyInput = document.createElement("input");
      replyInput.setAttribute("type", "text");
      replyInput.setAttribute("placeholder", "Digite sua resposta...");
      var replyButton = document.createElement("button");
      replyButton.textContent = "Enviar";
      replyButton.addEventListener("click", function () {
          var replyText = this.previousElementSibling.value;
          if (replyText) {
              var replyRow = document.createElement("div");
              replyRow.classList.add("table-row");
              var emptyDiv = document.createElement("div");
              emptyDiv.classList.add("status");
              var replySubject = document.createElement("div");
              replySubject.classList.add("subjects");
              replySubject.innerHTML = `<p>${replyText}</p><br><span>Respondido por <b><a href="">Usuario</a></b>.</span>`;
              var emptyReplies = document.createElement("div");
              emptyReplies.classList.add("replies");
              var lastReply = document.createElement("div");
              lastReply.classList.add("last-reply");
              var currentDate = new Date().toLocaleDateString("pt-BR");
              lastReply.innerHTML = `${currentDate} <br>por <b><a href="">Usuario</a></b>`;
              var likeButton = document.createElement("button");
              likeButton.textContent = "Like";
              likeButton.classList.add("like-button");
              var likeCount = document.createElement("span");
              likeCount.textContent = "0";
              likeCount.classList.add("like-count");
              likeButton.addEventListener("click", function () {
                  var currentCount = parseInt(likeCount.textContent);
                  likeCount.textContent = currentCount + 1;
              });
              replyRow.appendChild(emptyDiv);
              replyRow.appendChild(replySubject);
              replyRow.appendChild(emptyReplies);
              replyRow.appendChild(lastReply);
              replyRow.appendChild(likeButton);
              replyRow.appendChild(likeCount);
              button.parentElement.parentElement.parentElement.insertBefore(replyRow, button.parentElement.parentElement.nextElementSibling);
              this.previousElementSibling.value = "";
              // Adiciona funcionalidade de "Responder" para a nova linha
              createReplyFunctionality(replyRow.querySelector(".reply-button"));
          }
      });
      replyArea.innerHTML = "";
      replyArea.appendChild(replyInput);
      replyArea.appendChild(replyButton);
  } else {
      replyArea.innerHTML = "";
  }
}

// Adiciona funcionalidade de "Responder" para as linhas existentes
document.querySelectorAll(".reply-button").forEach(button => {
  createReplyFunctionality(button);
});

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

      let replyButton = document.createElement("button");
      replyButton.classList.add("reply-button");
      replyButton.textContent = "Responder";
      // Adiciona funcionalidade de "Responder" para a nova linha
      createReplyFunctionality(replyButton);

      divReplies.appendChild(replyButton);
      divReplies.classList.add("replies")



      divTableRow.appendChild(divStatus)
      divTableRow.appendChild(divSubjects)
      divTableRow.appendChild(divReplies)
      divTableRow.appendChild(divLastReply)
      divTableRow.classList.add("table-row")
      tabelaDeTopicos.appendChild(divTableRow)

  }
});
