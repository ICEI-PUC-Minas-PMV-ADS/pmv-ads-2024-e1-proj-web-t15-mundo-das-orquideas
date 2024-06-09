let userLogado = JSON.parse(localStorage.getItem("userLogado"));
let evaluationForm = JSON.parse(localStorage.getItem("evaluationForm"));

if (userLogado) {
    document.getElementById("nome").innerHTML = userLogado.nome;
    document.getElementById("email").innerHTML = userLogado.email;
    document.getElementById("telefone").innerHTML = userLogado.telefone;
    if (evaluationForm && evaluationForm.level) {
        document.getElementById("level").innerHTML = evaluationForm.level;
    } else {
        console.error("Nível não encontrado no evaluationForm");
    }
} else {
    console.error("Usuário não encontrado no localStorage");
    window.location.href = "../cadastro/login.html";
}

// Verifica se o token está presente no localStorage
if (localStorage.getItem("token") === null) {
    window.location.href = "../cadastro/login.html";
}

// Função para sair e remover o token e os dados do usuário do localStorage
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    localStorage.removeItem("evaluationForm");
    window.location.href = "../cadastro/login.html";
}

// Função para lidar com o clique no botão de editar
document.getElementById("editar").addEventListener("click", function () {
    document.getElementById("editNome").value = userLogado.nome || '';
    document.getElementById("editTelefone").value = userLogado.telefone || '';
    document.getElementById("modal").style.display = "block";
});

// Função para lidar com o envio do formulário de edição
document.getElementById("editForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let editedNome = document.getElementById("editNome").value;
    let editedTelefone = document.getElementById("editTelefone").value;

    userLogado.nome = editedNome;
    userLogado.telefone = editedTelefone;
    localStorage.setItem("userLogado", JSON.stringify(userLogado));

    document.getElementById("nome").innerHTML = editedNome;
    document.getElementById("telefone").innerHTML = editedTelefone;
    document.getElementById("modal").style.display = "none";
});
