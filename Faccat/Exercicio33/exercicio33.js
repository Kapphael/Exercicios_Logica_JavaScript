/*Ler dois valores e imprimir uma das três mensagens a seguir:
‘Números iguais’, caso os números sejam iguais
‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
‘Segundo maior’, caso o segundo seja maior que o primeiro.*/ 



let valor1, valor2;

    valor1=parseInt(prompt("Digite o primeiro valor: "));
    valor2=parseInt(prompt("Digite o segundo valor: "));
    
    if (valor1 == valor2) {
        alert('Numeros Iguais');        
    } else if(valor1 > valor2){
        alert('Primeiro número é Maior');
    } else{
        alert('Segundo número é Maior');
    }