function calcularDobro() {
    const input = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const number = parseFloat(input.value);

    // Resetar animação
    resultDiv.style.animation = 'none';
    resultDiv.offsetHeight; // Trigger reflow
    resultDiv.style.animation = null;

    if (isNaN(number)) {
        resultDiv.innerHTML = `<div class="error-animation">⚠️ Por favor, insira um número válido!</div>`;
        input.classList.add('input-error');
        return;
    }

    const dobro = number * 2;
    
    // Animação de cálculo
    input.classList.remove('input-error');
    resultDiv.innerHTML = `
        <div class="result-animation">
            <span class="math-expression">${number} × 2 =</span>
            <span class="result-number">${dobro}</span>
        </div>
    `;

    // Efeitos visuais
    createRippleEffect();
    createConfetti();
    input.value = '';
}

function createRippleEffect() {
    const button = document.querySelector('.glow-button');
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

function createConfetti() {
    const colors = ['#4CAF50', '#6C5CE7', '#FFD700', '#FF4081'];
    const container = document.querySelector('.background-effects');
    
    for(let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.animationDelay = Math.random() * 0.5 + 's';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

// Validação em tempo real
document.getElementById('numberInput').addEventListener('input', function(e) {
    this.classList.remove('input-error');
});
