/*

    Dando uma cara ao projeto
        Vamos aproveitar esse inicio de estrutura e criar um projeto completo
        em MVC
        primeiramente vamos dar alguns estilos iniciais
        e depois vamos voltar a outras partes da aplicação para avançar no nosso projeto

*/

const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const conn = require('./db/conn')
const Task = require('./models/Task')
const port = 3000

const tasksRoutes = require('./routes/tasksRoutes')

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.use(express.static('public'))

app.use('/tasks', tasksRoutes)

conn
    .sync()
    .then(() => {
        app.listen(port)
    })
    .catch((err) => console.log(err))