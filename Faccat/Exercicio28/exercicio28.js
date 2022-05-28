// Ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.

let num1, num2, num3;

num1 = parseInt(prompt("Digite um número"))
num2 = parseInt(prompt("Digite outro número"))
num3 = parseInt(prompt("Digite mais um outro número"))

if ((num1 > num2) && (num1 > num3)) {
    alert(num1 + " é maior ")
} else {
    if ((num2 > num1) && (num2 > num3)) {
        alert(num2 + " é maior ")
    } else {
        alert(num3+" é o maior ")
    }
}