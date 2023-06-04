const valor = Math.floor(Math.random() * (10 - 1 + 1) + 1)
let chute = 3

console.log(valor)

while(chute > 0 ){
    const resposta = prompt("Qual o valor estou pensando?")
    if(resposta == valor)
    {
        alert("Parabéns você acertou!")
        chute = 0
    }
    else{
        chute = chute - 1
        alert("Você errou e tem mais " + chute + " tentativas!")
    }
}