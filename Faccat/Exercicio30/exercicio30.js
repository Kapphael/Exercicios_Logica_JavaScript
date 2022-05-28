/*Ler 3 valores (considere que não serão informados valores iguais) e escrevê-los em ordem
crescente.*/ 

let num1,num2,num3;

num1=parseInt(prompt("Informe o primeiro número: "));
num2=parseInt(prompt("Informe o segundo número: "));
num3=parseInt(prompt("Informe o terceiro número: "));


if (num1 > num2 && num1 > num3){
    if (num2 > num3){
        alert('A Ordem é '+ num3+', '+ num2+', '+ num1);
    }else{
        alert('A Ordem é '+ num2+', '+ num3+', '+ num1);
    } 
}else if (num2 > num1 && num2 > num3) {
    if (num3 > num1){
        alert('A Ordem é '+ num1+', '+ num3+', '+ num2);
    }else{
        alert('A Ordem é '+ num3+', '+ num1+', '+ num2);
    }
}else if (num3 > num1 && num3 > num2) {
    if (num1 > num2){
        alert('A Ordem é '+ num2+', '+ num1+', '+ num3);
    }else{
        alert('A Ordem é '+ num1+', '+ num2+', '+ num3);
    }
}
