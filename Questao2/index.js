//Rodar o seguinte código no terminal: npm i

//Em seguida para rodar a aplicação rodar no terminal: node index.js

//Para rodar o código basta colocar o número desejado no parâmetro ex: http://localhost:3000/21

const express = require('express')

const app = express()

const PORT = 3000

app.get('/:numero', (req, res) => {
    const num = req.params.numero
    const validSeq = Fibonacci(num)

    if(validSeq == true)
    {
        res.send('Pertenca a sequência de Fibonacci!')
    }
    else
    {
        res.send('Não pertence a sequência de Fibonacci!')
    }
})

function Fibonacci(num) {
    let a = 0;
    let b = 1;
    let soma = a + b;

    if (num == 0 || num == 1) {
        return true;
    }

    while (soma <= num) {
        if (soma == num) {
            return true;
        }
        a = b;
        b = soma;
        soma = a + b;
    }

    return false;
}


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}!`)
})