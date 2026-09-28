let jogador = {
    nome: "Steve",
    vida: 20,
    nivel: 10
}
function adicionar_propriedade(a,b) {
    jogador[a] = b
}
adicionar_propriedade(Mundo,"overworld")
for (let propriedades in jogador) {
    console.log(propriedades + ": " + jogador[propriedades])
}