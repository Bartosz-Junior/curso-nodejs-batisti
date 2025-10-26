/*

    Criando layouts
        Podemos criar layouts para reaproveitar código entre páginas
        vamos criar uma pasta chamada layouts em views
        e nela criamos o template que será repetido
        colocamos uma tag especial {{{body}}}
        para que neste local o corpo do site seja inserido
        em todas as nossas views aagora o layout repetido.

*/


const express = require('express')
const {engine} = require('express-handlebars')
const port = 3000
const app = express()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})