let jogador = {
    nome: "Steve",
    vida: 20,
    nivel: 10
}
function dano(numero) {
    jogador.vida -= numero
}
dano(5)
for (let propriedades in jogador) {
    console.log(propriedades + ": " + jogador[propriedades])
}
