/*
    Removendo um arquivo
        Para remover um arquivo com o fs utilizamos o método unlink
        precisamos passar o arquivo como parametro
        temos a possibilidade checar se houve algum erro, a partir da callback retornada.
*/

const fs = require('fs')

fs.unlink('arquivo.txt', function(err) {

    if(err) {
        console.log(err)
        return
    }

    console.log('Arquivo remivido!')
})
