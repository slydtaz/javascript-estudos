let numeros = [10,20,30,40,50]
let total = 0
function somarNumeros(parametro) {
    for (let i = 0; i < parametro.length ; i ++) {
        total += parametro[i]
    }
    return total
}

let resultado = somarNumeros(numeros)

console.log(resultado)