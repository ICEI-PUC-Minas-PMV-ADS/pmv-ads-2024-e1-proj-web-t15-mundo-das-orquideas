// function submitForm() {
//     const form = document.getElementById('evaluationForm');
//     let totalScore = 0;

//     for (let i = 1; i <= 5; i++) {
//         const question = form[`question${i}`];
//         for (let j = 0; j < question.length; j++) {
//             if (question[j].checked) {
//                 totalScore += parseInt(question[j].value);
//                 break;
//             }
//         }
//     }

//     let level = totalScore > 10 ? 'Especialista' : 'Iniciante';

//     // Atualiza o objeto userLogado com a avaliação
//     const userLogado = JSON.parse(localStorage.getItem('userLogado'));
//     if (userLogado) {
//         userLogado.evaluation = {
//             score: totalScore,
//             level: level
//         };
//         localStorage.setItem('userLogado', JSON.stringify(userLogado));

//         // Atualiza a lista de usuários com a avaliação do usuário logado
//         let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
//         const userIndex = listaUser.findIndex(user => user.emailUser === userLogado.emailUser);
//         if (userIndex !== -1) {
//             listaUser[userIndex] = userLogado;
//         }
//         localStorage.setItem('listaUser', JSON.stringify(listaUser));
//     }

//     document.querySelector('.nivel').innerText = `Você é: ${level}`;
//     window.location.href = "../Perfil/perfil.html"; // Redireciona para a página de perfil
// }
function submitForm() {
    const form = document.getElementById('evaluationForm');
    let totalScore = 0;

    for (let i = 1; i <= 5; i++) {
        const question = form[`question${i}`];
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                totalScore += parseInt(question[j].value);
                break;
            }
        }
    }

    let level = totalScore > 10 ? 'Especialista' : 'Iniciante';

    // Atualiza o objeto userLogado com a avaliação
    const userLogado = JSON.parse(localStorage.getItem('userLogado'));
    if (userLogado) {
        userLogado.evaluation = {
            score: totalScore,
            level: level
        };
        localStorage.setItem('userLogado', JSON.stringify(userLogado));

        // Atualiza a lista de usuários com a avaliação do usuário logado
        let listaUser = JSON.parse(localStorage.getItem('listaUser')) || [];
        const userIndex = listaUser.findIndex(user => user.emailUser === userLogado.emailUser);
        if (userIndex !== -1) {
            listaUser[userIndex] = userLogado;
        }
        localStorage.setItem('listaUser', JSON.stringify(listaUser));
    }

    document.querySelector('.nivel').innerText = `Você é: ${level}`;
    window.location.href = "../Perfil/perfil.html"; // Redireciona para a página de perfil
}
