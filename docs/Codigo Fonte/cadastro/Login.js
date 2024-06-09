// function entrar() {
//     let email_login = document.querySelector("#email_login");
//     let emailLabel = document.querySelector("#emailLabel");

//     let senha_login = document.querySelector("#senha_login");
//     let senhaLabel = document.querySelector("#senhaLabel");

//     let msgError = document.querySelector("#msgError"); // para quando errar senha ou email

//     let listaUser = []; // listaUser criada no código do cadastro

//     let userValid = { // para validar e depois percorrer com Foreach
//         email: "",
//         senha: "",
//         nome: "",
//         telefone: ""
//     };

//     // pega a listaUser do LocalStorage criada no cadastro e percorre essa lista para comparar os dados que eu insiro no login com os dados retirados ao fazer o cadastro
//     listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

//     listaUser.forEach((item) => {
//         if (email_login.value == item.emailUser && senha_login.value == item.senhaUser) {
//             userValid = {
//                 email: item.emailUser,
//                 senha: item.senhaUser,
//                 nome: item.nomeUser,
//                 telefone: item.telefoneUser
//             };
//         }
//     });

//     // se as informações são validadas então redireciona para a pagina de perfil // também coloquei que o campo tem que estar preenchido
//     if (email_login.value == userValid.email && senha_login.value == userValid.senha && email_login.value != "" && senha_login.value != "") {
//         // window.location.href = "../Formulário/formulário.html";

//         let mathRandom = Math.random().toString(16).substr(2);
//         let token = mathRandom + mathRandom;

//         localStorage.setItem("token", token);
//         localStorage.setItem('userLogado', JSON.stringify(userValid));
//         localStorage.setItem('nome', userValid.nome); // Armazenando o nome do usuário
//         localStorage.setItem('telefone', userValid.telefone); // Armazenando o número de telefone do usuário
//     } else {
//         msgError.setAttribute('style', 'text-align: center');
//         msgError.innerHTML = "<h3>Usuário ou senha incorretos</h3>";
//         emailLabel.setAttribute('style', 'color: red');
//         email_login.setAttribute('style', 'border-color: red');
//         senhaLabel.setAttribute('style', 'color: red');
//         senha_login.setAttribute('style', 'border-color: red');
//     }
// // Redireciona com base no nível armazenado no localStorage
// if (level) {
//     window.location.href = "../Perfil/perfil.html"; // Redireciona para página 1 se o nível já estiver preenchido
// } else {
//     window.location.href = "../Formulário/formulário.html"; // Redireciona para página 2 se o nível não estiver preenchido

// }


function entrar() {
    let email_login = document.querySelector("#email_login");
    let emailLabel = document.querySelector("#emailLabel");

    let senha_login = document.querySelector("#senha_login");
    let senhaLabel = document.querySelector("#senhaLabel");

    let msgError = document.querySelector("#msgError"); // para quando errar senha ou email

    let listaUser = []; // listaUser criada no código do cadastro

    let userValid = { // para validar e depois percorrer com Foreach
        email: "",
        senha: "",
        nome: "",
        telefone: ""
    };

    // Pega a listaUser do LocalStorage criada no cadastro e percorre essa lista para comparar os dados que eu insiro no login com os dados retirados ao fazer o cadastro
    listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

    listaUser.forEach((item) => {
        if (email_login.value == item.emailUser && senha_login.value == item.senhaUser) {
            userValid = {
                email: item.emailUser,
                senha: item.senhaUser,
                nome: item.nomeUser,
                telefone: item.telefoneUser
            };
        }
    });

    // Se as informações são validadas então redireciona para a página de perfil // também coloquei que o campo tem que estar preenchido
    if (email_login.value == userValid.email && senha_login.value == userValid.senha && email_login.value != "" && senha_login.value != "") {
        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        localStorage.setItem("token", token);
        localStorage.setItem('userLogado', JSON.stringify(userValid));
        localStorage.setItem('nome', userValid.nome); // Armazenando o nome do usuário
        localStorage.setItem('telefone', userValid.telefone); // Armazenando o número de telefone do usuário

        // Verifica o nível no localStorage
        let evaluationForm = JSON.parse(localStorage.getItem("evaluationForm"));
        if (evaluationForm && evaluationForm.level) {
            window.location.href = "../Perfil/perfil.html"; // Redireciona para página de perfil se o nível já estiver preenchido
        } else {
            window.location.href = "../Formulário/formulário.html"; // Redireciona para a página de formulário se o nível não estiver preenchido
        }
    } else {
        msgError.setAttribute('style', 'text-align: center');
        msgError.innerHTML = "<h3>Usuário ou senha incorretos</h3>";
        emailLabel.setAttribute('style', 'color: red');
        email_login.setAttribute('style', 'border-color: red');
        senhaLabel.setAttribute('style', 'color: red');
        senha_login.setAttribute('style', 'border-color: red');
    }
}

// Função para sair e remover o token e os dados do usuário do localStorage
function sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("userLogado");
    localStorage.removeItem("evaluationForm");
    window.location.href = "../cadastro/login.html";
}
