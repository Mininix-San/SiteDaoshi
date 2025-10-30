// ═══════════════════════════════════════════════════════════════
// ❄️ CONFIGURAÇÃO DE PREÇOS - LEGENDS OF YMIR
// ═══════════════════════════════════════════════════════════════
// 
// EDITE AQUI para alterar preços dos pacotes do Ymir
//
// ⚠️ IMPORTANTE: Depois de editar, salve (Ctrl+S) e recarregue 
//                o navegador (Ctrl+F5)
//
// ═══════════════════════════════════════════════════════════════

const YMIR_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  exchangeRate: 5.88, // Valor do dólar em R$
  
  // ═══ CONFIGURAÇÃO DOS PACOTES ═══
  // 
  // Para cada pacote, defina:
  // - id: ID usado no HTML (ex: 'p1', 'p2', etc.)
  // - valor: Valor ORIGINAL do pacote em dólar
  // - desconto: Percentual de desconto (14 = 14%)
  // - grupo: Grupo para organizar subtotais ('grupo1', 'grupo2', etc.)
  //
  CONFIG_PACOTES: [
    // Grupo 1: Pacotes de $5 e $9
    { id: 'p1', valor: 5,  desconto: 14,   grupo: 'grupo1' },
    { id: 'p2', valor: 9,  desconto: 17.3, grupo: 'grupo1' },
    
    // Grupo 2: Pacotes de $23 e $30
    { id: 'p3', valor: 23, desconto: 14,   grupo: 'grupo2' },
    { id: 'p4', valor: 30, desconto: 14,   grupo: 'grupo2' },
    
    // Grupo 3: Pacotes de $40 e $80
    { id: 'p5', valor: 40, desconto: 14,   grupo: 'grupo3' },
    { id: 'p6', valor: 80, desconto: 14,   grupo: 'grupo3' }
  ]
};

// ═══════════════════════════════════════════════════════════════
// 📝 EXEMPLOS DE EDIÇÃO:
// ═══════════════════════════════════════════════════════════════
//
// 💡 Mudar desconto do pacote de $5 para 20%:
//    { id: 'p1', valor: 5, desconto: 20, grupo: 'grupo1' }
//
// 💡 Mudar valor original do pacote de $9 para $10:
//    { id: 'p2', valor: 10, desconto: 17.3, grupo: 'grupo1' }
//
// 💡 Adicionar novo pacote de $100:
//    { id: 'p7', valor: 100, desconto: 15, grupo: 'grupo4' }
//    (também precisa adicionar o input no HTML com id="p7")
//
// 💡 Mudar cotação do dólar:
//    exchangeRate: 6.00
//
// 💡 Como funciona o desconto:
//    Preço Final = Valor × (1 - desconto/100)
//    Exemplo: $5 com 14% = 5 × 0.86 = $4.30
//
// ═══════════════════════════════════════════════════════════════

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.YMIR_CONFIG = YMIR_CONFIG;
}
