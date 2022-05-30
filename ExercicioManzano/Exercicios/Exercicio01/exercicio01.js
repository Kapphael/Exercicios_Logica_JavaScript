/*Ler uma temperatura em graus Celsius e apresentá-la convertida em graus Fahrenheit. A fórmula de conversão é: F((9* C + 160) / 5, sendo F a temperatura em Fahrenheit e C a temperatura em Celsius.*/

let C , F;
C = parseInt(prompt('Escreva a temperatura em Celsius: '));
F = (9*C+160)/5;

alert('Fazendo a conversao, '+C+' graus celsius sao equivalentes a '+F+' fahrenheit');