// Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles.

let num1,num2

num1=parseInt(prompt("Digite um número"))
num2=parseInt(prompt("Digite outro número"))

if (num1>num2) {

    alert(num1+" é maior que "+num2)
    
}else{

    alert(num2+" é maior que "+num1)
}