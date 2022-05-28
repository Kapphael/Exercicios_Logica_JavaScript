/*Ler 3 valores (A, B e C) representando as medidas dos lados de um triângulo e escrever se formam
ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor que a soma
dos outros 2 lados.*/
 
 
 
 let Lado1, Lado2, Lado3;
 
    Lado1=parseInt(prompt("Digite o primeiro lado: "));
    Lado2=parseInt(prompt("Digite o segundo lado:"));
    Lado3=parseInt(prompt("Digite o terceiro lado:"));
    

    if (Lado1 < (Lado2 + Lado3)) {
        if (Lado3 < (Lado1 + Lado2)) {
            if (Lado2 < (Lado1 + Lado3)) {
                alert('Forma um triâgulo');
            }else{
                alert('Não forma um triângulo');
            }
        }else{
            alert('Não forma um triângulo');
        }   
    }else{
        alert('Não forma um triângulo');
    }