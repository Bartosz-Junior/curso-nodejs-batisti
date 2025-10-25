/*

    Enviando dados por POST
        Para enviar os dados vamos precisar criar um form e mandar os dados 
        via POST para alguma URL
        no express precisamos colocar alguns middlewares como o express.json
        para ler os dados  do body
        e também uma rota que vai receber estes dados, utilizando o método
        post do express

*/

const { BADRESP } = require('dns')
const express = require('express')
const path = require('path')
const port = 3000
const pathBase = path.join(__dirname, 'templates')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

app.get('/users/add', (req, res) => {
    res.sendFile(`${pathBase}/userform.html`)
})

app.post('/users/save', (req, res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`O nome do usuario é ${name} e sua idade é de ${age} anos.`)

    res.sendFile(`${pathBase}/userform.html`)
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    //Leitura da tabela users, resgatar um usuario do banco
    console.log(`Estamos buscando pelo usuario: ${id}`)
    res.sendFile(`${pathBase}/users.html`)
})


app.get('/', (req, res) => {

    res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, ()=> {

    console.log(`Servidor rodando na porta ${port}!`)
})

