// Elaborar um programa que efetue a leitura de 10 valores numéricos e apresente no final o total do somatório e a média aritmética dos valores lidos.


let num,result;
let cont = 0;
let acumulador = 0;

while(cont <10){
    num = parseInt(prompt('Informe um numero: '));
    acumulador = acumulador+num
    cont++;

}
result = acumulador/cont;
alert('A soma dos '+ cont+' numeros é igual a '+acumulador+ ' e divisao aritmetica é de '+ result);
