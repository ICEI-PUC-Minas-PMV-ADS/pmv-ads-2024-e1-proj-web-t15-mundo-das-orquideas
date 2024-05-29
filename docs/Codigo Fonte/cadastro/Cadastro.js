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
        alert("Preencha corretamente o telefone");
        telefone.focus();
        return;

    }

    if (senha.value == "" || senha.value.lengt < 6) {
        alert("Preencha corretametne a senha");
        senha.focus();
        return;
    }

    if (confirmasenha.value !== senha.value) {
        alert("Senhas não conferem");
        confirmasenha.focus();
        return;

    }

    let lista = JSON.parse(localStorage.getItem('lista') || '[]')

    lista.push(
        {
            nomeUser: nome.value,
            emailUser: formulario.email.value,
            telefoneUser: formulario.telefone.value,
            SenhaUser: formulario.Senha.value,
            ConfirmeSenhaUser: formulario.ConfirmeSenha.value
        });
        localStorage.setItem("lista", JSON.stringify(lista))

        alert("Usuário cadastrado com sucesso!");
        window.location.href= "../index.html"
}