//Rodar o seguinte código no terminal: npm i

//Em seguida para rodar a aplicação rodar no terminal: node index.js

//Para rodar o código basta colocar a url e passar o json no body da requisição no seguinte formato: 

//{
//    "faturamentoDiario": [220.0, 210.0, 0.0, 200.0, 0.0, 190.0, 220.0, 200.0, 250.0, 0.0, 270.0, 0.0, 300.0, 310.0, 290.0, 0.0, 320.0, 330.0, 340.0, 0.0, 360.0, 0.0, 380.0, 370.0, 390.0, 400.0, 410.0, 0.0, 420.0, 430.0]
//}


const express = require('express')

const app = express()

app.use(express.json());

const PORT = 3000

app.post('/faturamento', (req, res) => {
    const {faturamentoDiario} = req.body

    const resultado = calcularEstatisticas(faturamentoDiario);

    res.json(`Menor valor de faturamento: R$ ${resultado.menorValor}, Maior valor de faturamento: R$ ${resultado.maiorValor}, Número de dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
})

function calcularEstatisticas(faturamento) {
    let menorValor = Number.MAX_VALUE;
    let maiorValor = Number.MIN_VALUE;
    let soma = 0;
    let diasComFaturamento = 0;

    faturamento.forEach(valor => {
        if (valor > 0) {
            if (valor < menorValor) menorValor = valor;
            if (valor > maiorValor) maiorValor = valor;
            soma += valor;
            diasComFaturamento++;
        }
    });

    const mediaMensal = soma / diasComFaturamento;
    let diasAcimaDaMedia = 0;

    faturamento.forEach(valor => {
        if (valor > mediaMensal) diasAcimaDaMedia++;
    });

    return {
        menorValor,
        maiorValor,
        diasAcimaDaMedia
    };
}




app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}!`)
})