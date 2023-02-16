// Um byte (8 bits) - 256 caracteres

// Dois bytes (16 bits) - 65536 caracteres
// Símbolos, Pontuação, A-Z, a-z, 0-9


const texto = 'aʬc௵d'
console.log(texto.match(/\u02AC|\u0BF5/g))