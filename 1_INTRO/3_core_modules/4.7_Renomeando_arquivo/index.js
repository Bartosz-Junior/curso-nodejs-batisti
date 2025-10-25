/*
    Renomeando um arquivo
        Para renomear um arquivo com o fs utilizamos o método rename
        precisamos passar o arquivo como parametro
        e também o novo nome
        neste método também podemos verificar algum eventual erro, pela callback
        que pode ser ativado quando o arquivo alvo não existe.
*/

const fs = require('fs')

fs.rename('arquivo.txt', 'novoarquivo.txt', function(err) {
    if(err) {
        console.log(err)
        return
    }
    
    console.log("Arquivo renomeado!")

})