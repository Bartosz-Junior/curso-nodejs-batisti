/*

    Instalando o Sequelize
        Para instalar o Sequelize utilizamos o pacote sequelize
        e para conectar precisamos passar os mesmos dados que no outro
        pacote: banco, usuario e senha
        instanciamos a classe Sequelize
        é possivel chegar a conexão com o método authenticate
        
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
