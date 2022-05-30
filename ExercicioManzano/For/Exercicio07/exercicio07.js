/*Apresentar os resultados das potências de 3, variando do expoente 0 até o expoente 15. Deve ser considerado que qualquer número elevado a zero é 1, e elevado a 1 é ele próprio. Observe que neste exercício não pode ser utilizado o operador de exponenciação do portuguol (^).*/


for (let contadora = 0; contadora <= 15; contadora++) {
    let result = Math.pow(contadora,3)
 alert(contadora + ' elevado a 3 é igual a: '+ result)
}
