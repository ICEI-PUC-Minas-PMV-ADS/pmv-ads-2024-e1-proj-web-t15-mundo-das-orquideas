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
document.getElementById("editar").addEventListener("click", function() {
    // Preencher o modal com os dados atuais do usuário
    document.getElementById("editNome").value = userLogado.nome;
    document.getElementById("editTelefone").value = userLogado.telefone;

    // Exibir o modal
    document.getElementById("modal").style.display = "block";
});

// Função para lidar com o envio do formulário de edição
document.getElementById("editForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o comportamento padrão do formulário

    // Obter os novos valores dos campos de edição
    let editedNome = document.getElementById("editNome").value;
    let editedTelefone = document.getElementById("editTelefone").value;

    // Atualizar os dados do usuário no localStorage
    userLogado.nome = editedNome;
    userLogado.telefone = editedTelefone;
    localStorage.setItem("userLogado", JSON.stringify(userLogado));

    // Atualizar os dados na interface do usuário
    document.getElementById("nome").innerHTML = editedNome;
    document.getElementById("telefone").innerHTML = editedTelefone;

    // Fechar o modal
    document.getElementById("modal").style.display = "none";
});
