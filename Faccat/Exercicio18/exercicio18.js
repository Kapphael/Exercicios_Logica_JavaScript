// Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela
// poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).
let anoA, nasc,idade;

anoA=parseInt(prompt("Digite o ano atual"))
nasc=parseInt(prompt("Digite o ano em que você nasceu"))

idade=anoA-nasc

if (idade>=16) {

    alert("Idade suficiente para votar!")
    
}else{
    alert("Idade insuficiente para votar!")
}