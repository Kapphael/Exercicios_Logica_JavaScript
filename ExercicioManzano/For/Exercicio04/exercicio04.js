// Elaborar um programa que apresente no final o somatório dos valores pares existentes na faixa de 1 até 500.


let acumulador = 0;
    for (let contadora = 2; contadora <= 500 ; contadora+= 2) {
        acumulador = acumulador + contadora 
    }
    alert('A soma é de '+ acumulador);