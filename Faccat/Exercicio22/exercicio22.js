// A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais
// de 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%.
// Escreva um algoritmo que leia o número de horas trabalhadas em um mês, o salário por hora e escreva
// o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas
// (considere que o mês possua 4 semanas exatas). 

let hrsTrab,salHora,hrExtra,salExtra,salTotal;

hrsTrab=parseInt(prompt("Digite as horas trabalhadas"))
salHora=parseFloat(prompt("Digite o salário por hora"))



if (hrsTrab>160) {
    hrExtra=hrsTrab-160
    salExtra=(hrExtra*salHora)*0.5
    salTotal=salHora*hrsTrab+salExtra
    alert("Salário total é: R$"+salTotal)
}else{
    salTotal=salHora*hrsTrab
    alert("Salário total é: R$"+salTotal)
}