/*Faça um algoritmo para ler as 3 notas obtidas por um aluno nas 3 verificações e a média dos
exercícios que fazem parte da avaliação. Calcular a média de aproveitamento, usando a fórmula abaixo
e escrever o conceito do aluno de acordo com a tabela de conceitos mais abaixo:

                               N1 + N2 * 2 + N3 * 3 + Média_dos_Exercícios
Média_de_Aproveitamento = ---------------------------------------------------------
                                                 7
*/    


let n1=parseInt(prompt("Digite a primeira nota: "));
let n2=parseInt(prompt("Digite a segunda nota: "));
let n3=parseInt(prompt("Digite a terceira nota: "));
let mdExercicio=parseInt(prompt("Digite a media de exercicios: "));

let mdAprov = (n1 + n2 * 2 + n3 * 3 + mdExercicio )/7;

if (mdAprov >= 9.0) {
    alert('Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito A'); 
} else if (mdAprov >= 7.5 && mdAprov < 9.0) {
    alert('Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito B'); 
}else if (mdAprov >= 6 && mdAprov < 7.5) {
    alert('Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito C'); 
}else {
    alert('Este aluno ficou com nota: '+ mdAprov.toFixed(2)+' e Conceito D'); 
}