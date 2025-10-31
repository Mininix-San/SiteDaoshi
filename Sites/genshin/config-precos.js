// ═══════════════════════════════════════════════════════════════
// 🎮 CONFIGURAÇÃO DE PREÇOS - GENSHIN IMPACT
// ═══════════════════════════════════════════════════════════════

const GENSHIN_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: 5.88, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: 0.06, // 6%

  
  // ═══ PACOTES DE GENESIS CRYSTALS ═══
  topUpPackages: {
    1: { price: 4.20 },   // Benção da Lua
    2: { price: 4.20 },   // Crystal Genesis 300+30
    3: { price: 13.50 },  // Crystal Genesis 980+110
    4: { price: 26.00 },  // Crystal Genesis 1980+260
    5: { price: 40.00 },  // Crystal Genesis 3200+600
    6: { price: 76.00 }   // Crystal Genesis 6400+1600
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.GENSHIN_CONFIG = GENSHIN_CONFIG;
}
