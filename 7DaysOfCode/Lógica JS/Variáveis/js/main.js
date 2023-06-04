const nome = prompt("Qual o seu nome?");
const anos = prompt("Quantos anos você têm?");
const linguagem = prompt("Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você têm ${anos} anos e já está aprendendo ${linguagem}!`
alert(msg);

const resposta = prompt("Você gosta de estudar " + linguagem + "? Responda com o número 1 para SIM ou 2 para NÃO.")

if(resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
    
} else if(resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
} 
    else{
        alert("Opção inválida")
}