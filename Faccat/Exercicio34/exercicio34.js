/* Faça um teste de mesa e complete o quadro a seguir para os seguintes valores:
|  X  |  Y  |  Z  | Resposta |
|  3  |  2  |  11 |    B     |
| 150 |  3  | 455 |    C     |
|  7  | -1  |  -2 |    A     |
| -2  |  5  |  -5 |    A     |
|  50 |  3  | 155 |    C     |


*/

let x, y, z,resposta;

x=parseInt(prompt("Informe o valor de X:"));
y=parseInt(prompt("Informe o valor de Y:"));

z = (x*y) +5;

if (z <= 0) {
    resposta = 'A';
}else if(z<=100){
    resposta = 'B';
}else{
    resposta = 'C';
}

alert(z +' , '+ resposta);