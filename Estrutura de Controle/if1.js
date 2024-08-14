function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com " + nota);
    }
}
soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeiro(valor){
    if(valor){
        console.log('É verdade...' + valor);
    }
}

seForVerdadeiro();
seForVerdadeiro(null);
seForVerdadeiro(undefined);
seForVerdadeiro(NaN);
seForVerdadeiro('');
seForVerdadeiro(0);
seForVerdadeiro(-1);
seForVerdadeiro(' ');
seForVerdadeiro('?');
seForVerdadeiro([]);
seForVerdadeiro([1, 2]);
seForVerdadeiro({});