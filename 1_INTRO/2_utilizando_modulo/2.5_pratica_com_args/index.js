const minimist = require('minimist')

const soma = require('./soma').soma

const args = minimist(process.argv.slice(1))

const a = parseInt(args['a'])
const b = parseInt(args['b'])

soma(a, b)

setTimeout(() => {
    console.clear()
}, 2000);
