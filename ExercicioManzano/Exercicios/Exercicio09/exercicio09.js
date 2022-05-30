/*Ler dois valores inteiros (variáveis A e B) e apresentar o resultado do quadrado da diferença do primeiro valor (variável A) pelo segundo valor (variável B).*/

let a = parseInt(prompt('Digite o primeiro número: '));
    let b = parseInt(prompt('Digite o segundo número: '));
    
    let dif = a - b;

    let resul = Math.pow(dif,2)
    

    alert('O quadrado da difereção entre ' + a + ' e '+ b +' é: ' + resul);