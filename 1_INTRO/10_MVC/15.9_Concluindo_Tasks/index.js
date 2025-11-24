/*

    Concluindo tarefas
        Realizaremos uma ação no nosso sistema para completar ou descompletar as tarefas
        basicamente vamos criar uma rota de update que só atualiza o atributo DONE da Task
        precisamos de um form na lista para fazer o envio e também criar a rota

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