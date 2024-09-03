//Rodar o seguinte código no terminal: npm i

//Em seguida para rodar a aplicação rodar no terminal: node index.js

//Para rodar o código basta colocar a url do método get parâmetro: http://localhost:3000/faturamento

const express = require('express')

const app = express()

const PORT = 3000

app.get('/faturamento', (req, res) => {
    const num = calcularPercentuais(faturamentoPorEstado)
    res.send(num)
})

const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

function calcularPercentuais(faturamentoPorEstado) {

    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

    const percentuais = {};
    for (const [estado, faturamento] of Object.entries(faturamentoPorEstado)) {
        percentuais[estado] = ((faturamento / totalFaturamento) * 100).toFixed(2) + '%';
    }

    return percentuais;
}


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}!`)
})