let anos,meses, dias, anosX, mesesX, diasTotal;
        anos=parseInt(prompt("Digite quantos anos de vida tem: "))
        meses=parseInt(prompt("Digite quantos meses: "))
        dias=parseInt(prompt("Digite quantos dias: "))
        anosX=anos*365
        mesesX=meses*30
        diasTotal=mesesX+anosX+dias
        alert("Você tem: "+diasTotal+" dias de vida" )