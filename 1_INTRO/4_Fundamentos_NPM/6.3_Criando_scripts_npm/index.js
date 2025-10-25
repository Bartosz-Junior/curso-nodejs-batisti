/*
    É possivel criar rotinas com o npm também,
    ou seja, executarmos uma serie de comandos com apenas um.
    Utilizamos o npm run <script>
    onde <script> é o nome da sequencia de comandos que configuramos.
*/

const _ = require('lodash')
const chalk = require('chalk')

const a = [1,2,3,4,5,6,7,8]
const b = [2,3,5,6,8,0,10]

const diff = _.difference(b,a)

console.log(chalk.blue.bold(diff))
