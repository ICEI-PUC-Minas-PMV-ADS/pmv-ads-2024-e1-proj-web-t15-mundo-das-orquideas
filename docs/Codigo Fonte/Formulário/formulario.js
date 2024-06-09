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

    localStorage.setItem('evaluationForm', JSON.stringify({
        score: totalScore,
        level: level
    }));

    document.querySelector('.nivel').innerText = `Você é: ${level}`;
    window.location.href = "../Perfil/perfil.html"; // Redireciona para a página de perfil
}
