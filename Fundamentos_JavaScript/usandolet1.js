let numero = 1 // não pega valor do bloco como var  
{
    let numero = 2;
    console.log('dentro =', numero);
}
console.log('fora =', numero);