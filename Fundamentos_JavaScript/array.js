const valores = [7.7, 8.9, 6.3,  9.2]; //[] signifca array
console.log(valores[0] , valores[3])
console.log(valores[4]);

valores[4] = 10
console.log(valores);

//Quantos elementos tem no array
console.log(valores.length);

//Adiciona coisas no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores);

//retira o ultimo valor do array
console.log(valores.pop());

//Deleta um valor do array
delete valores[0]
console.log(valores);

console.log(typeof valores)