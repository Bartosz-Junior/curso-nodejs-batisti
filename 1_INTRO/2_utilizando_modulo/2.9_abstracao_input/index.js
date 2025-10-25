const inquirer = require('inquirer')

inquirer.prompt([
    {
        name: 'p1',
        message: 'Qual a primeira nota?'
    },
    {
        name: 'p2',
        message:  'Qual a segunda nota?', // Correção ortográfica
    },
])
.then((answers) => {
    console.log(answers)
    // Para acessar os valores: answers.p1 e answers.p2
})
.catch((err) => console.log(err))
