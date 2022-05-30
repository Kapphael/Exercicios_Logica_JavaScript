/*Elaborar um programa que efetue a leitura de 15 valores numéricos inteiros e no final apresente o total do somatório da fatorial de cada valor lido.*/


let contador = 1;
let acumulador = 1;
let soma = 0;
let fator;
do{
    fator = parseInt(prompt("Digite 15 valores diferentes. " +contador+"ª valor."));
    do {
        acumulador = acumulador * fator
        fator--
            if (fator == 1) {
                soma = soma + acumulador
                acumulador = 1
            }     
    } while (fator >0);
    contador++
}while (contador <=15);

alert('A soma dos fatoriais é de '+ soma) ;