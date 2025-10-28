/*

    Estrutura de repetição
        As estruturas de repetição no Handlebars são feitas pelo
        operador each
        A sintaxe é {{#each}} ... {{/each}}
        em um array podemos chamar os itens com: {{this}}
        então cada um dos itens é acessado na view
        como o Handlebars prega um template mais limpo, devemos 
        mandar apenas o necessário para o front-end

*/


const express = require('express')
const {engine} = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {
    
    const items = ["item a", "item b", "item c"]

    res.render('dashboard', {items})
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
    console.log(`🌏🚀 Servidor rodando na porta ${port}`)
})