/*
    Trabalhando com diretorios
        Com o modulo fs também podemos trabalhar com diretorios(pastas)
        o método exists pode evidenciar se um diretorio existe ou não
        e o método mkdir pode criar um diretorio.
*/

const fs = require('fs')

if(!fs.existsSync('./minhapasta')){ 
    
    console.log('Esta pasta não existe!')
    fs.mkdirSync('minhapasta')
    console.log('Pasta criada com sucesso!')

} else if(fs.existsSync('minhapasta')) {
    
    console.log('Pasta já existe!')
}