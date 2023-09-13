function calculadora() {
    const operacao = prompt("Escolha a operação (+, -, *, /):");

    if (operacao !== '+' && operacao !== '-' && operacao !== '*' && operacao !== '/') {
        console.log("Operação inválida.");
        return;
    }

    const numero1 = parseFloat(prompt("Digite o primeiro número:"));
    const numero2 = parseFloat(prompt("Digite o segundo número:"));

    let resultado = 0;

    switch (operacao) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 === 0) {
                console.log("Não é possível dividir por zero.");
                return;
            }
            resultado = numero1 / numero2;
            break;
    }

    console.log("Resultado:", resultado);
}

calculadora();
