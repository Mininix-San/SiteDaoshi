// ═══════════════════════════════════════════════════════════════
// 💎 CONFIGURAÇÃO DE PREÇOS - WEMIX
// ═══════════════════════════════════════════════════════════════
// 
// EDITE AQUI para alterar preços e faixas de WEMIX
//
// ⚠️ IMPORTANTE: Depois de editar, salve (Ctrl+S) e recarregue 
//                o navegador (Ctrl+F5)
//
// ═══════════════════════════════════════════════════════════════

const WEMIX_CONFIG = {
  
  // ═══ PREÇOS POR FAIXA DE QUANTIDADE ═══
  //
  // O preço por WEMIX varia conforme a quantidade comprada
  // 
  // Para faixas pequenas (1-20): Preço FIXO em R$
  // Para faixas grandes (20+): Preço baseado na COTAÇÃO + margem
  //
  precosPorFaixa: {
    // Faixa 1: 1 a 10 WEMIX
    faixa1: {
      min: 1,
      max: 10,
      tipo: 'fixo',        // Tipo: 'fixo' ou 'cotacao'
      precoUnitario: 5.50  // R$ 5,50 por WEMIX
    },
    
    // Faixa 2: 11 a 20 WEMIX
    faixa2: {
      min: 11,
      max: 20,
      tipo: 'fixo',
      precoUnitario: 4.90  // R$ 4,90 por WEMIX
    },
    
    // Faixa 3: 21 a 50 WEMIX
    faixa3: {
      min: 21,
      max: 50,
      tipo: 'cotacao',
      margem: 1.15         // Cotação + 15%
    },
    
    // Faixa 4: 51 a 100 WEMIX
    faixa4: {
      min: 51,
      max: 100,
      tipo: 'cotacao',
      margem: 1.10         // Cotação + 10%
    },
    
    // Faixa 5: 101+ WEMIX
    faixa5: {
      min: 101,
      max: Infinity,
      tipo: 'cotacao',
      margem: 1.05         // Cotação + 5%
    }
  },
  
  // ═══ COTAÇÕES ═══
  // APIs usadas para buscar preços em tempo real
  apis: {
    wemix: 'https://min-api.cryptocompare.com/data/price?fsym=WEMIX&tsyms=BRL,USD',
    usdt: 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=BRL'
  }
};

// ═══════════════════════════════════════════════════════════════
// 📝 EXEMPLOS DE EDIÇÃO:
// ═══════════════════════════════════════════════════════════════
//
// 💡 Mudar preço fixo para 1-10 WEMIX:
//    faixa1: { ..., precoUnitario: 6.00 }
//
// 💡 Mudar margem para 21-50 WEMIX (de 15% para 20%):
//    faixa3: { ..., margem: 1.20 }
//
// 💡 Adicionar nova faixa de 150+ WEMIX:
//    faixa6: {
//      min: 150,
//      max: Infinity,
//      tipo: 'cotacao',
//      margem: 1.02  // Cotação + 2%
//    }
//
// 💡 Mudar faixa de preço fixo para baseado em cotação:
//    faixa1: {
//      min: 1,
//      max: 10,
//      tipo: 'cotacao',
//      margem: 1.25  // Cotação + 25%
//    }
//
// 💡 Como funciona:
//    - tipo 'fixo': Preço não muda, sempre o valor definido
//    - tipo 'cotacao': Preço = cotação atual × margem
//    - margem 1.15 = adiciona 15% sobre a cotação
//    - margem 1.05 = adiciona 5% sobre a cotação
//
// ═══════════════════════════════════════════════════════════════

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.WEMIX_CONFIG = WEMIX_CONFIG;
}
