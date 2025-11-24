/*

    Criando as rotas
        Criaremos as rotas com ajuda do router
        onde cada arquivo será responsável por um controller
        e em cada rota vamos utilizar uma das funções de controller
        por isso vamos importar o controller responsável pela lógica das
        rotas
        o router precisa ser importado no index da aplicação

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