//  Ler o salário fixo e o valor das vendas efetuadas pelo vendedor de uma empresa. Sabendo-se que
// ele recebe uma comissão de 3% sobre o total das vendas até R$ 1.500,00 mais 5% sobre o que
// ultrapassar este valor, calcular e escrever o seu salário total. 


let salFixo, vendas,vendasExtra,extra1,extra2,total;

salFixo=parseFloat(prompt("Digite seu salário fixo"))
vendas=parseFloat(prompt("Digite o valor das vendas"))

if (vendas>1500) {
    vendasExtra=vendas-1500
    extra1=vendasExtra*0.05
    extra2=1500*0.03
    total=salFixo+extra1+extra2
    alert("Seu salário total é de: R$"+total)

}else{
    extra2=vendas*0.03
    total=salFixo+extra2
    alert("Seu salário total é de : R$"+total)
}