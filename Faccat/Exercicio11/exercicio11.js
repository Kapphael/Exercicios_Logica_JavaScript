let carrosVendidos, totalVendas, salario, valorCarrosVendidos, comissao, extraVendidos,salarioFinal;

carrosVendidos=parseInt(prompt("Digite a quantidade de carros vendidos: "))
totalVendas=parseFloat(prompt("Digite o valor total de suas vendas: "))
salario=parseFloat(prompt("Digite o seu salário fixo: "))
valorCarrosVendidos=parseFloat(prompt("Digite o valor fixo da comissão por carros vendidos: "))

comissao=parseFloat(carrosVendidos*valorCarrosVendidos)
extraVendidos=parseFloat(totalVendas*0.05)
salarioFinal=parseFloat(salario+comissao+extraVendidos)

alert("Valor salário final é: R$"+salarioFinal)