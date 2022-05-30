/*Efetuar o cálculo da quantidade de litros de combustível gastos em uma viagem, utilizando-se um automóvel que faz 12 Km por litro. Para obter o cálculo, o usuário deverá fornecer o tempo gasto e a velocidade média durante viagem. Desta forma, será possível obter a distância percorrida com a fórmula DISTÂNCIA <- TEMPO* VELOCIDADE. Tendo o valor da distância, basta calcular a quantidade de litros de combustível utilizada na viagem com a fórmula: LITROS_USADOS+-DISTÂNCIA/12.O progra- ma deverá apresentar os valores da velocidade média, tempo gasto na viagem, a distância percorrida e a quantidade de litros utilizada na viagem.*/

let TempoViagem = parseInt(prompt('Digite o tempo da sua viagem (em horas): '));
    let Velocidade = parseInt(prompt('Digite a velocidade media do seu carro durante a viagem: '));
    let Distacia = TempoViagem * Velocidade
    let LitrosUsados = Distacia/12
    alert('Foram ' + LitrosUsados.toFixed(2) + ' litros usados na viagem');