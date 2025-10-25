/*
    Path absoluto e formar path
        Com a função resolve é possivel saber qual o path completo até o arquivo
        alvo;
        e com a função join é possivel formar um path dinamico, com variaveis
        e valores fixos;
        são duas funções muito importantes.
*/

const path = require('path')

//path absoluto
console.log(path.resolve('text.txt'))

//FORMAR PATH
const midFolder = "relatorios"
const fileName = "matheus.txt"

const finalPath = path.join('/', 'arquivos', midFolder, fileName)

console.log(finalPath)