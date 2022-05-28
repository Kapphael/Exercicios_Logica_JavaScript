let salario, reajuste, percentual, salarioFinal;
        
        salario=parseInt(prompt("Digite o salário mensal : "))
        reajuste=parseInt(prompt("Digite o percentual do reajuste: "))
        percentual=parseFloat( (reajuste/100)*salario)
        salarioFinal=parseFloat( salario+percentual)
        
        alert("O valor do novo salário é: "+ salarioFinal)
       