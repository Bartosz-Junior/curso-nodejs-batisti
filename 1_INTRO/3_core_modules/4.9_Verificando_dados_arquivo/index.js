/*

    Detalhes de arquivos
        Podemos saber mais sobre os arquivos que temos acesso
        utilizamos o método stat de fs
        com ele temos informações de: tamanho, data de criação e se é arquivo
        ou diretorio e etc.

*/

const fs = require('fs');

fs.stat('index.html', (err, stats) => {
  if (err) {
    console.error('Erro ao obter informações do arquivo:', err);
    return;
  }
  console.log('Informações do arquivo:', stats);
  console.log('Tamanho:', stats.size);
  console.log('É um diretório?', stats.isDirectory());
  console.log(stats.ctime);
});