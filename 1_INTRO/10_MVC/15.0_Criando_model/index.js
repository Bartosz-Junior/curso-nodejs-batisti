/*

    Criando o controller
        Vamos agora criar nosso controller, que ficara dentro da pasta
        constrollers
        será uma classe que contem as funções com a lógica de cada rota
        algumas só encaminharão as views, outras vão processar dados e passar
        para os Models
        por isso vamos importar o Model que o controller utiliza 

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