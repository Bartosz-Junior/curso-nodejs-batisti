/* 

    Middlewares
        Middlewares são códigos que podem ser executados no meio/entre(middle) de alguma ação
        e outra
        por exemplo: verificar se o usuario esta logado, podemos ter um para esta verificação
        O método que nos dá acesso a utilizar middlewares é o use no express.

*/

const express = require('express')
const path = require('path')
const port = 3000
const pathBase = path.join(__dirname, 'templates')
const app = express()

const checkAuth = function(req, res, next){
    
    req.authStatus = true

    if(req.authStatus) {
        console.log('Está logado, pode continuar')
        next()
    } else {
        console.log('Não está logado, faça login para continuar!')
        next()
    }
}

app.use(checkAuth)

app.get('/', (req, res) => {

    res.sendFile(`${pathBase}/index.html`)
})

app.listen(port, ()=> {

    console.log(`Servidor rodando na porta ${port}!`)
})