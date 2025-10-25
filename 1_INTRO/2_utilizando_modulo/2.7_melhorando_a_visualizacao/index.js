const chalk = require('chalk');
const nota = 3


console.log(chalk.red('Esta mensagem é vermelha.'));
console.log(chalk.green.bold('Esta mensagem é verde e em negrito.'));


if (nota >= 7){
    console.log("Parabéns você está aprovado!")
} else {
    console.log("Você reprovou!")
}