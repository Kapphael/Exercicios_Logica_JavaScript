/*Escreva um algoritmo que leia o número de litros vendidos e o tipo de combustível (codificado da
seguinte forma: A-álcool, G-gasolina), calcule e imprima o valor a ser pago pelo cliente sabendo-se
que o preço do litro da gasolina é R$ 3,30 e o preço do litro do álcool é R$ 2,90. */

let a,g, combustivel,qtd, valPago;
    
    combustivel=prompt("Tipo de combustivel, a para alcool e g para gasolina: ");
    qtd=parseInt(prompt('Quantidade de combustivel(alcool) em litos:'));
    
    if (combustivel == 'a') {
        
        if (qtd<=20) {
            valPago = (29/10)*qtd - (qtd*3/100);
            alert( 'Valor a pagar: R$'+valPago);
        } else {
            valPago = (29/10)*qtd - (qtd*5/100);
            alert('Valor a pagar: R$' + valPago);
        }
    } else {
        if (qtd <=20) {
            valPago = (33/10)*qtd - (qtd*4/100);
            alert('Valor a pagar: R$' + valPago);
        } else {
            valPago = (33/10)*qtd - (qtd*6/100)
            alert('Valor a pagar: R$' + valPago);
        }
        
    }