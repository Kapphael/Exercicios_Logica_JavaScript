// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100).


let acumulador = 0;
for (let num = 0;num <= 100; num++) {
    acumulador = acumulador + num;
}
alert('A soma é '+ acumulador);