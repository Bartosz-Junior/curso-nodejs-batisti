/* Erros no node
    Temos duas formas principais para gerar ou evidenciar erros em Node.js;
    
    throw: uma forma de encerrar um programa, gerando um novo erro
    try catch: uma forma de evidenciar algo que deu errado em um bloco de código
    e exibir a mensagem de erro.*/

const x = "10"

try{
    x=2

} catch{
    console.log('Erro, operação inválida!')
}