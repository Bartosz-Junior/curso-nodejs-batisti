/*

    Testando Rota com Postaman
        Para acessar uma rota com o Postman, precisamos configurar o Client
        devemos inserir o verbo correto para a rota
        e também configurar o endpoint, que é o URL onde nossa rota foi estabelecida
        enviando a requisição, receberemos a resposta.

*/

const express = require('express')
const app = express()
const port = 3000

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req,res) => {
    res.json({message:'Testando o Postman!'})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})
