// Faça um algoritmo para ler: quantidade atual em estoque, quantidade máxima em estoque e
// quantidade mínima em estoque de um produto. Calcular e escrever a quantidade média ((quantidade
// média = quantidade máxima + quantidade mínima)/2). Se a quantidade em estoque for maior ou igual
// a quantidade média escrever a mensagem 'Não efetuar compra', senão escrever a mensagem 'Efetuar
// compra'. 

let qntEstoque, qntMaxima, qntMinima,media;

qntEstoque=parseInt(prompt("Digite a quantidade em estoque"))
qntMaxima=parseInt(prompt("Digite a quantidade máxima em estoque"))
qntMinima=parseInt(prompt("Digite a quantidade minima em estoque"))

media=(qntMaxima+qntMinima)/2

alert("Média: "+media)

if (qntEstoque>=media) {
    alert("Não efetuar compra")
}else{
    alert("Efetuar compra")
}