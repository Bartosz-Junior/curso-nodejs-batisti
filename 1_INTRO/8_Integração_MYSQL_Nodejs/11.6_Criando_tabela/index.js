/*

    Criando a nossa tabela
        Para manipular os dados do sistema vamos precisar criar uma tabela
        faremos isso via Workbech, criando uma tabela chamada books
        onde vamos cadastrar livros
        estes livros vão precisar de duas informações: titulo e número de paginas

*/

const express = require('express')
const {engine} = require('express-handlebars')
const mysql = require('mysql')

const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

conn.connect(function(err) {
    if(err) {
        console.log(err)
    }

    console.log('Conectou ao MySQL!')

    app.listen(3000, () => {
        console.log('Servidor rodando na porta 3000...')
    })
})
