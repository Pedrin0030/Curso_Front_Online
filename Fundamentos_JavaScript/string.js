const escola = "Ed3car"

// Imprime o caractere na posição 4 da string 'escola', que é 'c'.
console.log(escola.charAt(4));

//Imprime o caractere na posição 5 da string 'escola', que é 'a'.
console.log(escola.charAt(5));

 //Imprime o código Unicode do caractere na posição 3 da string 'escola', que é '3' (código 51).
console.log(escola.charCodeAt(3));

// Imprime a posição da primeira ocorrência do caractere '3' na string 'escola', que é 2.
console.log(escola.indexOf('3')); 

// Imprime a substring de 'escola' começando da posição 1 até o final, que resulta em "d3car".
console.log(escola.substring(1));

// Imprime a substring de 'escola' começando na posição 0 e terminando antes da posição 3, que resulta em "Ed3".
console.log(escola.substring(0,3));

// Concatena a string 'Escola ', a string 'escola' e a string '!' e imprime o resultado, que é "Escola Ed3car!".
console.log('Escola '.concat(escola).concat("!"));

// Substitui o primeiro dígito encontrado na string 'escola' por 'u' e imprime o resultado, que é "Educar".
console.log(escola.replace(/\d/, 'u'));

// Divide a string 'Ana, Maria, Pedro' usando a vírgula como delimitador e imprime o resultado como um array, que é ["Ana", " Maria", " Pedro"].
console.log('Ana, Maria, Pedro'.split(','));