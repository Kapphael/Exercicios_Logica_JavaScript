// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.

let contadora;
let num = parseInt(prompt('Digite um número:'));
for ( contadora = 0; contadora <= 10; contadora++) {
 alert(num +' X '+ contadora +' = '+ num*contadora)
}
