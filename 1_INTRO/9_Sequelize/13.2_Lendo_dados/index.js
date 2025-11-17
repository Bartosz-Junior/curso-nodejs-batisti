/*

    Lendo dados
        Para ler os dados de uma tabela vamos utilizar o método fetchall
        que também requer o model, no nosso caso o User
        os dados vem em um objeto especial, para transformar em um array de
        objetos temos que inserir um parametro
        que é o raw como true
        
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

app.get('/', async (req, res) => {
    const users = await User.findAll({raw:  true})

    console.log(users)

    res.render('home', { users: users})
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err));
