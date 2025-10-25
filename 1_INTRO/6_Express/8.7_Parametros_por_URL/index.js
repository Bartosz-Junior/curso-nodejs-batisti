/*

    Parametros por URL
        Podemos resgatar os parametros da URL por meio do REQ
        acessamos req.params.<nome>
        onde nome deve ser o que esta definido na URL do express
        que fica desta forma: /users/:id
        neste caso estariamos buscando o usuario no banco de dados pelo id
        e o parametro vem pela URL.

*/

const express = require('express')
const path = require('path')
const port = 3000
const pathBase = path.join(__dirname, 'templates')
const app = express()


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