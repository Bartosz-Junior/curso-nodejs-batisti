/*

    Utilizando o with
        O with nos permite abstrair um objeto
        ou seja, podemos acessar as propriedades sem nos 
        referenciarmos sempre ao objeto antes
        a sintaxe é: {{#with objeto}} ... {{/with}}
        desta maneira nosso código fica ainda mais simples.

*/


const express = require('express')
const {engine} = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/post', (req,res) => {
    const post = {
        title:"Aprendendo JavaScript",
        category:"JavaScript",
        body:"Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    }
    res.render('blogpost', {post})
},
)

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