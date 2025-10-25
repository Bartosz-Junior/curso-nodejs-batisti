/* 
    Atualizações de projeto
        Para emitir as atualizações do projeto precisamos sempre reiniciar o servidor
        Ou seja, salvar, encerrar e reiniciar este é o processo
        Isso é terrivel para a produtividade
*/

const http = require('http')
const port = 3000
const server = http.createServer((req, res) =>{
    res.statusCode = 200
    res.setHeader('Contenty-typo', 'text/html')
    res.end('<h1>Olá, este é meu primeiro server com HTML</h1><p> Testando atualizações</p>')
    
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})