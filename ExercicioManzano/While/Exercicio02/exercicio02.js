// Apresentar o total da soma obtida dos cem primeiros números inteiros (1+2+3+4+...+98+99+100)


let Acumulador = 0 ;
let contador= 1 ;

while(contador <=100 ){
    Acumulador = Acumulador+contador;
    contador++;
}
alert('A soma é :'+Acumulador);