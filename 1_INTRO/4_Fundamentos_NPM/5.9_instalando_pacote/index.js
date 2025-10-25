/*
    Instalando um pacote
        Para instalar um pacote vamos utilizar o comando npm install <nome>
        onde <nome> será substituido pelo nome do pacote
        quando fazemos desta maneira a instalação uma pasta node_modules é criada
        nela todos os arquivos de modulos de terceiros ão armazenados 
        sempre que rodarmos o comando npm install, a pasta node_odules é
        recriada com todos os modulos do package.json.
*/

const _ = require('lodash')

const a = [1, 2, 3, 4, 5, 6]
const b = [2, 4, 6, 8, 10, 11]

const diff = _.difference(b,a)

console.log(diff)