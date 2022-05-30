/*Elaborar um programa que efetue a leitura de três valores inteiros (representados pelas variáveis A, B e C) e apresente como resultado final o valor do quadrado da soma dos três valores lidos.*/

let a = parseInt(prompt('Escreva o primeiro número: '));
let b = parseInt(prompt('Escreva o segundo número: '));
let c = parseInt(prompt('Escreva o terceiro número: '));
    
    
let soma = a + b + c;
let total = soma * soma

alert('O quadrado da soma dos três valores é: '+ total);