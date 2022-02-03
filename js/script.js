function trataErro (array, num) {

    try {
        if (!array && !num) throw new ReferenceError ('Parametros inválidos');

        if (typeof array !== 'object') throw new TypeError ('Array precisa ser do tipo object');

        if (typeof num !== 'number') throw new TypeError ('Número precisa ser do tipo numero');

        if (array.length !== num) throw new RangeError ('Tamanho do array inválido');

        return array;
    } 
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("Este é um ReferenceError");
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log("Este é um TypeError");
            console.log(e.message)
        } else if (e instanceof RangeError) {
            console.log("Este é um RangeError");
            console.log(e.message)
        } else {
            console.log('Tipo de erro não esperado' + e); 
        }
    }
    
}

console.log(trataErro([4, 5, 6], 3));