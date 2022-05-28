/*Ler o nome de 2 times e o número de gols marcados na partida (para cada time). Escrever o nome
do vencedor. Caso não haja vencedor deverá ser impressa a palavra EMPATE.*/


let  Time1, Time2, Gols1, Gols2;
    
Time1=prompt("Digite o nome do primeiro time: ");
Gols1=parseInt(prompt("Digite o numero de gols feitos por ele: "));
Time2=prompt("Digite o nome do segundo time: ");
Gols2=parseInt(prompt("Digite o numero de gols feitos por ele: "));


if (Gols1 > Gols2) {
    alert('O time '+Time1+' ganhou a partida');        
} else if (Gols2 > Gols1) {
        alert('O time '+Time2+' ganhou a partida');  
    }else{
        alert('O jogo entre '+Time1+' e '+Time2+' terminou em empate');  
    }   