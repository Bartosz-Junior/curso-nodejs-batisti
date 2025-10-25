/*

    Primeiros passos:
        O setup inicial do express é simples, mas preecisamos seguir alguns passos
        omportar o Express e invoca-lo
        Definir uma porta base para a aplicação
        criar uma rota(URL que será acessada)
        executar o metodo listen na porta especificada

*/

const express = require('express')
const port = 3000
const app = express()

app.get('/', (req, res) => {

    res.send('Olá mundo!!!')
})

app.listen(port, () => {

    console.log(`App rodando na porta ${port}`)
})