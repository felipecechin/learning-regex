const texto = `
CPF dos aprovados: 
  - 600.567.890-12
  - 765.567.890-12
`

console.log(texto.match(/\d{3}.\d{3}.\d{3}-\d{2}/g))