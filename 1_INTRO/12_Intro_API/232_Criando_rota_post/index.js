/*

    Criando uma rota de POST
        Para criar a rota POST vamos utilizar o método POST do express
        podemos extrair os dados da requisição , acessando req.body
        da mesma maneira que no GET, podemos retornar uma resposta como JSON
        pela API

*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.get('/', (req,res) => {
    res.json({message: 'Testando rota POST no POSTMAN!'})
})

app.post('/createproduct', (req,res) => {
    
    const name = req.body.name
    const price = req.body.price

    console.log(name, price)

    if(!name || !price) {
        res.json({message: `Nome ou Preço do produto inválido!`})
    }

    res.json({message: `O produto ${name}, foi criado com sucesso!`})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})