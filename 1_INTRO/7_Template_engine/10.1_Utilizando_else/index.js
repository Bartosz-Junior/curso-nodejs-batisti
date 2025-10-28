/*

      Utilizando else
        O else é um complemento do if
      utilizamos no handlebars para a exibição de outra parte
      do layout, caso a condição seja falsa.
      Isso nos dá mais flexibilidade ainda
      a sintaxe é: {{#if alguma coisa}}... {{else}}... {{/if}}

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
    const aproved = false

    res.render('home', {user:user, auth, aproved})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})