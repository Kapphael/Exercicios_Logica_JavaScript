// Ler 3 valores (considere que não serão informados valores iguais) e escrever a soma dos 2
// maiores.


    
    let num1,num2,num3,soma;

    num1=parseInt(prompt("Informe o primeiro número: "));
    num2=parseInt(prompt("Informe o segundo número: "));
    num3=parseInt(prompt("Informe o terceiro número: "));
    
    if (num1 > num2 && num1 > num3){
        if (num2 > num3){
            soma = num1 + num2
            alert('A soma dos dois maiores números é '+ soma);
        }else{
            soma = num1 + num3
            alert('A soma dos dois maiores números é '+ soma);

        } 
    }else if (num2 > num1 && num2 > num3) {
        if (num3 > num1){
            soma = num2 + num3
            alert('A soma dos dois maiores números é '+ soma);
        }else{
            soma = num2 + num1
            alert('A soma dos dois maiores números é '+ soma);

        }
    }else if (num3 > num1 && num3 > num2) {
        if (num1 > num2){
            soma = num3 + num1
            alert('A soma dos dois maiores números é '+ soma);

        }else{
            soma = num3 + num2
            alert('A soma dos dois maiores números é '+ soma);

        }
    }

