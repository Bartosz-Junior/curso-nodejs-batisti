/*

    Salvando dados
        Agora é a hora de interagir com o banco
        ou seja, criar um vinculo entre um controller e um model
        criaremos uma nova função para tratar os dados e enviaremos para o banco
        como o sequelize tem alguns métodos prontos, o trabalho do nosso model fica mais
        simples

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