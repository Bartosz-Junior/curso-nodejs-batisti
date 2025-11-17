/*
    Relacionamentos
        Em bancos relacionais podemos criar relacionamentos entre as tabelas
        para concretizar isso no sequelize vamos precisar de dois Models, ou
        seja, precisamos criar mais um no projeto
        depois precisamos inserir um método de relacionamento em algum
        dos models que vai criar a relação
        após o sync uma coluna que faz a relação entre as tabelas será criada
        que representa a FOREIGN KEY.
        
*/

const express = require('express')
const {engine} = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')
const Address = require('./models/address')
const { FORCE } = require('sequelize/lib/index-hints')

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

app.post('/users/update', async (req,res) => {

    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newslleter = req.body.newsletter

    if(newslleter === 'on') {
        newslleter = true
    } else {
        newslleter = false
    }

    const userData = {
        id,
        name,
        occupation,
        newslleter,
    }

    await User.update(userData, {where: {id:id}})

    res.redirect('/')
})

app.get('/', async (req, res) => {
    const users = await User.findAll({raw:  true})

    console.log(users)

    res.render('home', { users: users})
})

conn
.sync()
//.sync({force: true})
.then(() => {
    app.listen(3000)
}).catch((err) => console.log(err));
