function calcularNivelRankeado(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";
  
  if (vitorias <= 10) {
    nivel = "Ferro";
  } else if (vitorias <= 20) {
    nivel = "Bronze";
  } else if (vitorias <= 50) {
    nivel = "Prata";
  } else if (vitorias <= 80) {
    nivel = "Ouro";
  } else if (vitorias <= 90) {
    nivel = "Diamante";
  } else if (vitorias <= 100) {
    nivel = "Lendário";
  } else {
    nivel = "Imortal";
  }
  return { saldoVitorias, nivel };
}
const jogadores = [
  { vitorias: 8, derrotas: 2 },    // Ferro
  { vitorias: 18, derrotas: 5 },   // Bronze
  { vitorias: 45, derrotas: 15 },  // Prata
  { vitorias: 75, derrotas: 20 },  // Ouro
  { vitorias: 85, derrotas: 10 },  // Diamante
  { vitorias: 98, derrotas: 25 },  // Lendário
  { vitorias: 120, derrotas: 15 }  // Imortal
];
for (const jogador of jogadores) {
  const resultado = calcularNivelRankeado(jogador.vitorias, jogador.derrotas);
  console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}