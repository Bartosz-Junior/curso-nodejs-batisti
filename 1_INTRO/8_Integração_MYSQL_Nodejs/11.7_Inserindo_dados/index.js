/*

    Inserindo Dados
        Para inserir dados no Banco de dados vamos precisar criar e executar uma query
        a query em si é uma string, seguindo os padrões do MySQL
        já para executar vamos utilizar o método query do pacote mysql
        e nesta aula faremos o uso da instrução INSERT, que insere dados...

*/

const express = require('express')
const {engine} = require('express-handlebars')
const mysql = require('mysql')

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

app.post('/books/insertbook', (req, res) => {
    
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title,pageqty) VALUES ('${title}', '${pageqty}')`

    conn.query(sql, function(err) {
        if(err) {
            console.log(err)
        }

        res.redirect('/')
    })
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
