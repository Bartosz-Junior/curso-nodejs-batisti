/*

    Passando dados para a view
        Vamos passar os dados por meio do método render
        enviamos um objeto com chaves e valores
        e isso nos possibilita acessar estes dados no template
        vamos utilizar a sintaxe de {{{dado}}}
        e o dado será impresso   

*/


const express = require('express')
const {engine} = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "Edvaldo",
        surname:"Junior",
        age:"30",
    }

    res.render('home', {user:user})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})