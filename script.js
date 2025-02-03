document.addEventListener('DOMContentLoaded', () => {
    // Evento de Enter
    document.getElementById('numberInput').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calcularDobro();
    });

    // Evento de clique no botão
    document.querySelector('.glow-button').addEventListener('click', calcularDobro);
});

function calcularDobro() {
    const input = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const btn = document.querySelector('.glow-button');
    
    // Resetar estados
    resultDiv.classList.remove('show');
    input.classList.remove('input-error');

    // Animação do botão
    btn.classList.add('button-press');
    setTimeout(() => btn.classList.remove('button-press'), 200);

    // Processar valor
    const value = input.value.replace(/,/g, '.');
    const number = parseFloat(value);

    // Validação
    if (isNaN(number)) {
        resultDiv.innerHTML = `<div class="error-animation">⚠️ Valor inválido!</div>`;
        input.classList.add('input-error');
        resultDiv.classList.add('show');
        return;
    }

    // Cálculo
    const dobro = number * 2;
    
    // Exibir resultado
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

    // Efeitos
    resultDiv.classList.add('show');
    createRippleEffect();
    createConfetti();
    
    // Resetar campo
    input.value = '';
    input.focus();
}

function createConfetti() {
    const colors = ['#4CAF50', '#6C5CE7', '#FFD700', '#FF4081'];
    const container = document.querySelector('.background-effects');
    
    // Limpar confetti anterior
    container.querySelectorAll('.confetti').forEach(c => c.remove());

    for(let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.cssText = `
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 0.5}s;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            width: ${Math.random() * 8 + 6}px;
            height: ${Math.random() * 8 + 6}px;
        `;
        container.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 3000);
    }
}

function createRippleEffect() {
    const button = document.querySelector('.glow-button');
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}
