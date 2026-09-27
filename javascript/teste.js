let Notas = [6,5,7,9,4]
let resultado = 0
let Mediafinal = 0
function calcularsoma() {
    for (let conta of Notas)
         resultado += conta
    for (let i = 0; i < Notas.length; i++)
    if (resultado === Notas[i] + Notas.length) {
        return resultado += conta
    }
}
function calcularMedia() {
calcularsoma()
return Mediafinal = resultado / Notas.length
}
calcularMedia()
console.log(Mediafinal)
