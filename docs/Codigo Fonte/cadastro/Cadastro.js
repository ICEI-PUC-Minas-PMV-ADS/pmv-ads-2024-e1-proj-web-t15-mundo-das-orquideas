function cadastrar() {

    if (nome.value == "" || nome.value < 4) {
        alert("Preencha o nome corretamente");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("Preencha o e-mail corretamente");
        email.focus();
        return;
    }

    if (telefone.value == "" || telefone.value.length < 11) {
        alert{ "Preencha corretamente o telefone" };
        telefone.focus();
        return;

    }

    if (Senha.value == "" || senha.value.lengt < 6) {
        alert("Preencha corretametne a senha")
        senha.focus();
        return;
    }

    if (confirmasenha.value !== senha.value) {
        alert("Senhas não conferem")
        confirmasenha.focus();

    }

.botao onclick function()[
    alert 'ola;'
]
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
}




// let form = document.getElementById('register-form');
// let submit = document.getElementById('btn-submit');

// //Cadastro de informações

// document.getElementById('submit').addEventListener('click', function () {
//     const nome = document.getElementById('nome').value;
//     const email = document.getElementById('email').value;
//     const telefone = document.getElementById('telefone').value;
//     const senha = document.getElementById('senha').value;
//     const confirmarsenha = document.getElementById('confirmarsenha').value;

//     // Verifica se as senhas são iguais
//     if (senha !== confirmarsenha) {
//         alert('As senhas não coincidem.');
//         return;
//     }

//     // Cria um objeto com os dados do usuário
//     const userData = {
//         nome: nome,
//         email: email,
//         telefone: telefone,
//         senha: senha;
//     };

//     // Armazena os dados no localStorage
//     localStorage.setItem('userData', JSON.stringify(userData));

//     alert('Cadastro realizado com sucesso!');

//     camponome = focus()