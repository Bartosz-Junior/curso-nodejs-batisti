/*

    Instalando pacote global
        Um pacote global não fica salvo na pasta node_modules do projeto
        ela fica salvo no computador do usuario
        a vantagem é que podemos acessá-la em qualquer local via terminal
        utilizamos a flag -g em node install.

*/

const _ = require('lodash')

const arr = [1,1,1,4,6,3,7,1,4,8,9]

console.log(_.uniq(arr))
