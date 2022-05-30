/*Elaborar um programa que efetue a leitura sucessiva de valores numéricos e apresente no final o total do somatório, a média aritmética e o total de valores lidos. O programa deve fazer as leituras dos valores enquanto o usuário estiver fornecendo valores positivos. Ou seja, o programa deve parar quando o usuário fornecer um valor negativo. Não se esqueça que o usuário pode entrar como primeiro número um número negativo, portanto, cuidado com a divisão por zero no cálculo da média.*/

let contador  = 0;
    let soma = 0;
    let n = 0;
    let md = 0;

    do{
        soma = soma + n;
        contador++
        n = parseInt(prompt("Entre com um número"));
        md = soma/(contador -1)
    }while (n>0);
    alert('A soma é '+soma+' para isso foram digitados '+contador+' números, com um negativo ('+n+') e com uma media de '+md);