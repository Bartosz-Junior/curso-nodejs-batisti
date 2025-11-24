/*

    Enviando dados editados
        Após editar os dados na página de edit, temos que enviar os dados alterados para o banco
        vamos criar uma nova função no controller que processa o que veio do form
        esta mesma função chama o model e executa a função de update
        redirecionando o usuário para a página de TASKS.

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