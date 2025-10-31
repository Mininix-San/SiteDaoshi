// ═══════════════════════════════════════════════════════════════
// ❄️ CONFIGURAÇÃO DE PREÇOS - LEGENDS OF YMIR
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const YMIR_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  exchangeRate: 5.88, // R$ por dólar
  
  // ═══ PACOTES TOP UP (em dólares) ═══
  topUpPackages: {
    100: { price: 89.98 },  // Pack de $100 → $89.98
    50:  { price: 44.98 },  // Pack de $50 → $44.98
    30:  { price: 26.98 },  // Pack de $30 → $26.98
    10:  { price: 8.98 },   // Pack de $10 → $8.98
    5:   { price: 4.48 },   // Pack de $5 → $4.48
    3:   { price: 2.68 }    // Pack de $3 → $2.68
  },
  
  // ═══ PACOTES TWD (em dólares) ═══
  twdPackages: {
    30000: { price: 837.00 },  // TWD 30.000 → $837.00
    10000: { price: 279.00 },  // TWD 10.000 → $279.00
    5000:  { price: 139.50 }   // TWD 5.000 → $139.50
  }
};

// ═══════════════════════════════════════════════════════════════
// 📝 COMO USAR:
// ═══════════════════════════════════════════════════════════════
//
// 💡 Para mudar um preço:
//    Altere o valor em "price" do pacote desejado
//    Exemplo: 100: { price: 89.98 } → 100: { price: 85.00 }
//
// 💡 Para adicionar novo pacote Top Up:
//    Adicione uma nova linha em topUpPackages:
//    200: { price: 179.00 },
//    (também precisa adicionar o campo no HTML)
//
// 💡 Para adicionar novo pacote TWD:
//    Adicione uma nova linha em twdPackages:
//    50000: { price: 1395.00 },
//    (também precisa adicionar o campo no HTML)
//
// 💡 Para mudar cotação do dólar:
//    exchangeRate: 6.00
//
// ═══════════════════════════════════════════════════════════════

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.YMIR_CONFIG = YMIR_CONFIG;
}
