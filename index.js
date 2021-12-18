const chalk = require('chalk');
const fs = require('fs')

const file = "./arquivos/texto1.md"

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'não há arquivo no caminho.'))
}

async function pegaArquivo(caminhoArquivo){
  
  try{
    const encoding = 'utf-8'
    const text = await fs.promises.readFile(caminhoArquivo, encoding)

  }catch(erro){
    trataErro(erro)
  }
}

// function pegaArquivo(caminhoDoArquivo) {
  //   const encoding = 'utf-8';
  //   fs.promises
  //   .readFile(caminhoDoArquivo, encoding)
  //   .then((data) => chalk.green(console.log(texto)))
  //   .catch((erro) => trataErro(erro))
  // }
  
  // function pegaArquivo(caminhoDoArquivo) {
  //   const encoding = 'utf-8';
  //   fs.readFile(caminhoDoArquivo, encoding, (erro, data) => {
  //     if (erro) {
  //       trataErro(erro);
  //     }
  //     console.log(chalk.green(data));
  //   })
  // }

pegaArquivo(file)
