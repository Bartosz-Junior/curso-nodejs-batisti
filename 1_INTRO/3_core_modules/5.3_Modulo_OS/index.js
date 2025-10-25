/*
    Modulo OS
        Com o modulo OS podemos extrair informações do sistema operacional
        este também é um Core Module

*/

const os = require('os')

cpu = os.cpus()

console.log(cpu[0]['model'])