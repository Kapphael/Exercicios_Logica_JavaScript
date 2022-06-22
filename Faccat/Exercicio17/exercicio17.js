// Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever
// uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o
// aluno é aprovado). Escrever também a média calculada. 



let n1,n2,media

n1=parseInt(prompt("Digite a nota da primeira avaliação: "))
n2=parseInt(prompt("Digite a nota da segunda avaliação: "))

media=(n1+n2)/2

if (media>=6) {
    alert("O aluno foi aprovado com a média: "+media)    
}else{
    alert("O aluno foi reprovado com a média: "+media)  
}
