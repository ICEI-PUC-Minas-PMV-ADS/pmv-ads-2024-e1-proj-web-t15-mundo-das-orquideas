// function submitForm() {
//     const form = document.getElementById('evaluationForm');
//     let totalScore = 0;

//     // Obtém pontuações para cada pergunta
//     for (let i = 1; i <= 5; i++) {
//         const question = form[`question${i}`];
//         for (let j = 0; j < question.length; j++) {
//             if (question[j].checked) {
//                 totalScore += parseInt(question[j].value);
//                 break;
//             }
//         }
//     }

//     // Determina o nível
//     let level = '';
//     if (totalScore > 10) {
//         level = 'Especialista';
//     } else {
//         level = 'Iniciante';
//     }

//     // Armazena os dados no localStorage
//     localStorage.setItem('evaluationForm', JSON.stringify({
//         score: totalScore,
//         level: level
//     }));

//     // Exibe o resultado
//     document.querySelector('.nivel').innerText = `Você é: ${level}`;
    
//     window.location.href = "../Perfil/perfil.html";
// }
function submitForm() {
    const form = document.getElementById('evaluationForm');
    let totalScore = 0;

    // Obtém pontuações para cada pergunta
    for (let i = 1; i <= 5; i++) {
        const question = form[`question${i}`];
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                totalScore += parseInt(question[j].value);
                break;
            }
        }
    }

    // Determina o nível
    let level = '';
    if (totalScore > 10) {
        level = 'Especialista';
    } else {
        level = 'Iniciante';
    }

    // Armazena os dados no localStorage
    localStorage.setItem('evaluationForm', JSON.stringify({
        score: totalScore,
        level: level
    }));

    // Exibe o resultado
    document.querySelector('.nivel').innerText = `Você é: ${level}`;

    // Redireciona com base no nível armazenado no localStorage
    if (level) {
        window.location.href = "../Perfil/perfil.html"; // Redireciona para página de perfil
    } else {
        window.location.href = "../Formulário/formulário.html"; // Redireciona para página de formulário
    }
}
