/*
    Modulo path
        Com o path conseguimos extrair diversas informações sobre caminhos e arquivos
        este tambem é um core comule
        algumas infos possiveis são: Nome do diretorio
        nome do arquivo
        extensão do arquivo etc

*/

const path = require('path')

const customPath = '1_INTRO/3_core_modules/4.9_Verificando_dados_arquivo/index.html'

console.log(path.dirname(customPath))
console.log(path.basename(customPath))
console.log(path.extname(customPath))