/*Elaborar um programa que apresente os valores de conversão de graus Celsius em Fahrenheit, de 10 em 10 graus, iniciando a contagem em 10 graus Celsius e finalizando em 100 graus Celsius. O programa deve apresentar os valores das duas temperaturas. A fórmula de conversão é F = 9C + 160/5*/


let f;
let c = 10;

while(c <= 100){    
    f = ((9*c + 160)/5)
    alert(c +' graus convertidos em Fahrenheit é igual a '+ f);
    c = c + 10
}
