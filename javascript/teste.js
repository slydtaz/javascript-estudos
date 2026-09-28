let idades = [12, 15, 18, 14, 20, 16]
let resultado = 0
function contarMaiores(parametro) {
    for (let ages of parametro) {
     if (ages >= 18){
        resultado++
     }
    }
    return resultado
}
contarMaiores(idades)
console.log(resultado)