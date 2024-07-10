let peso= 89, altura= 1.70
let imc = peso / (altura * altura);
let  resultado = imc

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.6 && imc <= 24.9) {
    console.log("Peso ideal (parabéns)");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Levemente acima do peso");
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Obesidade grau I");
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Obesidade grau II (severa)");
} else {
    console.log("Obesidade grau III (mórbida)");
}
