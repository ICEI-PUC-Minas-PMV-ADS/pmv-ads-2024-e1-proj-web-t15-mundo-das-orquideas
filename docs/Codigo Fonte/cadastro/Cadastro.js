//cadastro

function cadastrar() {

    if (nome.value == "" || nome.value.length < 4) {
        alert("Preencha o formulário corretamente!");
        nome.focus();
        return;
    }
    if (email.value == "") {
        alert("Preencha o formulário corretamente!");
        email.focus();
        return;
    }
    if (telefone.value == "" || telefone.value.length < 11) {
        alert("Preencha o formulário corretamente!");
        telefone.focus();
        return;
    }

    if (senha.value == "" || senha.value.length < 6) {
        alert("Preencha o formulário corretamente!");
        Senha.focus();
        return;
    }
    if (ConfirmeSenha.value == "") {
        alert("Preencha o formulário corretamente!");
        ConfirmeSenha.focus();
        return;
    }

    if (senha.value != ConfirmeSenha.value) {
        alert("As senhas não correspondem!");
        ConfirmeSenha.focus();
        return;
    }

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

    listaUser.push(
        {
            nomeUser: nome.value,
            telefoneUser: formulario.telefone.value,
            emailUser: formulario.email.value,
            senhaUser: formulario.senha.value,
            ConfirmeSenhaUser: formulario.ConfirmeSenha.value
        });

    localStorage.setItem("listaUser", JSON.stringify(listaUser))

    alert("Usuário cadastrado com sucesso!");
    window.location.href = "/docs/Codigo Fonte/cadastro/login.html";

}