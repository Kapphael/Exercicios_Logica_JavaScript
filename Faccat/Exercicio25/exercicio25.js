// Faça um algoritmo para ler: número da conta do cliente, saldo, débito e crédito. Após, calcular e
// escrever o saldo atual (saldo atual = saldo - débito + crédito). Também testar se saldo atual for maior
// ou igual a zero escrever a mensagem 'Saldo Positivo', senão escrever a mensagem 'Saldo Negativo'. 


let conta,saldo,debito,credito,saldoatual;

conta=prompt("Digite o número da conta")
saldo=parseFloat(prompt("Digite o seu saldo"))
debito=parseFloat(prompt("Digite o débito"))
credito=parseFloat(prompt("Digite o crédito"))

saldoatual=saldo-debito+credito

alert("Saldo Atual: R$"+saldoatual)

if (saldoatual<0) {
    alert("Saldo Negativo.")
}else{
    alert("Saldo Positivo")
}
