/*
    Módulo URL
        O módulo URL serve para decompor uma URL que passamos para o método PARSE
        podemos resgatar: host, path, search, query e etc;
        a partir destas informações podemos alterar a lógica do nosso código.
*/
const url = require('url')
const address = 'https://www.meusite.com.br/catalog?produtos=cadeira'
const parsedUrl = new url.URL(address)

console.log(parsedUrl.host)
console.log(parsedUrl.pathname)
console.log(parsedUrl.search)
console.log(parsedUrl.searchParams)
console.log(parsedUrl.searchParams.get('produtos'))
