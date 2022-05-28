// Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os
// minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é
// de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

let inicial,fim,total,af;

inicial=parseInt(prompt("Digite o horário de inicio"))
fim=parseInt(prompt("Digite o horário do fim"))

total=fim-inicial

if (total>0) {
    alert("A partida de Xadrez durou: "+total)
}else{
    af=total+24
    alert("A partida de Xadrez durou: "+af)
}


