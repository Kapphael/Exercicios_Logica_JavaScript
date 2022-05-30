// Elaborar um programa que apresente como resultado o valor do fatorial dos valores ímpares situados na faixa numérica de 1 a 10.


let cont = 1
let num = 1
let fatorial = 0

for(cont = 1;cont <= 10; cont++){
    if(cont % 2 == 1){
        fatorial = 1
        num = cont
        do{
            fatorial = fatorial*num
            num = num-1
        }while(num>1)
        alert("o numero impar "+cont+" tem o fatorial de "+fatorial)
    }
}