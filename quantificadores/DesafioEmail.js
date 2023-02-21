const texto = `Os e-mails dos convidados são:
- fulano@cod3r.com.br
- xico@gmail.com
- xico@gmail.teste.arroba.com
- maria_silva@registro.br
- rafa.sampaio@yahoo.com
`

console.log(texto.match(/[\w.]+@[\w\.]+\.\w+/g))

// no futuro...
console.log(texto.match(/[\w.]+@\w+\.\w{2,4}(\.\w{2})?/g))