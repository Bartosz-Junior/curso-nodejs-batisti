/*
    Escrevendo em arquivos
        Podemos criar e escrever em arquivos também, utilizando o método writeFile
        esta escrita pode estar associada a um conjunto de operações
        como o envio de informações de um usuario, por exemplo.
*/

const fs = require('fs')
const http = require('http')

const port = 3000

const server = http.createServer((req, res) => {

    const urlinfo = require('url').parse(req.url, true)
    const name = urlinfo.query.name

    if(!name) {
        fs.readFile('index.html', function(err, data) {
            res.writeHead(200, { 'Content-type' : 'text/html' })
            res.write(data)
            return res.end()
        })
    } else {
        fs.writeFile("arquivos.txt", name, function(err, data) {
            res.writeHead(302, {
                location: '/',
            })
            return res.end()
        })

    }
    
    /*fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })*/

})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
