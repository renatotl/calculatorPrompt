const prompt = require(`prompt-sync`)();

let valuer1;
let valuer2;
let simbol;

valuer1 = +prompt();

simbol = prompt('');

valuer2 = +prompt();

if(simbol == '+'){
result = valuer1 + valuer2;
console.log(result)

}else if(simbol == '-'){
    result = valuer1 - valuer2;

}else if(simbol == '*'){
    result = valuer1 * valuer2;

}else if(simbol == '/'){
    result = valuer1 / valuer2;

}else{
let error = 'Opcao invalida'
console.log(error)
};



// para executar esse arquivo no terminal :  node file.js 
