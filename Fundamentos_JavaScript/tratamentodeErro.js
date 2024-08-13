function tratarErroElancar(erro){
    // throw new Error('...');
    // throw 10;
    // throw true;
    // throw 'mensagem'
    throw{
        nome: erro.nome,
        msg: erro.mensagem,
        dae: new Date
    }
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.nome.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroElancar(e);
    } finally{
        console.log('final');
    }
}
const obj = { nome : 'Roberto' }
imprimirNomeGritado(obj)