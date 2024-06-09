// document.addEventListener('DOMContentLoaded', () => {
//     // Função para puxar dados do localStorage e exibir na página
//     const userLogado = JSON.parse(localStorage.getItem('userLogado'));

//     if (userLogado) {
//         document.getElementById('nome').innerText = userLogado.nomeUser;
//         document.getElementById('email').innerText = userLogado.emailUser;
//         document.getElementById('telefone').innerText = userLogado.telefoneUser;
//         if (userLogado.evaluation) {
//             document.getElementById('level').innerText = userLogado.evaluation.level;
//         }
//     }

//     // Função para sair
//     document.querySelector('button[onclick="sair()"]').addEventListener('click', () => {
//         localStorage.removeItem('token');
//         window.location.href = "../cadastro/login.html";
//     });

//     // Função para mostrar modal de edição
//     document.getElementById('editar').addEventListener('click', () => {
//         document.getElementById('modal').style.display = 'block';
//         document.getElementById('editNome').value = userLogado.nomeUser;
//         document.getElementById('editTelefone').value = userLogado.telefoneUser;
//     });

//     // Função para salvar alterações
//     document.getElementById('editForm').addEventListener('submit', (event) => {
//         event.preventDefault();
//         const novoNome = document.getElementById('editNome').value;
//         const novoTelefone = document.getElementById('editTelefone').value;

//         userLogado.nomeUser = novoNome;
//         userLogado.telefoneUser = novoTelefone;

//         // Atualiza os dados no localStorage
//         const listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
//         const userIndex = listaUser.findIndex(user => user.emailUser === userLogado.emailUser);
//         if (userIndex !== -1) {
//             listaUser[userIndex] = userLogado;
//         }
//         localStorage.setItem('listaUser', JSON.stringify(listaUser));
//         localStorage.setItem('userLogado', JSON.stringify(userLogado));

//         // Atualiza os dados exibidos na página
//         document.getElementById('nome').innerText = novoNome;
//         document.getElementById('telefone').innerText = novoTelefone;

//         // Fecha o modal
//         document.getElementById('modal').style.display = 'none';
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    // Função para puxar dados do localStorage e exibir na página
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));

    if (userLogado) {
        document.getElementById('nome').innerText = userLogado.nomeUser;
        document.getElementById('email').innerText = userLogado.emailUser;
        document.getElementById('telefone').innerText = userLogado.telefoneUser;
        if (userLogado.evaluation) {
            document.getElementById('level').innerText = userLogado.evaluation.level;
        }
    }

    // Função para sair
    document.querySelector('button[onclick="sair()"]').addEventListener('click', () => {
        localStorage.removeItem('token');
        window.location.href = "../cadastro/login.html";
    });

    // Função para mostrar modal de edição
    document.getElementById('editar').addEventListener('click', () => {
        document.getElementById('modal').style.display = 'block';
        document.getElementById('editNome').value = userLogado.nomeUser;
        document.getElementById('editTelefone').value = userLogado.telefoneUser;
    });

    // Função para salvar alterações
    document.getElementById('editForm').addEventListener('submit', (event) => {
        event.preventDefault();
        const novoNome = document.getElementById('editNome').value;
        const novoTelefone = document.getElementById('editTelefone').value;

        userLogado.nomeUser = novoNome;
        userLogado.telefoneUser = novoTelefone;

        // Atualiza os dados no localStorage
        const listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
        const userIndex = listaUser.findIndex(user => user.emailUser === userLogado.emailUser);
        if (userIndex !== -1) {
            listaUser[userIndex] = userLogado;
        }
        localStorage.setItem('listaUser', JSON.stringify(listaUser));
        localStorage.setItem('userLogado', JSON.stringify(userLogado));

        // Atualiza os dados exibidos na página
        document.getElementById('nome').innerText = novoNome;
        document.getElementById('telefone').innerText = novoTelefone;

        // Fecha o modal
        document.getElementById('modal').style.display = 'none';
    });
});
