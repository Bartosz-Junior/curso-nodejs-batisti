/*
    Rotas com Node.js puro
        Podemos criar um sistema de roteamento simples com Node.js e seus 
        core Modules
        as rotas são basicamente as páginas que acessamos nos sites
        vamos falar mais sobre esse recurso em outros modulos
        a Ideia é identificar os arquivos acessados pela URL e retorna-los
        se existirem.
*/

const http = require('http')
const url = require('url')
const fs = require('fs')

const port = 3000

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if(filename.includes('html')) {
        if(fs.existsSync(filename)){
            fs.readFile(filename, function(err, data) {
                res.writeHead(200, { 'Content-Type' : 'text/html' })
                res.write(data)
                return res.end()
            })
        } else {
            fs.readFile('404.html', function(err, data) {
                res.writeHead(404, { 'Content-Type' : 'text/html'})
                res.write(data)
                return res.end()
            })
        }
    }
})
server.listen(port, () => {
console.log(`Servidor rodando na porta: ${port}`)
})