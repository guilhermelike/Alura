let doces = []
let frutas = []
let laticinios = []
let congelados = []

let resposta = "sim"
while(resposta !== "não"){
    
    const opção = prompt("Você deseja inserir ou remover uma comida? \nDigite 1 para inserir \nDigite 2 para remover \nDigite não para finalizar a lista")

    if(opção == 1){
    const item = prompt("Qual comida você deseja inserir?")
    const lista = prompt("Qual categoria? 1 - Doces, 2 - Frutas, 3 - Latícionios, 4 - Congelados") 
    if(lista == "1"){
        doces.push(item)
    }
    else if(lista == "2"){
        frutas.push(item)
    }
    else if(lista == "3"){
        laticinios.push(item)
    }
    else if(lista == "4"){
        congelados.push(item)
    }
    else{
        alert("Opção inválida")
    }
}


    if(opção == 2 && !doces.length && !frutas.length && !laticinios.length && !congelados.length){
        alert("Não há comidas para serem removidas!")
}   else if(opção == 2){
    alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)  

    const remover = prompt("Qual comida você deseja remover?")
    const lista2 = prompt("Qual categoria? 1 - Doces, 2 - Frutas, 3 - Latícionios, 4 - Congelados") 

    if(lista2 == "1"){
        const itemremovido = doces.indexOf(remover)
        if(itemremovido == -1){
            alert("Não foi possível encontrar o item dentro da lista!")
        }
        else{
        doces.splice(itemremovido, 1)
        alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)}
    }
    else if(lista2 == "2"){
        itemremovido = frutas.indexOf(remover)
        if(itemremovido == -1){
            alert("Não foi possível encontrar o item dentro da lista!")
        }
        else{
        frutas.splice(itemremovido, 1)
        alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)}
        
    }
    else if(lista2 == "3"){
        itemremovido = laticinios.indexOf(remover)
        if(itemremovido == -1){
            alert("Não foi possível encontrar o item dentro da lista!")
        }else{
        laticinios.splice(itemremovido, 1)
        alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)}

    }
    else if(lista2 == "4"){
        itemremovido = congelados.indexOf(remover)
        if(itemremovido == -1){
            alert("Não foi possível encontrar o item dentro da lista!")
        }else{
        congelados.splice(itemremovido, 1)
        alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)}

    }
    else{
        alert("Opção inválida")
    }
    
}   else if(opção == "não"){
    resposta = opção
} 
}


alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)