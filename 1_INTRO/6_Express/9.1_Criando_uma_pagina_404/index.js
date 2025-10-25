/*

    Criando uma página 404
        Para criar uma página 404, ou seja, quando o usuario acessa uma pagina que
        não existe
        basta criar um novo middleware abaixo de todas as rotas, que responde com este status
        e enviar um arquivo de template referente a esta pagina...

*/

const { BADRESP } = require('dns')
const express = require('express')
const path = require('path')
const port = 3000

const app = express()

const users = require('./users')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

//arquivos estáticos
app.use(express.static('public'))

const pathBase = path.join(__dirname, 'templates')

app.use('/users', users)

app.get('/', (req, res) => {

    res.sendFile(`${pathBase}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${pathBase}/404.html`)
})

app.listen(port, ()=> {

    console.log(`Servidor rodando na porta ${port}!`)
})

