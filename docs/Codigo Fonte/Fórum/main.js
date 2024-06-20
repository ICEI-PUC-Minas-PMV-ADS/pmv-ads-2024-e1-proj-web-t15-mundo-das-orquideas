document.addEventListener("DOMContentLoaded", function () {
    // Função para criar funcionalidade de "Responder"
    function createReplyFunctionality(replyButton) {
        replyButton.addEventListener("click", function () {
            var replyText = prompt("Digite sua resposta:");
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
                // Adiciona a nova resposta logo após o botão clicado
                replyButton.parentElement.parentElement.parentElement.insertBefore(replyRow, replyButton.parentElement.parentElement.nextElementSibling);
            }
        });
    }

    // Funcionalidade ao botão "Responder" para as linhas existentes
    document.querySelectorAll(".reply-button").forEach(button => {
        createReplyFunctionality(button);
    });

    // Funcionalidade ao botão "Novo Tópico"
    document.getElementById("new-topic-btn").addEventListener("click", function () {
        var question = prompt("Digite sua pergunta:");
        if (question) {
            let tabelaDeTopicos = document.getElementById("tabela-postagem");

            let divTableRow = document.createElement("div");
            let divStatus = document.createElement("div");
            let divSubjects = document.createElement("div");
            let divReplies = document.createElement("div");
            let divLastReply = document.createElement("div");

            divStatus.innerHTML = `<i class="fa fa-fire"></i>`;
            divStatus.classList.add("status");

            divSubjects.innerHTML = `<a href="">${question}</a><br><span>Iniciado por<b><a href="">Usuario</a></b>.</span>`;
            divSubjects.classList.add("subjects");

            let replyButton = document.createElement("button");
            replyButton.classList.add("reply-button");
            replyButton.textContent = "Responder";
            createReplyFunctionality(replyButton); // Adiciona funcionalidade de "Responder" para o novo tópico

            divReplies.appendChild(replyButton);
            divReplies.classList.add("replies");

            divTableRow.appendChild(divStatus);
            divTableRow.appendChild(divSubjects);
            divTableRow.appendChild(divReplies);
            divTableRow.appendChild(divLastReply);
            divTableRow.classList.add("table-row");

            // Encontrar a div "sobre" e o footer
            let sobreDiv = document.querySelector(".sobre");
            let footer = document.querySelector("footer");
            // Inserir antes da div "sobre"
            tabelaDeTopicos.insertBefore(divTableRow, sobreDiv);
        }
    });

});
