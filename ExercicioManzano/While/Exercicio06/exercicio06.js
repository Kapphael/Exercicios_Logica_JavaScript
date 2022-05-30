/*Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE , em que B é o valor da base e E o valor do expoente.*/


let result=1;
let cont=1
let base = parseInt(prompt('Informe a base: '));
let expo = parseInt(prompt('Informe o expoente: '));

while(cont <= expo){
    result = result*base;
    cont++;   
}
alert('O resultado é : '+result);