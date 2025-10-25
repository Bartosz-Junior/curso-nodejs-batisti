//módulos externos
const inquirer = require('inquirer')
const chalk = require('chalk')

//modulos internos
const fs = require('fs')

operation()

function operation(){
    inquirer.prompt([{
        type: 'list',
        name: 'action',
        message: 'O que você deseaja fazer?',
        choices: [
            'Criar Conta',
            'Consultar Saldo',
            'Depositar',
            'Sacar',
            'Sair',
        ],
    },
]).then((answer) => {
    const action = answer.action

    if(action === 'Criar Conta'){
        createAccount()
    } else if(action === 'Consultar Saldo'){
        getAccountBalance()
    } else if(action === 'Depositar'){
        deposit()
    } else if(action === 'Sacar'){
        withdraw()
    } else if(action === 'Sair'){
        console.log(chalk.bgRed.black('Saindo...'))
        process.exit()
    }

}).catch((err) => console.log(err))
}

//Create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco'))
    console.log(chalk.green('Defina as opções da sua conta a seguir:'))
    buildAccount()
}

function buildAccount(){

    inquirer.prompt([
        {
            name:'accountName',
            message:'Digite um nome para a sua conta',
    },
]).then((answer) => {
    const accountName = answer.accountName
    console.info(accountName)

    if(!fs.existsSync('accounts')){
        fs.mkdirSync('accounts')
    }

    if(!accountName){
        console.log(chalk.bgRed.black('O nome de usuário não pode esta vazio!'))
        buildAccount()
        return
    }

    if(fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!'),
        )
        buildAccount()
        return
    }

    if(!fs.existsSync(`accounts/${accountName}.json`)){
        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', function(err) {
            console.log(err)
        },
    )
    }

    console.log(chalk.green('Parabens, sua conta foi criada!'))
    operation()

}).catch((err) => {
    console.log(err)
})
}

//add an amount to user account

function deposit() {

    inquirer.prompt([
        {
            name: 'accountName',
            message:'Informe o nome do titular: ',
        }
    ]).then((answer) => {
        const accountName = answer.accountName

        // Verifica se a conta existe
        if(checkAccount(accountName) === false){
            return deposit()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Quanto você deseja depositar: R$',
            }
        ]).then((answer) => {
            const amount = answer.amount
            
            //add an amount
            addAmount(accountName,amount)
            operation()
        }).catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

//Verifica se a conta existe

function checkAccount(accountName){

    if(!fs.existsSync(`accounts/${accountName}.json`)){
        console.log(chalk.bgRed.black('Esta conta não existe!'))
        return false
    } else{
        return true
    }
}

function addAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount){
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
        return deposit()
    }
    console.log(accountData)

    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi depositado o valor de R$${amount} na sua conta!`))
    
}

function getAccount(accountName){
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r',
    })

    return JSON.parse(accountJSON)
}

//Show account balance
function getAccountBalance(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome do titular? ',
        },
    ]).then((answer) => {

        const accountName = answer.accountName

        if(!fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('A conta não existe!'))
            return getAccountBalance()            
        } 

        const accountData = getAccount(accountName)

        console.log(chalk.bgBlue.black(`Olá, o saldo em sua conta é de R$${accountData.balance}`))
        operation()

    }).catch(err => console.log(err))
}

function withdraw(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Informe o nome da sua conta:'
        }
    ]).then((answer) => {

        const accountName = answer.accountName

        if(!checkAccount(accountName)){
            return withdraw()
        }

        inquirer.prompt([
            {
                name: 'amount',
                message: 'Informe o valor do saque: R$',
            }
        ]).then((answer) => {
            const amount = answer.amount

            removeAmount(accountName, amount)

        }).catch((err) => console.log(err))
    }).catch((err) => console.log(err))
}

function removeAmount(accountName, amount){
    const accountData = getAccount(accountName)

    if(!amount) {
        console.log(
            chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!')
        )
        return withdraw()
    }

    if(accountData.balance < amount) {
        console.log(chalk.bgRed.black('Valor indisponivél!'))
        return withdraw()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){
            console.log(err)
        },
    )

    console.log(chalk.green(`Foi realizado um saque de R$${amount} na sua conta!`))

    operation()
}