/*
    Atualizando um arquivo
        O writeFile substitui tudo que esta em um arquivo
        e se quisermos atualizar?
        para este fim utilizamos o appendFile
        que tem a mesma utilização que write, porém nos permite unir conteudo.
*/

const fs = require('fs')        //IMPORTA A BIBLIOTECA FS(FILE SYSTEM)
const http = require('http')    //IMPORTA A BIBLIOTECA HTTP PARA TRABALHAR COM O PROTOCOLO

const port = 3000               //CONSTANTE PORT QUE RECEBE O VALOR 3000 - CONSTANTE

const server = http.createServer((req, res) => {        //CONSTANTE SERVER QUE CRIA UM SERVIDOR HTTP

    const urlinfo = require('url').parse(req.url, true)     //NÃO SEI O QUE FAZ
    const name = urlinfo.query.name                         //NÃO SEI O QUE FAZ

    if(!name) {                                             //CASO NAME ESTEJA VAZIO ENTRA NESTE BLOCO
        fs.readFile('index.html', function(err, data) {     //NÃO SEI O QUE FAZ
            res.writeHead(200, { 'Content-type' : 'text/html' })    //NÃO SEI O QUE FAZ
            res.write(data)                                 //NÃO SEI O QUE FAZ
            return res.end()                                //NÃO SEI O QUE FAZ
        })
    } else {
        const nameNewLine = name + '\r\n'

        fs.appendFile("arquivos.txt", nameNewLine, function(err, data) {    //NÃO SEI O QUE FAZ
            res.writeHead(302, {
                location: '/',
            })
            return res.end()
        })

    }
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`)
})
