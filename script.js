function calcularDobro() {
    const input = document.getElementById('numberInput');
    const resultDiv = document.querySelector('.result-content');
    const resultContainer = document.getElementById('result');

    if(input.value === '') {
        input.focus();
        resultDiv.textContent = "Por favor, digite um número!";
        resultContainer.classList.add('show');
        return;
    }

    const numero = parseFloat(input.value);
    const dobro = numero * 2;
    
    resultDiv.innerHTML = `O dobro de <span class="highlight">${numero}</span> é <span class="highlight">${dobro}</span>`;
    resultContainer.classList.add('show');

    // Efeito de confete
    createConfetti();
    input.value = '';
}

function createConfetti() {
    const colors = ['#4CAF50', '#6C5CE7', '#FFD700', '#FF4081'];
    const container = document.querySelector('.background-effects');
    
    for(let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('particle');
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = Math.random() * 100 + '%';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = confetti.style.width;
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}
