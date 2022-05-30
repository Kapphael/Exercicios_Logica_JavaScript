/*Elaborar um programa que possibilite calcular a área total de uma residência (sala, cozinha, banheiro, quartos, área de serviço, quintal, garagem, etc.). O programa deve solicitar a entrada do nome, a largura e o comprimento de um determinado cômodo. Em seguida, deve apresentar a área do cômodo lido e também uma mensagem solicitando do usuário a confirmação de continuar calculando novos cômodos. Caso o usuário responda “NAO”, o programa deve apresentar o valor total acumulado da área residencial.*/

let vontade ,acumuladora,comodo,area,largura,comp;

acumuladora = 0

while(vontade  != 'nao'){
    comodo = prompt("Qual comodo que deseja calcular");
    largura = parseInt(prompt("Informe a Largura: "));
    comp = parseInt(prompt("Informe a comprimento: "));
    area = largura * comp
    acumuladora = acumuladora + area
    vontade = prompt("Deseja continuar??? (sim ou nao)");
}

alert('A area total dos comodos digitados é de '+ acumuladora +' metros quadrado')