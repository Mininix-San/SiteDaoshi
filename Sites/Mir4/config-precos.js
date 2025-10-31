// ═══════════════════════════════════════════════════════════════
// ⚔️ CONFIGURAÇÃO DE PREÇOS - MIR4
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: 30/10/2025, 19:49:16

const MIR4_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: 5.88, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: 0.06, // 6%
  
  // ═══ PREÇOS DE GOLD (por 1000 Gold) ═══
  goldRates: {
    base: 28.00,        // 1k-4999 Gold
    above5k: 26.00,       // 5k-9999 Gold
    above10k: 26.00,     // 10k-19999 Gold
    above20k: 23.00,     // 20k+ Gold
    usdt: 4.20         // Preço em USDT
  },
  
  // ═══ PACOTES DE TOP UP ═══
  topUpPackages: {
    1:   { price: 0.90 },
    3:   { price: 2.60 },
    5:   { price: 4.20 },
    10:  { price: 7.60 },
    30:  { price: 22.80 },
    50:  { price: 40.00 },
    100: { price: 76.00 }
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.MIR4_CONFIG = MIR4_CONFIG;
}