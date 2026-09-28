let idades = [12, 15, 18, 14, 20, 16]
let resultado = 0
function contarMaiores() {
    for (let ages of idades) {
     if (ages >= 18){
        resultado++
     }
    }
    return resultado
}
console.log(resultado)