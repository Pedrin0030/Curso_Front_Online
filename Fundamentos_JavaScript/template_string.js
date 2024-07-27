const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';
//template para rodar a string
const template = `
    Olá
    ${nome}!`

console.log(concatenacao, template);

//expressoes..
console.log(`1 + 1 =  ${1 +1}`);

//elo string
const up = texto => texto.toUpperCase()
console.log(`Ei.. ${up('cuidado')}!`); 