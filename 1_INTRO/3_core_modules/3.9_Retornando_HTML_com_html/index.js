/*
    Retornando HTML com html
        Para retornarmos um HTML precisamos implementar mais
        recursos
        podemos adicionar um status code no retorno, com a 
        propriedade statuscode
        mudar os headers para text/html
        e retornar o html pelo método end do html
*/

const http = require('http')
const port = 3000
const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Contenty-typo', 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com HTML</h1>')
    
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})