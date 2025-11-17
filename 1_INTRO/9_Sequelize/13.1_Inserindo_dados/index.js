/*

    Inserindo dados
        Para inserir um dado vamos precisar do Model que criamos, ou seja,
        importar ele no arquivo de execução do comando
        o método a ser utilizado é o create
        ele leva como parametro todos os campos, e insere o registro na tabela.
        
*/

const express = require('express')
const {engine} = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/users/create', (req, res) => {
    res.render('adduser')
})

app.post('/users/create', (req, res) => {

    let name = req.body.name
    let occupation = req.body.occupation
    let newsletter = req.body.newsletter

    if(newsletter === 'on') {
        newsletter = true
    } else {
        newsletter = false
    }

    User.create({name, occupation, newsletter})

    res.redirect('/')
})

app.get('/', (req, res) => {
    res.render('home')
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err));
