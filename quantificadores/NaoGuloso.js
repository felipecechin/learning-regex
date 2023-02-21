const texto = '<div>Conteúdo 01</div><div>Conteúdo 02</div>';

// Quantificadores são gulosos (greedy)...
console.log(texto.match(/<div>.+<\/div>/g));
console.log(texto.match(/<div>.*<\/div>/g));
console.log(texto.match(/<div>.{0,100}<\/div>/g));

// Quantificadores NÃO gulosos (lazy)...
console.log(texto.match(/<div>.+?<\/div>/g));
console.log(texto.match(/<div>.*?<\/div>/g));
console.log(texto.match(/<div>.{0,100}?<\/div>/g));