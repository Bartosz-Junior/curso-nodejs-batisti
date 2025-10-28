/*

      Utilizando condicionais
        Utilizar uma estrutura condicional nos permite mais flexibilidade
        no layout
        podemos utilizar o IF no handlebars
        a sintaxe é {{#if algumacoisa}}...{{/if}}
        só imprime o que esta entre as condicionais, se o resultado
        dela for verdadeiro
        precisamos encaminhar o dado a ser validado pelo backend

*/


const express = require('express')
const {engine} = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: "Edvaldo",
        surname:"Junior",
        age:"30",
    }

    const auth = true

    res.render('home', {user:user, auth})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})