let total,brancos, nulos, validos, Pvalidos, Pnulos, Pbrancos;
        
brancos=parseInt(prompt("Digite o número de votos brancos: "))
nulos=parseInt(prompt("Digite o número de votos nulos: "))
validos=parseInt(prompt("Digite o número de votos válidos: "))
total=parseInt(validos+brancos+nulos)
Pvalidos=parseFloat( validos*100/total)
Pnulos=parseFloat( nulos*100/total)
Pbrancos=parseFloat( brancos*100/total)
alert("A porcentagem de votos validos foi: "+Pvalidos )
alert("A porcentagem de votos nulos foi: "+Pnulos )
alert("A porcentagem de votos brancos foi: "+Pbrancos )