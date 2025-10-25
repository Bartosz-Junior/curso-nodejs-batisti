const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port =3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    res.render('home', {nome:'Edvaldo', tipoDeConta:'Premium'})
})

app.listen(3000, () =>{
    console.log(`Servidor rodando na porta ${port}.`);
});