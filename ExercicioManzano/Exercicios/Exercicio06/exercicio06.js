/*Ler quatro valores numéricos inteiros e apresentar o resultado das adições e das multiplicações utilizando-se o conceito de propriedade distributiva para a máxima-combinação possível entre as quatro deverá ser combinada a variável A com a variável B, a variável A com a variável C, a variável A com a variável D. Depois será necessário combinar a variável B com a variável C e a variável B com a variável D e por fim a variável C será combinada com a variável D.*/

let A = parseInt(prompt('O valor de A: '));
  let B = parseInt(prompt('O valor de B: '));
  let C = parseInt(prompt('O valor de C: '));
  let D = parseInt(prompt('O valor de D: '));
    
  let SOMAAB = A + B;
  let SOMAAC = A + C;
  let SOMAAD = A + D;
  let SOMABC = B + C;
  let SOMABD = B + D;
  let SOMADC = D + C;

  let PRODUTOAB = A * B;
  let PRODUTOAC = A * C;
  let PRODUTOAD = A * D;
  let PRODUTOBC = B * C;
  let PRODUTOBD = B * D;
  let PRODUTODC = D * C;

  alert('Adição \n'+
   'A soma  '+ A+ '+'+ B+ ' é: '+ SOMAAB +'\n'+
   'A soma  '+ A+ '+'+ C+ ' é: '+ SOMAAC +'\n'+
   'A soma  '+ A+ '+'+ D+ ' é: '+ SOMAAD +'\n'+
   'A soma  '+ B+ '+'+ C+ ' é: '+ SOMABC +'\n'+
   'A soma  '+ B+ '+'+ D+ ' é: '+ SOMABD +'\n'+
   'A soma  '+ C+ '+'+ D+ ' é: '+ SOMADC + '\n' 
  )

  alert(' E a Multiplicação \n'+
   'A Multiplicação  '+ A+ 'X'+ B+ ' é: '+ PRODUTOAB +'\n'+
   'A Multiplicação  '+ A+ 'X'+ C+ ' é: '+ PRODUTOAC +'\n'+
   'A Multiplicação  '+ A+ 'X'+ D+ ' é: '+ PRODUTOAD +'\n'+
   'A Multiplicação  '+ B+ 'X'+ C+ ' é: '+ PRODUTOBC +'\n'+
   'A Multiplicação  '+ B+ 'X'+ D+ ' é: '+ PRODUTOBD +'\n'+
   'A Multiplicação  '+ C+ 'X'+ D+ ' é: '+ PRODUTODC + '\n' 
  )