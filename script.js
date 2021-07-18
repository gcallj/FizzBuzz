/*
            FizzBuzz Function

    Se entrada for divisivel por 3 deve retornar 'Fizz'
    Se entrada for divisivel por 5 deve retornar 'Buzz'
    Se entrada for divisivel por 3 e 5 deve retornar 'FizzBuzz'
    Se não for número deve retornar 'Não é um número'
    Se não for divisivel nem por 3 nem por 5 deve retornar a entrada

*/


var resultado = fizzBuzz(5);
console.log(resultado);

function fizzBuzz(entrada){

    if(typeof(entrada)!="number"){
        return "Nao e um numero"
    }
    else if(!(entrada%3) && !(entrada%5)){
        return "FizzBuzz"
    }
    else if(!(entrada%3)){
        return "Fizz"
    }
    else if(!(entrada%5)){
        return "Buzz"
    }   
    return entrada
}