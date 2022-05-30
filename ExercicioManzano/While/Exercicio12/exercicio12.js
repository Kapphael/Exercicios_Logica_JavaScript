/*Elaborar um programa que efetue a leitura de valores positivos inteiros até que um valor negativo seja informado. Ao final devem ser apresentados o maior e o menor valores informados pelo usuário.*/


let maior=0;
    let menor=9999;
    let n = 1;
    
    
    while(n>0){
        n = parseInt(prompt('Informe um número: '));
        if (n>maior) {
            maior = n
        }
        if (n<menor) {
            menor = n
        }
   
    }


    alert('O Maior é '+maior + ' e o menor é '+menor);