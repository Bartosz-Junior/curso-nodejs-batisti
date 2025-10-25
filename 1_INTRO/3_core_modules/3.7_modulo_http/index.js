/*
    O módulo HTTP
        Podemos criar um servidor HTTP com este módulo
        ou seja, receber uma requisição e enviar código
        HTML como resposta por exemplo
        vamos utilizar alguns métodos como CreateServer
        para criação do servidor
        e também listen para determinar a porta.
*/

const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {
    
    res.write('clique no link abaixo, seu Benicio!')
    res.write('https://www.roblox.com/pt')
    res.end()
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})