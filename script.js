// Adicionar evento de Enter
document.getElementById('numberInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calcularDobro();
    }
});

// Função principal atualizada
function calcularDobro() {
    const input = document.getElementById('numberInput');
    const resultDiv = document.getElementById('result');
    const btn = document.querySelector('.glow-button');
    
    // Animação de clique no botão
    btn.classList.add('button-press');
    setTimeout(() => btn.classList.remove('button-press'), 200);

    const value = input.value.replace(/,/g, '.');
    const number = parseFloat(value);

    if (isNaN(number)) {
        resultDiv.innerHTML = `<div class="error-animation">⚠️ Valor inválido!</div>`;
        input.classList.add('input-error');
        resultDiv.classList.add('show');
        return;
    }

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

    resultDiv.classList.add('show');
    createConfetti();
    input.value = '';
    input.focus();
}

// Nova animação de pressão (adicionar ao CSS)
