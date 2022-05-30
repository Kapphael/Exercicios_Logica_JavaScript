/*Elaborar um programa que apresente o resultado inteiro da divisão de dois números quaisquer. Para a elaboração do programa, não utilizar em hipótese alguma o conceito do operador aritmético DIV. A solução deve ser alcançada com a utilização de looping. Ou seja, o programa deve apresentar como resultado (quociente) quantas vezes o divisor cabe no dividendo.*/


let dividendo, divisor, quociente = 0,
    i, resto;

dividendo = parseInt(prompt("Digite o dividendo: "))
divisor = parseInt(prompt("Digite o divisor: "))

i = divisor
do {
    i = i + divisor
    quociente++
} while (i <= dividendo)

resto = dividendo - (i - divisor)

alert(dividendo + " dividido por " + divisor + " = " + quociente + " (resto é = " + resto + ")")