// Apresentar os resultados de uma tabuada de multiplicar (de 1 até 10) de um número qualquer.


let contador,num,result;
  

contador=1
num = parseInt(prompt('Digite um número: '));

while(contador <11){
    result = num*contador;
    alert(num+' X '+ contador+' = '+ result);
    contador++;

}
