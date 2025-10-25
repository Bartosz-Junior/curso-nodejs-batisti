/*

    Módulos de rotas
        Podemos unir várias rotas em um modulo, isso vai deixar nosso código
        mais organizado
        normalmente criamos uma pasta ou arquivo que contem estas rotas
        que representam uma entidade em comum, como users
        vamos utilizar um novo objeto chamado ROuter, e colocar as rotas nele
        depois precisamos exporta-lo e importar no arquivo principal.

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

const pathBase = path.join(__dirname, 'templates')

app.use('/users', users)

app.get('/', (req, res) => {

    res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, ()=> {

    console.log(`Servidor rodando na porta ${port}!`)
})

