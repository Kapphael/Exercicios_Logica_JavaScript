/*Elaborar um programa que apresente como resultado o valor de uma potência de uma base qualquer elevada a um expoente qualquer, ou seja, de BE , em que B é o valor da base e E o valor do expoente. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).*/


let res = 1
let base = parseInt(prompt('Digite um valor para base:'));
let expo = parseInt(prompt('Digite um valor para o expoente:')); 
for (let cont = 1; cont <= expo; cont++) {
    res = res*base
    alert(base+' ^ '+cont+' = '+res)
    
} 