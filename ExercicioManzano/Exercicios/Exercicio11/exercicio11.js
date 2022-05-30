/*Elaborar um programa que efetue a apresentação do valor da conversão em dólar (US$) de um valor lido em real (R$). O programa deverá solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário.*/


let reais = parseInt(prompt('Digite o valor que você possue em Reais: '));
let cotacao = parseInt(prompt('Digite a cotação atual: '));
    
let resul = reais/cotacao;
    
alert(resul.toFixed(2) + ' dólar');