function entrar(event) {
    event.preventDefault();

    let email_login = document.querySelector("#email_login");
    let senha_login = document.querySelector("#senha_login");
    let msgError = document.querySelector("#msgError");

    let listaUser = JSON.parse(localStorage.getItem("listaUser")) || [];

    let userValid = listaUser.find(item => email_login.value === item.emailUser && senha_login.value === item.senhaUser);

    if (userValid) {
        let mathRandom = Math.random().toString(16).substr(2);
        let token = mathRandom + mathRandom;

        localStorage.setItem("token", token);
        localStorage.setItem("userLogado"), JSON.stringify(userValid);

        let evaluationForm = JSON.parse(localStorage.getItem("evaluationForm"));

        if (evaluationForm && evaluationForm.level) {
            window.location.href = "../Perfil/perfil.html"; // Redireciona para página de perfil
        } else {
            window.location.href = "../Formulário/formulário.html"; // Redireciona para a página de formulário
        }
    } else {
        msgError.setAttribute('style', 'text-align: center');
        msgError.innerHTML = "<h3>Usuário ou senha incorretos</h3>";
        email_login.setAttribute('style', 'border-color: red');
        senha_login.setAttribute('style', 'border-color: red');
    }
}
