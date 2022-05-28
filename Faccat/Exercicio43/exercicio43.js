// Faça um teste de mesa e complete o quadro a seguir para os seguintes valores das variáveis:

/*|               Variáveis                     |
  |a| b| C|               Mens                  |
  |1| 2| 3|  Não e possível formar um triângulo |
  |3| 4| 5|  Triângulo Escaleno                 |
  |2| 2| 4|  Não e possível formar um triângulo |
  |4| 4| 4|  Triângulo Equilátero               |
  |5| 3| 3|  Triângulo Isósceles                |
*/




let a,b,c,mens;

a=parseInt(prompt("Digite o valor:"));
b=parseInt(prompt("Digite o valor:"));
c=parseInt(prompt("Digite o valor:"));


if ((a < b+c) && (b < a+c) && (c <a+b) ) {
    if ((a==b) && (b==c)) {
        mens = "Triângulo Equilátero"
        alert(mens)
    } else if ((a==b) || (b==c) || (a==c)) {
        mens = "Triângulo Isósceles"
        alert(mens)
    } else {
        mens = "Triângulo Escaleno"
        alert(mens)
    }
} else{
    mens = "Não e possível formar um triângulo"
    alert(mens)
}   