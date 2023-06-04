const curso = prompt("Você pensa em ir para a área de Front-End ou seguir para a área de Back-End. Responda com Front ou Back")

if(curso == 'Front'){
    const framework = prompt("Quer aprender React ou Vue?")
} else if(curso == 'Back'){
    const framework = prompt("Quer aprender C# ou Java")
} else{
    alert("Opção inválida!")
}

if(curso == 'Front' || curso == 'Back'){

prompt("Você quer continuar se especializando na área de " + curso + "-End ou quer se tornar FullStack?")

let resposta = "ok"
while(resposta == 'ok'){
    const tec = prompt("Qual tecnologia você gostaria de aprender?")
    alert("Você vai aprender " + tec)
    resposta = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (ok para sim)")
}
}