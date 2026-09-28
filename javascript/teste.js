let jogador = {
    nome: "Steve",
    vida: 20,
    nivel: 10
}
for (let propriedades in jogador) {
    console.log(propriedades + ": " + jogador[propriedades])
}