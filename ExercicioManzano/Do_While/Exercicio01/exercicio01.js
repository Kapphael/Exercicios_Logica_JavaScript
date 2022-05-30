// Apresentar os quadrados dos números inteiros de 15 a 200.


let resultado;
let contador = 15;

do{
resultado = contador*contador;
alert('O resultado de '+contador+' ao quadrado é: '+resultado);
contador++;

}while (contador <= 200);