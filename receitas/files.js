const fs = require('fs')

const read = nomeArquivo => {
  const caminhoAbsoluto = `${__dirname}/originais/${nomeArquivo}`
  const conteudo = fs.readFileSync(caminhoAbsoluto, { encoding: 'utf8' })
  return conteudo
}

const write = (nomeArquivo, conteudo) => {
  const dirname = `${__dirname}/alterados`
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }
  fs.writeFileSync(`${dirname}/${nomeArquivo}`, conteudo, { encoding: 'utf8' })
}

module.exports = { read, write }