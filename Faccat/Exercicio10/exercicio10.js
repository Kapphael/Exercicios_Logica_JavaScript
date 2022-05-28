let custoFabrica, distribuidor, impostos, valortotal;

custoFabrica=parseFloat(prompt("Digite o valor do custo de fabrica do veículo: "))
distribuidor=parseInt( custoFabrica*0.28)
impostos=parseFloat(custoFabrica*0.45)
valortotal=parseFloat(custoFabrica+impostos+impostos)
alert("Valor de impostos: "+impostos)
alert("Valor de distribuidor: "+distribuidor)
alert("O valor final do veículo é: "+valortotal)
