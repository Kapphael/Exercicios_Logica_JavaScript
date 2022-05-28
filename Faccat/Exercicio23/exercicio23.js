let nome, sexo,peso,altura;

nome=prompt("Digite seu nome")
sexo=prompt("Digite seu sexo 'M' para masculino e 'F' para feminino")
altura=parseFloat(prompt("Digite sua altura"))

if (sexo= "M" ) {
    peso=(72.7*altura)-58
    alert(nome+" seu peso ideal é: "+peso)
}else{
    peso=(62.1*altura)-44.7
    alert(nome+" seu peso ideal é: "+peso)
}