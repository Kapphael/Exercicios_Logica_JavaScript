/*Elaborar um programa que efetue a leitura de três valores inteiros (representados pelas variáveis A, B e C) e apresente como resultado final o valor da soma dos quadrados dos três valores lidos.*/

let a = parseInt(prompt('Digite um valor: '));
let b = parseInt(prompt('Digite mais um valor: '));
let c = parseInt(prompt('Digite outro valor: '));
    
a = a * a;
b = b * b;
c = c * c;
soma = a + b + c;
alert('A soma dos quadrados dos números inseridos é: '+ soma);