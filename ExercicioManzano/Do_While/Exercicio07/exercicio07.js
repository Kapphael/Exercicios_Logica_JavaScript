/*Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.*/



let area = 0;
let vontade = '';
let acumuladora =0;
do{
    let comodo =parseInt(prompt('Qual comodo que deseja calcular'));        
    let largura =parseInt(prompt('Digite a largura:'));
    let comp =parseInt(prompt('Digite o comprimento:')); 
    area = largura * comp
    acumuladora = acumuladora + area;
    vontade = prompt('Deseja continuar??? (sim ou nao)');        

}while (vontade == 'sim');
alert('A area total dos comodos digitados é de '+acumuladora+' metros quadrado');