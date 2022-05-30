// Digite 3 numeros para calcularmos a Formula de BASKHARA

let A,B,C;
let DELTA,x1,x;
let calcDELTA1,calcDELTA2,calcRU1,calcRU2,pa1,pa2;

A=parseInt(prompt("Informe o valor do A: "));
B=parseInt(prompt("Informe o valor do B: "));
C=parseInt(prompt("Informe o valor do C: "));
   
pa1 = B*B;
pa2 = 4*A*C;
DELTA = pa1-pa2;

if (DELTA < 0) {
    alert('Não existe raiz real');
}
if (DELTA == 0) {
    x1 = -B/2*A;
    alert('O valor de X seria: '+x1);
}
if (DELTA>0) {
    calcDELTA1 = -B + Math.sqrt(DELTA);
    calcDELTA2 = -B - Math.sqrt(DELTA);
    calcRU1 = 2*A;
    calcRU2 = 2*A;
    x1= calcDELTA1/calcRU1;
    x2= calcDELTA2/calcRU2 ;
    alert('O valor de X1 seria ' + x1.toFixed(2)+ ' e o valor de X2 seria '+ x2.toFixed(2));
}