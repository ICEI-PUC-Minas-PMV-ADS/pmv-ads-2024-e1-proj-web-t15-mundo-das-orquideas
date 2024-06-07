//
function entrar() {


    let email_login = document.querySelector("#email_login")
    let emailLabel = document.querySelector("#emailLabel")

    let senha_login = document.querySelector("#senha_login")
    let senhaLabel = document.querySelector("#senhaLabel")

    let msgError = document.querySelector("#msgError") // para quando errar senha ou email

    let listaUser = [] //listaUser criada no código do cadastro

    let userValid = { //para validar e depois percorrer com Foreach

        email: "",
        senha: "",
        nome: "",

    }
    //pega a listaUser do LocalStorage criada no cadastro e percorre essa lista para comparar os dados que eu insiro no login com os dados retirados ao fazer o cadastro
    listaUser = JSON.parse(localStorage.getItem("listaUser"))
    listaUser.forEach((item) => {
        if (email_login.value == item.emailUser && senha_login.value == item.SenhaUser) {


            userValid = {
                email: item.emailUser,
                senha: item.SenhaUser,
                nome: item.nomeUser,
                telefone: item.telefoneUser,


            }

        }
    })

    //se as informações são validadas então redireciona para a pagina de perfil // também coloquei que o campo tem que estar preenchido
    if (email_login.value == userValid.email && senha_login.value == userValid.senha && email_login.value != "" && senha_login.value != "") {


        window.location.href = "/docs/Codigo Fonte/Home Page/index.html"


        let mathRandom = Math.random().toString(16).substr(2)
        let token = mathRandom + mathRandom

        localStorage.setItem("token", token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
        localStorage.setItem('nome', JSON.stringify(nomeUser))
        localStorage.setItem('telefone', JSON.stringify(telefoneUser))




    } else {
        msgError.setAttribute('style', 'text-aling:center',)
        msgError.innerHTML = "<h3>Usuário ou senha incorretos<h2>"
        emailLabel.setAttribute('style', 'color: red')
        email_login.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha_login.setAttribute('style', 'border-color: red')

    }

}

