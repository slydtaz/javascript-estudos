let jogador = {
    nome: "Steve",
    vida: 20,
    nivel: 10
}
function adicionar_propriedade(a) {
    delete jogador[a]
}
adicionar_propriedade("Mundo")
for (let propriedades in jogador) {
    console.log(propriedades + ": " + jogador[propriedades])
}