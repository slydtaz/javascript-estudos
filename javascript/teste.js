let numeros = [10,20,30,40,50]
let total = 0
function somarNumeros(parametro) {
    for (let i = 0; i < parametro.lenght ; i ++) {
        total += parametro[i]
    }
}

let resultado = somarNumeros(numeros)

console.log(resultado)