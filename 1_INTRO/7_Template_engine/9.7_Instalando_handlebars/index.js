/*

    Instalando o Handlebars
        Vamos precisar instalar o Express e o handlebars
        para o correto funcionamento
        podemos também utilzar o Nodemon, para nos ajudar
        no index precisamos importar os pacotes instalados
        e também adicionar ao express a engine do Handlebars
        criaremos uma view no diretorio views, com a extensão
        handlebars
        utizamos o metodo render para enviar view para a requisição

*/

const express = require('express')
const {engine} = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home', { layout: false })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})