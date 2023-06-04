let doces = []
let frutas = []
let laticinios = []
let congelados = []

let resposta = ""

while(resposta !== "não"){
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
    resposta = prompt("Você deseja inserir uma comida na sua lista de compras?")
}

alert("Lista de compras: \n" + "Doces: " + doces +
    "\nFrutas: " + frutas + 
    "\nLaticínios: " + laticinios +
    "\nCongelados: " + congelados)