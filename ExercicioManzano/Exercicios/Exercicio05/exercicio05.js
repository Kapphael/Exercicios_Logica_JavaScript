/*Ler dois valores para as variáveis A e B, e efetuar a troca dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresentar os valores trocados.*/

let C;
let A = parseInt(prompt('Digite o valor de A: '));
let B = parseInt(prompt('Digite o valor de B: '));

C = A
A = B
B = C

alert('O valor de A passa ser ' + A + ' e o valor de B passa a ser '+ B);