/*Efetuar o cálculo e a apresentação do valor de uma prestação em atraso, utilizando a fórmula: PRESTAÇÃO + VALOR + (VALOR (TAXA/100) * TEMPO).*/

let valor = parseInt(prompt('O valor da Parcela: '));
let taxa = parseInt(prompt('Digite a taxa de Juros: '));
let duracao = parseInt(prompt('Digite a duração dessa prestação: '));

let prestacao = valor + (valor*(taxa/100)*duracao)

alert('O valor da prestação sera de: ' + prestacao);