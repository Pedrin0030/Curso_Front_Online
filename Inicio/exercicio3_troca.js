let a = 7 
let b = 9

console.log("Valor de A: " + a);
console.log("Valor de B: " + b);

let aux; 
aux = a;
a = b;
b = aux;
console.log("\nValor de A: " + a);
console.log("Valor de B: " + b);

//Outra forma de fazer
let e = 12;
let g = 35;
console.log("\nValor de E: " + e);
console.log("Valor de G: " + g);

[e, g] = [g, e];
console.log("\nValor de E: " + e);
console.log("Valor de G: " + g);