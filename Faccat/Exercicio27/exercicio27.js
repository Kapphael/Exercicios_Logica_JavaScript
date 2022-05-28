// Ler um valor e escrever se é positivo, negativo ou zero.

let num

num = parseInt(prompt("Digite um número"))

if (num < 0) {
    alert("negativo")
} else {
    if (num > 0) {
        alert("Positivo")
    } else {
        alert("é 0")
    }
}