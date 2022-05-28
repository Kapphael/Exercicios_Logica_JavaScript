// Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente. 

let num1,num2;



num1=parseInt(prompt("Digite um número"))
num2=parseInt(prompt("Digite outro número"))

if (num1<num2) {

    alert(num1+","+num2)
    
}else{

    alert(num2+","+num1)
}