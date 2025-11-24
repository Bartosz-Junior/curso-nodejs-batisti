/*

    Removendo dados
        Para remover um dado vamos utilzar o método destroy do sequelize
        condicionado por um POST que vai até a rota determinada pelo router
        ativando uma função do controller
        e depois direcionamos para a home novamente.

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