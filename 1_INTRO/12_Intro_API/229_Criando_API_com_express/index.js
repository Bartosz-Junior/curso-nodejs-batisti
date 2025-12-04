/*

    Criando uma API com Express
        Para criar uma API com express teremos uma tarefa bem siimples se comparada a 
        estrutura com o Handlebars
        basta instalar o express, ele fara tudo sozinho neste ponto.
        depois criaremos uma rota que responde em JSON, este é o dado de comunicação entre 
        a aplicação e a API.
        É importante definir o verbo correto, como GET ou POST por exemplo.

*/

const express = require('express')
const { urlencoded } = require('express')
const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extends: true
    })
)

app.use(
    express.json()
)

//Rotas - endpoints
app.get('/', (req, res) => {

    res.json({ message: 'Primeira rota criada com sucesso!!!!'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!!!`)
})
