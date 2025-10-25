/*

    Instalando um pacote como dev:
        Há uma possibilidade de instalar pacotes apenas para o ambiente de 
        desenvolvimento
        utilizamos a flag --save-dev
        isso faz com que ele seja separado no package.json dos demais
        e então na build de produção não instalaremos estes módulos
        um exemplo: servidor para ambiente local, como o Nodemon.

*/

const _ = require('lodash')
const chalk = require('chalk')

const a = [1,2,3,4,5,6,7,8]
const b = [2,3,5,6,8,0,10]

const diff = _.difference(b,a)

console.log(chalk.blue.bold(diff))
