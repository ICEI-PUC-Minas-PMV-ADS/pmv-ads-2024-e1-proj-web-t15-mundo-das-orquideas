function submitForm() {
    const form = document.getElementById('evaluationForm');
    let totalScore = 0;

    // Get scores for each question
    for (let i = 1; i <= 5; i++) {
        const question = form[`question${i}`];
        for (let j = 0; j < question.length; j++) {
            if (question[j].checked) {
                totalScore += parseInt(question[j].value);
                break;
            }
        }
    }

    // Determine the level
    let level = '';
    if (totalScore > 10) {
        level = 'Especialista';
    } else {
        level = 'Iniciante';
    }

    // Store the data in localStorage
    localStorage.setItem('evaluationResult', JSON.stringify({
        score: totalScore,
        level: level
    }));

    // Display the result
    document.querySelector('.nivel').innerText = `Você é: ${level}`;
    
    // window.location.href = "/";

}
