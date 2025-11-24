/*

    Criando o Model
        Vamos criar nosso Model dentro da pasta Models
        precisamos também sincronizar para criar a tabela, então
        vamos importar no index.js
        este é o primeiro passo do nosso MVC, declarando uma entidade
        que faz parte da regra de negocios

*/

const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const Task = require('./models/Task')
const port = 3000

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use(express.static('public'))

conn
    .sync()
    .then(() => {
        app.listen(port)
    })
    .catch((err) => console.log(err))