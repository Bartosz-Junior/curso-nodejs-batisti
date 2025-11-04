/*

    Criando um Model
        Para criar um Model temos que instanciar uma classe que representará
        uma tabela
        um Model Use cria uma nova tabela chamada users
        colocamos os campos e os tipos dele como propriedades do model
        futuramente ele será utilizado para as operações entre aplicações
        e banco
        o metodo sync faz a criação das tabelas baseada nos models
        
*/

const express = require('express')
const {engine} = require('express-handlebars')
const conn = require('./db/conn')

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

app.get('/', (req, res) => {
    res.render('home')
})

 app.listen(3000, function(err) {
    if(err){
        console.log(err)
    }

    console.log('Servidor rodando na porta 3000!')
 })
