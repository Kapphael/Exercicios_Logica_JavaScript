/*Uma empresa quer verificar se um empregado está qualificado para a aposentadoria ou não. Para
estar em condições, um dos seguintes requisitos deve ser satisfeito:
 - Ter no mínimo 65 anos de idade.
 - Ter trabalhado no mínimo 30 anos.
 - Ter no mínimo 60 anos e ter trabalhado no mínimo 25 anos.
Com base nas informações acima, faça um algoritmo que leia: o número do empregado (código), o ano
de seu nascimento e o ano de seu ingresso na empresa. O programa deverá escrever a idade e o tempo
de trabalho do empregado e a mensagem 'Requerer aposentadoria' ou 'Não requerer'.*/


let RmEmpresa=parseInt(prompt("Digite o RM da empresa: "));
    let anoNasc=parseInt(prompt("Digite o ano de seu nascimento: "));
    let anoAtual=parseInt(prompt("Digite o ano em que estamos: "));
    let entroEmpresa=parseInt(prompt("Digite o ano que entrou na empresa: "));
    
   let tempoEmpresa = anoAtual - entroEmpresa;
   let idade = anoAtual - anoNasc;

    if (idade >= 65) {
        alert('O funcionario '+ RmEmpresa+' ja pode "Requerer aposentadoria" ');
    } else if (tempoEmpresa >= 30) {
        alert('O funcionario '+ RmEmpresa+' ja pode "Requerer aposentadoria" ');
    }else if (idade >= 60 && tempoEmpresa >= 25) {
        alert('O funcionario '+ RmEmpresa+' ja pode "Requerer aposentadoria" ');
    }else{
        alert('O funcionario '+ RmEmpresa+' ainda não pode "Requerer aposentadoria" ');

    }