// ═══════════════════════════════════════════════════════════════
// 🦇 CONFIGURAÇÃO DE PREÇOS - NIGHTCROWS
// ═══════════════════════════════════════════════════════════════
// 
// EDITE AQUI para alterar preços e valores do Nightcrows
//
// ⚠️ IMPORTANTE: Depois de editar, salve (Ctrl+S) e recarregue 
//                o navegador (Ctrl+F5)
//
// ═══════════════════════════════════════════════════════════════

const NIGHTCROWS_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: 5.45, // Valor padrão do dólar em R$
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: 0.06, // 6% = 0.06
  
  // ═══ PACOTES DE TWD ═══
  // Estes são os pacotes principais de moeda do jogo
  twdPackages: {
    500:   { price: 13.70 },   // 500 TWD = $13.70
    800:   { price: 21.92 },   // 800 TWD = $21.92
    1000:  { price: 27.40 },   // 1k TWD = $27.40
    1200:  { price: 32.88 },   // 1.2k TWD = $32.88
    3000:  { price: 82.20 },   // 3k TWD = $82.20
    3500:  { price: 95.90 },   // 3.5k TWD = $95.90
    5000:  { price: 137.00 },  // 5k TWD = $137.00
    7000:  { price: 191.80 },  // 7k TWD = $191.80
    10000: { price: 274.00 },  // 10k TWD = $274.00
    30000: { price: 822.00 }   // 30k TWD = $822.00
  },
  
  // ═══ PACOTES DE TOP UP (Dólares) ═══
  // Pacotes adicionais de recarga
  topUpPackages: {
    5:   { price: 4.00 },    // Pacote de $5 = $4.00
    8:   { price: 6.40 },    // Pacote de $8 = $6.40
    10:  { price: 8.00 },    // Pacote de $10 = $8.00
    20:  { price: 16.00 },   // Pacote de $20 = $16.00
    30:  { price: 24.00 },   // Pacote de $30 = $24.00
    50:  { price: 40.00 },   // Pacote de $50 = $40.00
    100: { price: 80.00 }    // Pacote de $100 = $80.00
  }
};

// ═══════════════════════════════════════════════════════════════
// 📝 EXEMPLOS DE EDIÇÃO:
// ═══════════════════════════════════════════════════════════════
//
// 💡 Mudar preço do pacote de 1000 TWD:
//    1000: { price: 30.00 }
//
// 💡 Adicionar novo pacote de TWD:
//    15000: { price: 410.00 }
//
// 💡 Mudar cotação do dólar:
//    defaultExchangeRate: 5.80
//
// 💡 Mudar taxa do cartão:
//    cardFeePercentage: 0.05  (5%)
//
// ═══════════════════════════════════════════════════════════════

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.NIGHTCROWS_CONFIG = NIGHTCROWS_CONFIG;
}
