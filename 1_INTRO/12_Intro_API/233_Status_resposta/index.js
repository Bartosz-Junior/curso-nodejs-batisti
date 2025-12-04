/*

    Adicionando status na resposta
        Os status podem ajudar no desenvolvimento da nossa aplicação
        exibindo mensagens de sucesso ou erro, por exemplo
        precisamos entre res e o método json definir um número de status HTTP
        isso é feito por meio do método status

*/

const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({
    extended:true
}))

app.use(express.json())

app.get('/', (req,res) => {
    res.status(200).json({message: 'Testando rota POST no POSTMAN!'})
})

app.post('/createproduct', (req,res) => {
    
    const name = req.body.name
    const price = req.body.price

    console.log(name, price)

    if(!name || !price) {
        res.status(422).json({message: `Nome ou Preço do produto inválido!`})

        return
    }

    res.status(201).json({message: `O produto ${name}, foi criado com sucesso!`})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`)
})