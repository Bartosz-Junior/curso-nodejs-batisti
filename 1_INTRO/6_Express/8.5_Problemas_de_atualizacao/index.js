/*

    Problema de atualização
        Precisamos toda vez reiniciar o servidor para receber as atualizações isso 
        é muito custoso
        vamos então instalar o modulo Nodemon
        que a cada vez que o arquivo é salvo reinicia o projeto, facilintando nossa 
        vida
        vamos salvar como depedencia de desenvolvimento(--save-dev)

*/

const express = require('express')
const path = require('path')
const port = 3000
const app = express()
const pathBase = path.join(__dirname, 'templates')

app.get('/', (req,res) => {

    res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, () => {

    console.log(`O servidor esta rodando na porta ${port}`)
})
