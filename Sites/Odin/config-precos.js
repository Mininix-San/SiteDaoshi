// ═══════════════════════════════════════════════════════════════
// ⚡ CONFIGURAÇÃO DE PREÇOS - ODIN VALHALLA RISING
// ═══════════════════════════════════════════════════════════════
// 
// EDITE AQUI para alterar preços dos pacotes do Odin
//
// ⚠️ IMPORTANTE: Depois de editar, salve (Ctrl+S) e recarregue 
//                o navegador (Ctrl+F5)
//
// ═══════════════════════════════════════════════════════════════

const ODIN_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  exchangeRate: 5.88, // Valor do dólar em R$
  
  // ═══ PREÇOS DOS PACOTES (já com desconto aplicado) ═══
  // Estes são os valores FINAIS que o cliente paga em dólar
  pacotePrecos: {
    4:  3.44,    // Pacote de $4 = $3.44 (desconto de 14%)
    9:  7.44,    // Pacote de $9 = $7.44 (desconto de 17.3%)
    23: 19.78,   // Pacote de $23 = $19.78 (desconto de 14%)
    30: 25.80,   // Pacote de $30 = $25.80 (desconto de 14%)
    40: 34.40,   // Pacote de $40 = $34.40 (desconto de 14%)
    80: 68.80    // Pacote de $80 = $68.80 (desconto de 14%)
  }
};

// ═══════════════════════════════════════════════════════════════
// 📝 EXEMPLOS DE EDIÇÃO:
// ═══════════════════════════════════════════════════════════════
//
// 💡 Mudar preço do pacote de $4:
//    4: 3.50
//
// 💡 Mudar preço do pacote de $80:
//    80: 70.00
//
// 💡 Adicionar novo pacote de $100:
//    100: 85.00
//    (também precisa adicionar no HTML)
//
// 💡 Mudar cotação do dólar:
//    exchangeRate: 6.00
//
// 💡 Calcular preço com desconto:
//    Preço Original × (1 - desconto)
//    Exemplo: $23 com 14% desconto = 23 × 0.86 = 19.78
//
// ═══════════════════════════════════════════════════════════════

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.ODIN_CONFIG = ODIN_CONFIG;
}
