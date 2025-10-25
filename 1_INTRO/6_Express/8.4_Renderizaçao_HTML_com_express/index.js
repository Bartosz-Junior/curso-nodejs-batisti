/*

    Renderização HTML
        Para enviar HTML como resposta utilizamos o método SendFile
        isso faz com que o arquivo seja renderizado no navegador
        precisamos acessar o arquivo por meio do diretorio base, isso requer o madulo path

*/

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {

    console.log(`O servidor esta rodando na porta ${port}`)
})