/*Apresentar todos os números divisíveis por 4 que sejam menores que 200. Para verificar se o número é divisível por 4, efetuar dentro da malha a verificação lógica desta condição com a instrução se, perguntando se o número é divisível; sendo, mostre-o; não sendo, passe para o próximo passo. A variável que controlará o contador deve ser iniciada com o valor 1.*/

let contador = 1;

    do{
    
        if (contador % 4 == 0) {
            alert(contador)
        }
        contador ++;
    }while (contador <= 200);