const texto = '.$+*?-';

console.log(texto.match(/[+.?*$]./g)); // Não precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)); // O hífen é um intervalo (range)

// Não é um intervalo (range)
console.log(texto.match(/[$\-?]/g));
console.log(texto.match(/[-$?]/g));
console.log(texto.match(/[-?]/g));

// pode precisar de escape dentro do conjunto: - [ ] ^
console.log(texto.match(/[]]/g));