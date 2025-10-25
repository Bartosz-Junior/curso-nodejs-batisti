/*
    Módulo FS
        O módulo fs(File System) serve para trabalhar com arquivos e diterorios
        este é também um core module
        podemos ler e escrever em arquivos, por exemplo.
        Uma utilização interessante é logs do sistema.
*/

const fs = require('fs')
const http = require('http')
const port = 3000
const server = http.createServer((req, res) => {
    fs.readFile('mensagem.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
