/*Faça um algoritmo para ler: a descrição do produto (nome), a quantidade adquirida e o preço
unitário. Calcular e escrever o total (total = quantidade adquirida * preço unitário), o desconto e o total
a pagar (total a pagar = total - desconto), sabendo-se que:
 - Se quantidade <= 5 o desconto será de 2%
 - Se quantidade > 5 e quantidade <=10 o desconto será de 3%
 - Se quantidade > 10 o desconto será de 5% */


 let desconto;

 let nomeProduto=prompt("Digite o nome do produto: ");
 let qtdProduto=parseInt(prompt("Digite a quantidade do produto: "));
 let precoUni=parseInt(prompt("Digite o preço unitario: "));
 
 let total = qtdProduto * precoUni;
 
 if (qtdProduto <= 5) {
     desconto = total- (total* 2/100)
 } else if (qtdProduto > 5 && qtdProduto <= 10) {
     desconto = total- (total* 3/100)
 }else if (qtdProduto > 10) {
     desconto = total- (total* 5/100)
 }
 
 totPagar = total - desconto
 alert('O produto "'+nomeProduto+'" vai sair por: R$'+desconto.toFixed(2)+' , ja com desconto');