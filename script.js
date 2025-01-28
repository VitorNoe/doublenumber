function calcularDobro() {
    const input = document.getElementById("numberInput").value;
    const resultDiv = document.getElementById("result");

    if (!input || isNaN(input)) {
        resultDiv.textContent = "Por favor, insira um número válido.";
        resultDiv.style.color = "red";
    } else {
        const dobro = parseFloat(input) * 2;
        resultDiv.textContent = `Resultado: ${dobro}`;
        resultDiv.style.color = "green";
    }
}
