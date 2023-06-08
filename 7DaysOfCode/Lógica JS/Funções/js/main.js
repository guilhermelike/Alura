alert("Olá! Bem vindo(a) a Calculadora do Like!")
const sair = false

function somaValor(valor1, valor2){
    return valor1 + valor2
}

function subtrairValor(valor1, valor2){
    return valor1 - valor2
}

function multiplicarValor(valor1, valor2){
    return valor1 * valor2
}

function dividirValor(valor1, valor2){
    return valor1 / valor2
}

while(sair !== true){
    const opcao = prompt("Selecione uma opção: \n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão \n5 - Sair")
    if(opcao == "5"){
        alert("Até a próxima!")
        sair = true
        break;
    }
    const valor1 = parseInt(prompt("Digite o primeiro valor:"))
    const valor2 = parseInt(prompt("Digite o segundo valor:"))
    switch(opcao){
        case "1":
           alert("O resultado da adição é: " + somaValor(valor1,valor2))
            break;
        
        case "2":
            alert("O resultado da subtração é: " + subtrairValor(valor1, valor2))
            break;

        case "3":
            alert("O resultado da multiplicação é: " + multiplicarValor(valor1, valor2))
            break;

        case "4":
            alert("O resultado da divisão é: " + dividirValor(valor1, valor2))
            break;
    }
    
}

