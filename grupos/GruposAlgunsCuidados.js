const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABCabc!'

console.log(texto.match(/[(abc)]/gi)) // Não é um grupo. Grupo dentro de conjunto não existe
console.log(texto.match(/([abc])/gi)) // Conjunto funciona dentro de grupo
console.log(texto.match(/(abc)+/gi))