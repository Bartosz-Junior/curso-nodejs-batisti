/*

    Integração do MySQL e Node.js
        Primeiramente vamos precisar instalar o driver, que é um pacote
        chamado mysql
        vamos instala-lo com o npm
        depois precisamos conectar ao nosso banco de dados
        vamos inserir informações como: host, user, password e o banco

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
