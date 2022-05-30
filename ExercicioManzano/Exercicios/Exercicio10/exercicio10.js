/*Elaborar um programa que efetue a apresentação do valor da conversão em real (R$) de um valor lido em dólar (US$). O programa deverá solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário.*/


let dolar = parseInt(prompt('Digite o valor que você possue em dólar: '));
    let cotacao = parseInt(prompt('Digite a cotação atual: '));

    let resul = dolar * cotacao;

    alert('Em reias voce teria aproximadamente: ' + resul.toFixed(2) + ' reais');