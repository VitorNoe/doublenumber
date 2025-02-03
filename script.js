document.addEventListener('DOMContentLoaded', () => {
    document.fonts.ready.then(() => {
        const container = document.querySelector('.cyber-container');
        container.style.visibility = 'visible';
        container.classList.add('loaded');
        initializeAnimations();
        setupEventListeners();
        createFloatingParticles();
    });
});

function setupEventListeners() {
    const input = document.getElementById('cyberInput');
    const button = document.getElementById('cyberButton');
    
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') calcularDobro();
    });

    button.addEventListener('click', calcularDobro);
}

function calcularDobro() {
    const input = document.getElementById('cyberInput');
    const resultElement = document.getElementById('cyberResult');
    const originalNumber = document.querySelector('.original-number');
    const resultNumber = document.querySelector('.result-number');

    anime({
        targets: '#cyberButton',
        scale: [1, 0.95, 1],
        duration: 300,
        easing: 'easeInOutQuad'
    });

    const value = input.value.replace(/,/g, '.');
    const number = parseFloat(value);

    if (isNaN(number)) {
        showErrorAnimation();
        return;
    }

    const dobro = number * 2;
    
    anime({
        targets: resultElement,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 800,
        easing: 'easeOutElastic(1, .5)',
        begin: () => {
            resultElement.style.display = 'block';
        }
    });

    anime({
        targets: originalNumber,
        innerHTML: [originalNumber.textContent, number],
        round: 1,
        duration: 1500,
        easing: 'easeOutExpo'
    });

    anime({
        targets: resultNumber,
        innerHTML: [resultNumber.textContent, dobro],
        round: 1,
        duration: 1500,
        easing: 'easeOutExpo'
    });

    createMatrixEffect();
    input.value = '';
    input.focus();
}

function showErrorAnimation() {
    anime({
        targets: '#cyberInput',
        translateX: [-10, 10, -10, 10, 0],
        backgroundColor: ['rgba(0,0,0,0.7)', '#ff000030', 'rgba(0,0,0,0.7)'],
        duration: 800,
        easing: 'easeInOutQuad'
    });
}

function createFloatingParticles() {
    const particles = 50;
    const overlay = document.querySelector('.particle-overlay');

    for(let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'cyber-particle';
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 6 + 2}px;
            height: ${Math.random() * 6 + 2}px;
            background: ${Math.random() > 0.5 ? 'var(--neon-blue)' : 'var(--cyber-purple)'};
            animation-duration: ${Math.random() * 5 + 5}s;
        `;
        overlay.appendChild(particle);
    }
}

function createMatrixEffect() {
    const characters = '01';
    const container = document.querySelector('.cyber-container');
    
    for(let i = 0; i < 30; i++) {
        const digit = document.createElement('div');
        digit.className = 'matrix-digit';
        digit.textContent = characters.charAt(Math.floor(Math.random() * characters.length));
        digit.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            color: ${Math.random() > 0.5 ? 'var(--matrix-green)' : 'var(--neon-blue)'};
            animation: matrixFall ${Math.random() * 3 + 2}s linear;
        `;
        container.appendChild(digit);
        
        setTimeout(() => digit.remove(), 2000);
    }
}

function initializeAnimations() {
    anime({
        targets: '.holographic-header',
        opacity: [0, 1],
        translateY: [-30, 0],
        delay: 300,
        duration: 800,
        easing: 'easeOutExpo'
    });

    anime({
        targets: '.cyber-input-group',
        opacity: [0, 1],
        translateX: [-50, 0],
        delay: 500,
        duration: 600,
        easing: 'easeOutQuad'
    });

    anime({
        targets: '#cyberButton',
        opacity: [0, 1],
        scale: [0.8, 1],
        delay: 700,
        duration: 600,
        easing: 'easeOutBack'
    });
}
