// 1. Função que calcula o saldo e determina o nível com base nas vitórias
function calcularNivelRankeado(vitorias, derrotas) {
  // Operadores e Variáveis
  const saldoVitorias = vitorias - derrotas;
  let nivel = "";

  // Estruturas de decisão
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

  // Retorna os dois valores calculados
  return { saldoVitorias, nivel };
}

// 2. Lista de jogadores para testar diferentes cenários
const jogadores = [
  { vitorias: 8, derrotas: 2 },    // Ferro
  { vitorias: 18, derrotas: 5 },   // Bronze
  { vitorias: 45, derrotas: 15 },  // Prata
  { vitorias: 75, derrotas: 20 },  // Ouro
  { vitorias: 85, derrotas: 10 },  // Diamante
  { vitorias: 98, derrotas: 25 },  // Lendário
  { vitorias: 120, derrotas: 15 }  // Imortal
];

// 3. Laço de repetição (for...of) para processar cada jogador
for (const jogador of jogadores) {
  const resultado = calcularNivelRankeado(jogador.vitorias, jogador.derrotas);
  
  // Saída formatada conforme o enunciado
  console.log(`O Herói tem de saldo de **${resultado.saldoVitorias}** está no nível de **${resultado.nivel}**`);
}