//Estamos usando a const (constante) para não ter que ficar repetindo a seleção do input toda hora
const input1 = document.getElementById("input_numero1"); //pega o input 1
const input2 = document.getElementById("input_numero2"); //pega o input 2
const inputResultado = document.getElementById("input_resultado"); //pega o input resultado


function somarNumeros(){
    //parseInt é uma função nativa do JavaScript para converter o valor em int(inteiro)
    var num1 =  parseInt(input1.value); //valor do input 1
    var num2 =  parseInt(input2.value); //valor do input 2

    var resultadoSoma

    resultadoSoma = num1 + num2

    inputResultado.style.backgroundColor = "#ffff00";
    inputResultado.style.color = "#ff0000";
    inputResultado.style.fontWeight = "bold";
    inputResultado.value = resultadoSoma;
}

function calcularIMC(){
    var peso = input1.value
    var altura = input2.value

    var resultadoIMC = parseInt(peso / (altura * altura) )

    inputResultado.style.backgroundColor = "#00ffff";
    inputResultado.style.color = "#000000";
    inputResultado.value = resultadoIMC
}

function limparInputs(){
    input1.value = "";
    input2.value = "";
    inputResultado.value = "";
    inputResultado.style.backgroundColor = "";
    inputResultado.style.fontWeight = "";
    inputResultado.style.color = "";
}