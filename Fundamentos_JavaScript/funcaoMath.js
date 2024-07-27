// A função Math em JavaScript é um objeto integrado que fornece uma coleção de métodos e 
// propriedades para realizar operações matemáticas. O objeto Math é um objeto global, portanto, 
// não precisa ser instanciado ou importado para ser utilizado. Aqui está uma explicação 
// resumida das principais funcionalidades e propriedades do objeto Math:

// Math.E: A constante e, a base dos logaritmos naturais (aproximadamente 2.718).
// Math.PI: O valor de π (aproximadamente 3.141).
// Math.abs(x): Retorna o valor absoluto de x.
// Math.ceil(x): Retorna o menor número inteiro maior ou igual a x.
// Math.floor(x): Retorna o maior número inteiro menor ou igual a x.
// Math.round(x): Retorna o valor de x arredondado para o inteiro mais próximo.
// Math.max(...numbers): Retorna o maior valor dentre os números passados como argumento.
// Math.min(...numbers): Retorna o menor valor dentre os números passados como argumento.
// Math.pow(base, exponent): Retorna a base elevada à potência do expoente.
// Math.sqrt(x): Retorna a raiz quadrada de x.
// Math.random(): Retorna um número pseudo-aleatório entre 0 (inclusive) e 1 (exclusivo).
// Math.sin(x): Retorna o seno de x (x é em radianos).
// Math.cos(x): Retorna o cosseno de x (x é em radianos).
// Math.tan(x): Retorna a tangente de x (x é em radianos).

const raio = 5.6;
const area = Math.PI * Math.pow(raio, 2);

console.log(area);
console.log(typeof Math);