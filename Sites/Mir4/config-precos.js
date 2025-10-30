// ═══════════════════════════════════════════════════════════════
// ⚔️ CONFIGURAÇÃO DE PREÇOS - MIR4
// ═══════════════════════════════════════════════════════════════
// 
// EDITE AQUI para alterar preços, taxas e valores do MIR4
//
// ⚠️ IMPORTANTE: Depois de editar, salve (Ctrl+S) e recarregue 
//                o navegador (Ctrl+F5)
//
// ═══════════════════════════════════════════════════════════════

const MIR4_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  // Usado para converter $ para R$
  defaultExchangeRate: 5.88, // Valor padrão do dólar em R$
  
  // ═══ TAXA DO CARTÃO ═══
  // Adicional cobrado em pagamentos com cartão
  cardFeePercentage: 0.06, // 6% = 0.06
  
  // ═══ PREÇOS DE GOLD (por 1000 Gold) ═══
  // O preço muda conforme a quantidade comprada
  goldRates: {
    base: 27.00,        // 1k-4999 Gold = R$ 27.00 por 1000
    above5k: 26.00,     // 5k-9999 Gold = R$ 26.00 por 1000
    above10k: 26.00,    // 10k-19999 Gold = R$ 26.00 por 1000
    above20k: 23.00,    // 20k+ Gold = R$ 23.00 por 1000
    usdt: 4.20          // Preço em USDT: $4.20 por 1000 Gold
  },
  
  // ═══ PACOTES DE TOP UP (em dólares) ═══
  // Preço de cada pacote de recarga
  topUpPackages: {
    1:   { price: 0.90 },   // Pacote de $1 = $0.90
    3:   { price: 2.60 },   // Pacote de $3 = $2.60
    5:   { price: 4.20 },   // Pacote de $5 = $4.20
    10:  { price: 7.60 },   // Pacote de $10 = $7.60
    30:  { price: 22.80 },  // Pacote de $30 = $22.80
    50:  { price: 40.00 },  // Pacote de $50 = $40.00
    100: { price: 76.00 }   // Pacote de $100 = $76.00
  }
};

// ═══════════════════════════════════════════════════════════════
// 📝 EXEMPLOS DE EDIÇÃO:
// ═══════════════════════════════════════════════════════════════
//
// 💡 Mudar preço do Gold para 1k:
//    goldRates: { base: 30.00, ... }
//
// 💡 Mudar desconto do pacote de $5:
//    5: { price: 4.50 }
//
// 💡 Mudar cotação do dólar:
//    defaultExchangeRate: 6.00
//
// 💡 Mudar taxa do cartão:
//    cardFeePercentage: 0.08  (8%)
//
// ═══════════════════════════════════════════════════════════════

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.MIR4_CONFIG = MIR4_CONFIG;
}
