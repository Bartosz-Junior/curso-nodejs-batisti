/*

    Editando itens
        O primeiro passo da edição é resgatar os daodos do item
        com isso podemos preencher o formulário para depois faer o 
        UPDATE
        vamos utilizar o método findOne, igual na rota de visualização
        e fzer o preenchimento do form na nossa nova view
        
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

app.get('/users/:id', async (req, res) => {
    const id = req.params.id

    const user = await User.findOne({ raw: true, where: {id: id}})

    res.render('userview', { user })
})

app.post('/users/delete/:id', async (req, res) => {
   const id = req.params.id

   await User.destroy({ where: { id:id }})

   res.redirect('/')
})

app.get('/users/edit/:id', async (req, res) => {
    const id = req.params.id
    
    const user = await User.findOne({raw: true, where: { id:id }})

    res.render('useredit', {user})
})

app.get('/', async (req, res) => {
    const users = await User.findAll({raw:  true})

    console.log(users)

    res.render('home', { users: users})
})

conn.sync().then(() => {
    app.listen(3000)
}).catch((err) => console.log(err));
