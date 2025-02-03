document.addEventListener('DOMContentLoaded', () => {
    // Configurar eventos
    const input = document.getElementById('numberInput');
    const button = document.getElementById('calculateButton');
    
    // Evento de Enter
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calcularDobro();
    });

    // Evento de clique no botão
    button.addEventListener('click', calcularDobro);
});

function calcularDobro() {
    const input = document.getElementById('numberInput');
    const resultContent = document.querySelector('.result-content');
    const resultContainer = document.getElementById('result');
    const button = document.getElementById('calculateButton');

    // Resetar estados
    resultContainer.classList.remove('show');
    input.classList.remove('input-error');
    button.classList.remove('button-error');

    // Animação do botão
    button.classList.add('button-press');
    setTimeout(() => button.classList.remove('button-press'), 200);

    // Converter e validar número
    const value = input.value.replace(/,/g, '.');
    const number = parseFloat(value);

    if (isNaN(number)) {
        resultContent.textContent = "⚠️ Digite um número válido!";
        resultContainer.classList.add('show');
        input.classList.add('input-error');
        button.classList.add('button-error');
        return;
    }

    // Calcular e mostrar resultado
    const dobro = number * 2;
    resultContent.innerHTML = `
        <div class="calculation-flow">
            <span class="number-box animate__animated animate__bounceIn">${number}</span>
            <span class="operator animate__animated animate__fadeIn">×</span>
            <span class="number-box animate__animated animate__bounceIn">2</span>
            <span class="operator animate__animated animate__fadeIn">=</span>
            <span class="number-box result animate__animated animate__rubberBand">${dobro}</span>
        </div>
    `;

    // Ativar animações
    resultContainer.classList.add('show');
    createRippleEffect();
    createConfetti();

    // Resetar campo
    input.value = '';
    input.focus();
}

function createConfetti() {
    const colors = ['#4CAF50', '#6C5CE7', '#FFD700', '#FF4081'];
    const container = document.querySelector('.background-effects');
    
    // Limpar confetti antigo
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
    const button = document.getElementById('calculateButton');
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
}
