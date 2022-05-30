/*Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula: VOLUME <- COMPRIMENTO * LARGURA * ALTURA.*/

let comprimento = parseInt(prompt('O valor do comprimento: '));
   let largura = parseInt(prompt('O valor de largura: '));
   let altura = parseInt(prompt('O valor de altura: '));
    
   let volume = comprimento * largura *altura
    alert('A caixa tem ' + volume + ' metros cubicos de volume');