/*

    Editar dados primeiro passo
        Para editar algum dado temos antes alguns preparos a realizar
        primeiramente vamos resgatar o dado, como na aula anterior
        e normalmente preenchemos o formulário de dados com os dados
        que foram resgatados(SELECT)
        isso faz com que o usuário lemre dos dados cadastrados e possa escolher
        o que editar
        
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

app.get('/books/:id', (req,res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ID = ${id}`

    conn.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('book', { book })
    })
})

app.get('/books/edit/:id', (req,res) => {

    const id = req.params.id

    const sql = `SELECT * FROM books WHERE ID = ${id}`

    conn.query(sql, function(err, data) {
        if(err) {
            console.log(err)
            return
        }

        const book = data[0]

        res.render('editbook', { book })
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
