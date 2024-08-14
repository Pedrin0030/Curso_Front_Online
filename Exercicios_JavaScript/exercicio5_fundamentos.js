//Crie uma função que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo

function maiorOu(a, b){
   if (a == b || a > b){
    console.log("O numero A é igual ou maior que o B");
   }
   else{
        console.log("Impossivel detectar");
   }
}
maiorOu(-1, 0)

function maiorOuIgual(c, d){
    if (c > d || c === d){
        console.log("true") ;
    } else{
        console.log("false") ;
    }
}
maiorOuIgual(0, 0);