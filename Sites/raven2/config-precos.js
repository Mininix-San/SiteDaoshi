// ═══════════════════════════════════════════════════════════════
// 🎮 CONFIGURAÇÃO DE PREÇOS - RAVEN II
// ═══════════════════════════════════════════════════════════════

const RAVEN2_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: 5.88, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: 0.06, // 6%

  
  // ═══ PACOTES ═══
  topUpPackages: {
    7: { price: 6.30 },    // Pack de R$43,50 / 7 USD
    22: { price: 19.80 },  // Pack de R$135,90 / 22 USD
    36: { price: 32.40 },  // Pack de R$224,90 / 36 USD
    70: { price: 63.00 },  // Pack de R$435 / 70 USD
    3: { price: 2.70 },    // Pack de R$18,50 / 3 USD
    4: { price: 3.60 }     // Pack de R$24,90 / 4 USD
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.RAVEN2_CONFIG = RAVEN2_CONFIG;
}
