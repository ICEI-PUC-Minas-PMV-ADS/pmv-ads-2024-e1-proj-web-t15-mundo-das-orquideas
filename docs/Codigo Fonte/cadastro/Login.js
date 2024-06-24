function entrar(event) {
    event.preventDefault();

    // Recuperar elementos de entrada
    let email_login = document.querySelector("#email_login");
    let senha_login = document.querySelector("#senha_login");
    let msgError = document.querySelector("#msgError");

    // Buscar e analisar a lista de usuários do localStorage
    let listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

    // Encontrar usuário com email e senha correspondentes
    let userValid = listaUser.find(item => email_login.value === item.emailUser && senha_login.value === item.senhaUser);

    if (userValid) {
        // Gerar token
        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        // Armazenar token e dados do usuário no localStorage
        localStorage.setItem("token", token);
        localStorage.setItem("userLogado", JSON.stringify(userValid)); // Armazenar como string

        // Verificar se o usuário já completou o formulário de avaliação
        if (userValid.evaluation && userValid.evaluation.level) {
            window.location.href = "../Perfil/perfil.html"; // Redirecionar para a página de perfil
        } else {
            window.location.href = "../Formulário/formulário.html"; // Redirecionar para a página de formulário
        }
    } else {
        // Exibir mensagem de erro
        msgError.setAttribute('style', 'text-align: center');
        msgError.innerHTML = "<h3>Usuário ou senha incorretos</h3>";
        email_login.setAttribute('style', 'border-color: red');
        senha_login.setAttribute('style', 'border-color: red');
    }
}
