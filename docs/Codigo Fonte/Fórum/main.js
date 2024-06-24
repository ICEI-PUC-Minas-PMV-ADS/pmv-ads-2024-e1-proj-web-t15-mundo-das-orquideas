document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar postagens do Local Storage
    function loadPosts() {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.forEach(post => {
            addPostToTable(post.question, post.replies, post.date, post.user);
        });
    }

    // Função para salvar postagens no Local Storage
    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem("posts")) || [];
        posts.push(post);
        localStorage.setItem("posts", JSON.stringify(posts));
    }

    // Função para adicionar postagens na tabela
    function addPostToTable(question, replies, date, user) {
        let tabelaDeTopicos = document.getElementById("tabela-postagem");

        let divTableRow = document.createElement("div");
        let divStatus = document.createElement("div");
        let divSubjects = document.createElement("div");
        let divReplies = document.createElement("div");
        let divLastReply = document.createElement("div");

        divStatus.innerHTML = `<i class="fa fa-fire"></i>`;
        divStatus.classList.add("status");

        divSubjects.innerHTML = `
            <a href="">${question}</a>          
            <span>Iniciado por <b><a href="">${user}</a></b>.</span>`; // <=== ALTERADO PARA USAR nomeUser
        divSubjects.classList.add("subjects");

        let replyButton = document.createElement("button");
        replyButton.classList.add("reply-button");
        replyButton.textContent = "Responder";
        createReplyFunctionality(replyButton); // Adiciona funcionalidade de "Responder" para o novo tópico

        divReplies.appendChild(replyButton);
        divReplies.classList.add("replies");

        divLastReply.classList.add("last-reply");
        divLastReply.innerHTML = date || "-";
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

        replies.forEach(reply => addReplyToPost(divTableRow, reply.text, reply.date, reply.user));
    }

    // Função para adicionar respostas a um post
    function addReplyToPost(postRow, replyText, date, user) {
        var replyRow = document.createElement("div");
        replyRow.classList.add("table-row", "resposta");

        var emptyDiv = document.createElement("div");
        emptyDiv.classList.add("status", "coluna-resposta");

        var replySubject = document.createElement("div");
        replySubject.classList.add("subjects", "coluna-resposta");
        replySubject.innerHTML = `
            <a href="">${replyText}</a>
            <div class="reply-rating">
                <button class="rating-button" data-rating="bom">Bom</button>
                <button class="rating-button" data-rating="ruim">Ruim</button>
            </div>
            <span>Respondido por <b><a href="">${user}</a></b>.</span>`; // <=== ALTERADO PARA USAR nomeUser

        var lastReply = document.createElement("div");
        lastReply.classList.add("last-reply", "coluna-resposta");
        lastReply.innerHTML = `${date} <br>por <b><a href="">${user}</a></b>`; // <=== ALTERADO PARA USAR nomeUser

        var divLikes = document.createElement("div");
        divLikes.classList.add("div-like", "coluna-resposta");

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

        divLikes.appendChild(likeButton);
        divLikes.appendChild(likeCount);

        replyRow.appendChild(emptyDiv);
        replyRow.appendChild(replySubject);
        replyRow.appendChild(lastReply);
        replyRow.appendChild(divLikes);

        postRow.insertAdjacentElement('afterend', replyRow);
    }

    // Função para criar funcionalidade de "Responder"
    function createReplyFunctionality(replyButton) {
        replyButton.addEventListener("click", function () {
            if (!isUserLoggedIn()) {
                alertUserAndRedirect();
                return;
            }

            var replyText = prompt("Digite sua resposta:");
            if (replyText) {
                var currentUser = JSON.parse(localStorage.getItem("userLogado"));
                var reply = {
                    text: replyText,
                    date: new Date().toLocaleDateString("pt-BR"),
                    user: currentUser ? currentUser.nomeUser : "Usuario" // <=== ALTERADO PARA USAR nomeUser
                };
                addReplyToPost(replyButton.closest(".table-row"), reply.text, reply.date, reply.user);

                // Atualizar no Local Storage
                let posts = JSON.parse(localStorage.getItem("posts")) || [];
                let postIndex = Array.from(document.querySelectorAll('.table-row')).indexOf(replyButton.closest(".table-row"));
                posts[postIndex].replies.push(reply);
                localStorage.setItem("posts", JSON.stringify(posts));
            }
        });
    }

    // Verificar se o usuário está logado
    function isUserLoggedIn() {
        return localStorage.getItem("userLogado") !== null;
    }

    // Alertar o usuário e redirecionar para a página de login
    function alertUserAndRedirect() {
        if (confirm("Você não está logado. Deseja ser redirecionado para a página de login?")) {
            window.location.href = "../cadastro/login.html";
        }
    }

    // Funcionalidade ao botão "Responder" para as linhas existentes
    document.querySelectorAll(".reply-button").forEach(button => {
        createReplyFunctionality(button);
    });

    // Funcionalidade ao botão "Novo Tópico"
    document.getElementById("new-topic-btn").addEventListener("click", function () {
        if (!isUserLoggedIn()) {
            alertUserAndRedirect();
            return;
        }

        var question = prompt("Digite sua pergunta:");
        if (question) {
            var currentUser = JSON.parse(localStorage.getItem("userLogado"));
            var post = {
                question: question,
                replies: [],
                date: new Date().toLocaleDateString("pt-BR"),
                user: currentUser ? currentUser.nomeUser : "Usuario" // <=== ALTERADO PARA USAR nomeUser
            };
            savePost(post);
            addPostToTable(post.question, post.replies, post.date, post.user);
        }
    });

    // Event listener para classificação de resposta
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("rating-button")) {
            var rating = event.target.getAttribute("data-rating");
            var replyRow = event.target.closest(".table-row");
            var replyRating = replyRow.querySelector(".reply-rating");
            // Remove os botões de classificação após a seleção
            replyRating.innerHTML = `<p><b>Classificação:</b> ${rating}</p>`;
        }
    });

    // Carregar postagens ao inicializar
    loadPosts();
});
