/*Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.*/


let contador = 2;
let acumulador = 0;

do{
    if (contador % 2 == 0) {
        acumulador = acumulador + contador;
        
    }
contador++;
}while (contador <= 200);

alert('Esta é a soma '+acumulador);