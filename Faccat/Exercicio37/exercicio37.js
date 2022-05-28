/*Se o cliente comprar mais de 8 Kg em frutas ou o valor total da compra ultrapassar R$ 25,00, receberá
ainda um desconto de 10% sobre este total. Escreva um algoritmo para ler a quantidade (em Kg) de
morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente. */


let totMorango, totMaca, valCompra, valFinal, morangoKg, macaKg, totQuilos
    
morangoKg=parseInt(prompt("Digite o valor em Kg de Morangos comprados: "));
macaKg=parseInt(prompt("Digite o valor em Kg de Maças compradas: "));


totQuilos = morangoKg + macaKg
// Morango
if (morangoKg <= 5) {
    totMorango = morangoKg * 2.5
} else if (morangoKg > 5) {
    totMorango = morangoKg * 2.2
}

// MAÇAS
if (macaKg <= 5) {
    totMaca = macaKg * 1.8
} else if (macaKg > 5) {
    totMaca = macaKg * 1.5
}

valCompra = totMorango + totMaca;

if (totQuilos > 8 || valCompra > 25) {
    valFinal = valCompra - (valCompra * 10/100);
    alert('O valor total que o cliente irá pagar é: R$ '+ valFinal.toFixed(2));
} else {
    alert('O valor total que o cliente irá pagar é: R$ '+ valCompra.toFixed(2));        
}