//Rodar o seguinte código no terminal: npm i

//Em seguida para rodar a aplicação rodar no terminal: node index.js

//Para rodar o código basta colocar a string desejada no parâmetro ex: http://localhost:3000/TesteDeProgramacao

const express = require('express')

const app = express()

const PORT = 3000

app.get('/:string', (req, res) => {
    
    let resultado = '';
    let str =  req.params.string
    for (let i = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }

    res.send(resultado)
})


app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}!`)
})