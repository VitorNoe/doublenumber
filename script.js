// Configurar evento de Enter
document.getElementById('numberInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularDobro();
    }
});

// Função principal de cálculo
function calcularDobro() {
    const input = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const btn = document.querySelector('.glow-button');
    
    // Animação de clique no botão
    btn.classList.add('button-press');
    setTimeout(() => btn.classList.remove('button-press'), 200);

    // Converter vírgulas para pontos e validar número
    const value = input.value.replace(/,/g, '.');
    const number = parseFloat(value);

    // Validação de entrada
    if (isNaN(number)) {
        resultDiv.innerHTML = `<div class="error-animation">⚠️ Valor inválido!</div>`;
        input.classList.add('input-error');
        resultDiv.classList.add('show');
        return;
    }

    // Cálculo e exibição do resultado
    const dobro = number * 2;
    
    resultDiv.innerHTML = `
        <div class="result-animation">
            <div class="calculation-flow">
                <span class="number-box">${number}</span>
                <span class="operator">×</span>
                <span class="number-box">2</span>
                <span class="operator">=</span>
                <span class="number-box result">${dobro}</span>
            </div>
        </div>
    `;

    // Efeitos visuais
    resultDiv.classList.add('show');
    createConfetti();
    createRippleEffect();
    
    // Resetar campo
    input.value = '';
    input.focus();
}

// Função de efeito confetti
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

// Função de efeito ripple
function createRippleEffect() {
    const button = document.querySelector('.glow-button');
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    button.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
}

// Validação em tempo real
document.getElementById('numberInput').addEventListener('input', function(e) {
    this.classList.remove('input-error');
});
