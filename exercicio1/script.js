//const nome = ""

let nome = ""
let idade 

console.log(typeof nome)
console.log(typeof idade)
//no nome foi impresso string porque é texto
//na idade deu undefined porque não tem valor

nome = prompt("qual é seu nome?")
idade = prompt("qual a sua idade?")

console.log(nome,idade)

console.log(typeof nome)
console.log(typeof idade)
//agora os dois são string

console.log("Olá", nome, "você tem", idade, "anos.")