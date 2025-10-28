/*

    CSS com handlebars e express
        A inclusão de CSS no Handlebars é muito semelhante
        a que realizamos apenas com express
        precisamos definir a pasta dos arquivos estáticos
        e vamos linkar o CSS com o nosso layout em comum para todas as páginas
        isso torna possivel a estilização dos nossos projetos    

*/


const express = require('express')
const handlebars = require('express-handlebars')
const port = 3000
const app = express()

const hbs = handlebars.create({
    partialsDir: ['views/partials']
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/blogpost', (req,res) => {
    const post = {
        title:"Aprendendo JavaScript",
        category:"JavaScript",
        body:"Este artigo vai te ajudar a aprender Node.js",
        comments: 4
    }
    res.render('blogpost', {post})
})

app.get('/blog', (req,res) => {
    const posts = [
        {
            title:"Aprender Node.js",
            category:"JavaScript",
            body:"Teste",
            comments:4
        },
        {
            title:"Aprender Java",
            category:"Java",
            body:"Teste",
            comments:13
        },
        {
            title:"Aprender Python",
            category:"Python",
            body:"Teste",
            comments:123
        },
    ]

    res.render('blog', {posts})
})

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