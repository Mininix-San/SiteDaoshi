// ═══════════════════════════════════════════════════════════════
// 🎮 CONFIGURAÇÃO DE PREÇOS - ROHAN II
// ═══════════════════════════════════════════════════════════════

const ROHAN2_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: 5.88, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: 0.06, // 6%

  
  // ═══ PACOTES ═══
  topUpPackages: {
    10: { price: 8.50 },   // Pack de $10
    12: { price: 9.99 },   // Pack de $12
    20: { price: 17.00 },  // Pack de $20
    50: { price: 42.50 },  // Pack de $50
    100: { price: 85.00 }  // Pack de $100
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.ROHAN2_CONFIG = ROHAN2_CONFIG;
}
