console.log(process.argv)

const args = process.argv.slice(1)

console.log(args)

const divisao_str = args[0].split('\\')

console.log(divisao_str)

const nome = divisao_str[2]

console.log(nome)
