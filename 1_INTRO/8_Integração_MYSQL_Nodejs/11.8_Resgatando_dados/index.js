/*

    Resgatando os dados
        Para resgatar dados vamos precisar criar uma query que será um SELECT
        podemos escolher quais dados são retornados, determinando as colunas
        e podemos impri-los nas nossas views

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

//Rota para mostrar os livros cadastrados
app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books;"

    conn.query(sql, function(err, data) {
        if(err) {
        console.log(err)
        return
    }

    const books = data

    console.log(books)
    res.render('books', { books })
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
