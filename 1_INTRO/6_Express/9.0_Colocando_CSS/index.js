/*

    Colocando CSS
        Para inserir CSS nas páginas e arquivos estáticos vamos precisar de um 
        middleware
        que é o express.static
        precisamos colocar um diretorio base, que normalmente é o public
        e criar os estaticos a partir desta pasta
        no HTML podemos acessar o caminho relativo após a pasta definida e pronto.

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

app.listen(port, ()=> {

    console.log(`Servidor rodando na porta ${port}!`)
})

