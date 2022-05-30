/*Calcular e apresentar o valor do volume de uma lata de óleo, utilizando a fórmula: VOLUME = 3.14159 * R ^ 2 * ALTURA.*/

let altura = parseInt(prompt('Escreva a altura da sua lata de oleo: '))
let Diametro = parseInt(prompt('Escreva o diâmetro da sua lata de oleo:  '))

let r = Diametro/2
let volume = 3.14159*(Math.pow(r,2))*altura

alert('O volume da sua lata é: ' + volume.toFixed(2));