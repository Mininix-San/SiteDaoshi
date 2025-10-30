# 💰 GUIA COMPLETO DE EDIÇÃO DE PREÇOS - DAOSHI STORE

## 🎯 Visão Geral

Cada jogo tem seu próprio arquivo de configuração de preços que controla TODOS os valores:

```
Mir4/config-precos.js          → Preços MIR4 (Gold e Top Up)
Nightcrows/config-precos.js    → Preços Nightcrows (TWD e Top Up)
Odin/config-precos.js          → Preços Odin (Pacotes com desconto)
Ymir/config-precos.js          → Preços Ymir (Pacotes e descontos)
Wemix/config-precos.js         → Preços Wemix (Faixas de quantidade)
```

---

## ⚔️ MIR4 - Gold & Top Up

### 📁 Arquivo: `Mir4/config-precos.js`

### Como Funciona:
- **Gold**: Preço por 1000 Gold varia conforme a quantidade total
- **Top Up**: Pacotes de recarga com preços fixos em dólar
- **Cotação**: Dólar padrão para converter $ → R$

### O Que Você Pode Editar:

```javascript
const MIR4_CONFIG = {
  // Cotação do dólar padrão
  defaultExchangeRate: 5.88,  // ⬅️ MUDE AQUI: R$ 5,88 por dólar
  
  // Taxa adicional para cartão
  cardFeePercentage: 0.06,    // ⬅️ MUDE AQUI: 6% = 0.06
  
  // Preços de Gold (por 1000 Gold)
  goldRates: {
    base: 27.00,      // ⬅️ 1k-4999 Gold = R$ 27,00 por 1000
    above5k: 26.00,   // ⬅️ 5k-9999 Gold = R$ 26,00 por 1000
    above10k: 26.00,  // ⬅️ 10k-19999 Gold = R$ 26,00 por 1000
    above20k: 23.00,  // ⬅️ 20k+ Gold = R$ 23,00 por 1000
    usdt: 4.20        // ⬅️ Preço em USDT = $4,20 por 1000 Gold
  },
  
  // Pacotes de Top Up
  topUpPackages: {
    1:   { price: 0.90 },   // ⬅️ $1 por $0.90
    3:   { price: 2.60 },   // ⬅️ $3 por $2.60
    5:   { price: 4.20 },   // ⬅️ $5 por $4.20
    10:  { price: 7.60 },   // ⬅️ $10 por $7.60
    30:  { price: 22.80 },  // ⬅️ $30 por $22.80
    50:  { price: 40.00 },  // ⬅️ $50 por $40.00
    100: { price: 76.00 }   // ⬅️ $100 por $76.00
  }
};
```

### 💡 Exemplos Práticos:

**Aumentar preço do Gold básico:**
```javascript
goldRates: {
  base: 30.00,  // Era 27.00, agora é R$ 30,00 por 1000 Gold
  // ... resto igual
}
```

**Mudar desconto do pacote de $5:**
```javascript
5: { price: 4.50 }  // Era 4.20, agora é $4.50
```

**Adicionar novo pacote de $200:**
```javascript
topUpPackages: {
  // ... pacotes existentes ...
  200: { price: 150.00 }  // Novo pacote!
}
```

---

## 🦇 NIGHTCROWS - TWD & Top Up

### 📁 Arquivo: `Nightcrows/config-precos.js`

### Como Funciona:
- **TWD Packages**: Moeda do jogo (Taiwan Dollar)
- **Top Up Packages**: Pacotes de recarga em dólar
- Cada pacote tem um preço fixo em dólar

### O Que Você Pode Editar:

```javascript
const NIGHTCROWS_CONFIG = {
  // Cotação do dólar
  defaultExchangeRate: 5.45,  // ⬅️ R$ 5,45 por dólar
  
  // Taxa do cartão
  cardFeePercentage: 0.06,    // ⬅️ 6%
  
  // Pacotes de TWD
  twdPackages: {
    500:   { price: 13.70 },   // ⬅️ 500 TWD = $13.70
    800:   { price: 21.92 },   // ⬅️ 800 TWD = $21.92
    1000:  { price: 27.40 },   // ⬅️ 1k TWD = $27.40
    1200:  { price: 32.88 },   // ⬅️ 1.2k TWD = $32.88
    3000:  { price: 82.20 },   // ⬅️ 3k TWD = $82.20
    3500:  { price: 95.90 },   // ⬅️ 3.5k TWD = $95.90
    5000:  { price: 137.00 },  // ⬅️ 5k TWD = $137.00
    7000:  { price: 191.80 },  // ⬅️ 7k TWD = $191.80
    10000: { price: 274.00 },  // ⬅️ 10k TWD = $274.00
    30000: { price: 822.00 }   // ⬅️ 30k TWD = $822.00
  },
  
  // Pacotes de Top Up
  topUpPackages: {
    5:   { price: 4.00 },    // ⬅️ $5 por $4.00
    8:   { price: 6.40 },    // ⬅️ $8 por $6.40
    10:  { price: 8.00 },    // ⬅️ $10 por $8.00
    20:  { price: 16.00 },   // ⬅️ $20 por $16.00
    30:  { price: 24.00 },   // ⬅️ $30 por $24.00
    50:  { price: 40.00 },   // ⬅️ $50 por $40.00
    100: { price: 80.00 }    // ⬅️ $100 por $80.00
  }
};
```

### 💡 Exemplos Práticos:

**Mudar preço do pacote de 1000 TWD:**
```javascript
1000: { price: 30.00 }  // Era 27.40, agora é $30.00
```

**Adicionar novo pacote de 15000 TWD:**
```javascript
twdPackages: {
  // ... pacotes existentes ...
  15000: { price: 410.00 }  // Novo pacote!
}
```

---

## ⚡ ODIN VALHALLA RISING - Pacotes

### 📁 Arquivo: `Odin/config-precos.js`

### Como Funciona:
- Pacotes de $4, $9, $23, $30, $40 e $80
- Preços já incluem desconto aplicado
- Sistema mais simples: valor final direto

### O Que Você Pode Editar:

```javascript
const ODIN_CONFIG = {
  // Cotação do dólar
  exchangeRate: 5.88,  // ⬅️ R$ 5,88 por dólar
  
  // Preços finais dos pacotes (já com desconto)
  pacotePrecos: {
    4:  3.44,    // ⬅️ Pacote $4 = $3.44 final
    9:  7.44,    // ⬅️ Pacote $9 = $7.44 final
    23: 19.78,   // ⬅️ Pacote $23 = $19.78 final
    30: 25.80,   // ⬅️ Pacote $30 = $25.80 final
    40: 34.40,   // ⬅️ Pacote $40 = $34.40 final
    80: 68.80    // ⬅️ Pacote $80 = $68.80 final
  }
};
```

### 💡 Exemplos Práticos:

**Mudar preço do pacote de $4:**
```javascript
4: 3.50  // Era 3.44, agora é $3.50
```

**Calcular preço com novo desconto:**
```javascript
// Fórmula: Valor Original × (1 - desconto)
// Exemplo: $23 com 20% desconto = 23 × 0.80 = 18.40
23: 18.40
```

---

## ❄️ LEGENDS OF YMIR - Pacotes

### 📁 Arquivo: `Ymir/config-precos.js`

### Como Funciona:
- Sistema de pacotes com valor original e desconto
- Pacotes organizados em grupos
- Preço final = Valor × (1 - desconto/100)

### O Que Você Pode Editar:

```javascript
const YMIR_CONFIG = {
  // Cotação do dólar
  exchangeRate: 5.88,  // ⬅️ R$ 5,88 por dólar
  
  // Configuração dos pacotes
  CONFIG_PACOTES: [
    // Grupo 1
    { 
      id: 'p1',        // ⬅️ ID no HTML (não mude!)
      valor: 5,        // ⬅️ Valor original: $5
      desconto: 14,    // ⬅️ Desconto: 14%
      grupo: 'grupo1'  // ⬅️ Grupo para subtotal
    },
    { 
      id: 'p2', 
      valor: 9, 
      desconto: 17.3,  // ⬅️ 17.3% de desconto
      grupo: 'grupo1' 
    },
    
    // Grupo 2
    { id: 'p3', valor: 23, desconto: 14, grupo: 'grupo2' },
    { id: 'p4', valor: 30, desconto: 14, grupo: 'grupo2' },
    
    // Grupo 3
    { id: 'p5', valor: 40, desconto: 14, grupo: 'grupo3' },
    { id: 'p6', valor: 80, desconto: 14, grupo: 'grupo3' }
  ]
};
```

### 💡 Exemplos Práticos:

**Aumentar desconto do pacote de $5 para 20%:**
```javascript
{ id: 'p1', valor: 5, desconto: 20, grupo: 'grupo1' }
// Preço final: $5 × 0.80 = $4.00
```

**Mudar valor original do pacote de $9 para $10:**
```javascript
{ id: 'p2', valor: 10, desconto: 17.3, grupo: 'grupo1' }
// Preço final: $10 × 0.827 = $8.27
```

**Adicionar novo pacote de $100:**
```javascript
CONFIG_PACOTES: [
  // ... pacotes existentes ...
  { id: 'p7', valor: 100, desconto: 15, grupo: 'grupo4' }
]
// ⚠️ Também precisa adicionar <input id="p7"> no HTML!
```

---

## 💎 WEMIX - Conversão por Faixas

### 📁 Arquivo: `Wemix/config-precos.js`

### Como Funciona:
- Preço por WEMIX varia conforme quantidade
- Faixas pequenas (1-20): Preço fixo em R$
- Faixas grandes (20+): Preço baseado na cotação + margem
- Cotação é buscada em tempo real de API

### O Que Você Pode Editar:

```javascript
const WEMIX_CONFIG = {
  precosPorFaixa: {
    // Faixa 1: 1 a 10 WEMIX
    faixa1: {
      min: 1,
      max: 10,
      tipo: 'fixo',         // ⬅️ Preço fixo
      precoUnitario: 5.50   // ⬅️ R$ 5,50 por WEMIX
    },
    
    // Faixa 2: 11 a 20 WEMIX
    faixa2: {
      min: 11,
      max: 20,
      tipo: 'fixo',
      precoUnitario: 4.90   // ⬅️ R$ 4,90 por WEMIX
    },
    
    // Faixa 3: 21 a 50 WEMIX
    faixa3: {
      min: 21,
      max: 50,
      tipo: 'cotacao',      // ⬅️ Baseado na cotação
      margem: 1.15          // ⬅️ Cotação + 15%
    },
    
    // Faixa 4: 51 a 100 WEMIX
    faixa4: {
      min: 51,
      max: 100,
      tipo: 'cotacao',
      margem: 1.10          // ⬅️ Cotação + 10%
    },
    
    // Faixa 5: 101+ WEMIX
    faixa5: {
      min: 101,
      max: Infinity,
      tipo: 'cotacao',
      margem: 1.05          // ⬅️ Cotação + 5%
    }
  }
};
```

### 💡 Exemplos Práticos:

**Mudar preço fixo para 1-10 WEMIX:**
```javascript
faixa1: {
  min: 1,
  max: 10,
  tipo: 'fixo',
  precoUnitario: 6.00  // Era 5.50, agora é R$ 6,00
}
```

**Mudar margem para 21-50 WEMIX (de 15% para 20%):**
```javascript
faixa3: {
  min: 21,
  max: 50,
  tipo: 'cotacao',
  margem: 1.20  // Era 1.15, agora adiciona 20%
}
```

**Adicionar nova faixa de 150+ WEMIX:**
```javascript
faixa6: {
  min: 150,
  max: Infinity,
  tipo: 'cotacao',
  margem: 1.02  // Cotação + apenas 2%
}
```

**Mudar faixa de preço fixo para cotação:**
```javascript
faixa1: {
  min: 1,
  max: 10,
  tipo: 'cotacao',  // Mudou de 'fixo' para 'cotacao'
  margem: 1.25      // Cotação + 25%
}
```

---

## 🚀 COMO APLICAR AS MUDANÇAS

### Passo a Passo:

1. **Abra o arquivo config-precos.js** do jogo
   ```
   Exemplo: Mir4/config-precos.js
   ```

2. **Localize o valor** que deseja mudar
   ```javascript
   // Use Ctrl + F para procurar
   ```

3. **Edite o valor**
   ```javascript
   // ANTES
   goldRates: { base: 27.00, ... }
   
   // DEPOIS
   goldRates: { base: 30.00, ... }
   ```

4. **Salve o arquivo**
   ```
   Ctrl + S
   ```

5. **Recarregue a página do jogo**
   ```
   Ctrl + F5 (força atualização)
   ```

---

## ⚠️ REGRAS IMPORTANTES

### ✅ FAÇA:
- Use **ponto** para decimais: `5.50` ✅
- Use **vírgula** entre itens: `{ a: 1 }, { b: 2 }` ✅
- Salve e teste cada mudança
- Faça backup antes de mudanças grandes

### ❌ NÃO FAÇA:
- Não use vírgula para decimais: `5,50` ❌
- Não esqueça vírgulas entre objetos
- Não mude os IDs (`id: 'p1'` no Ymir)
- Não remova estruturas principais

---

## 🔄 FÓRMULAS ÚTEIS

### Calcular Preço com Desconto:
```
Preço Final = Preço Original × (1 - desconto)

Exemplo 1:
Preço: $100, Desconto: 15%
Final: 100 × (1 - 0.15) = 100 × 0.85 = $85

Exemplo 2:
Preço: $23, Desconto: 14%
Final: 23 × 0.86 = $19.78
```

### Calcular Desconto a partir do Preço:
```
Desconto = (1 - Preço Final / Preço Original) × 100

Exemplo:
Original: $80, Final: $68.80
Desconto = (1 - 68.80/80) × 100 = 14%
```

### Calcular Margem para Cotação:
```
Margem = 1 + (percentual / 100)

Exemplo 1: Adicionar 15%
Margem = 1.15

Exemplo 2: Adicionar 5%
Margem = 1.05
```

---

## 💡 DICAS AVANÇADAS

### Adicionar Novo Pacote:

**MIR4:**
```javascript
topUpPackages: {
  // ... pacotes existentes ...
  200: { price: 150.00 }
}
```

**Nightcrows:**
```javascript
twdPackages: {
  // ... pacotes existentes ...
  15000: { price: 410.00 }
}
```

**Odin:**
```javascript
pacotePrecos: {
  // ... pacotes existentes ...
  100: 85.00
}
// ⚠️ Também adicione no HTML!
```

### Criar Promoção Temporária:

**Reduzir todos os preços em 10%:**
```javascript
// ANTES
1:   { price: 0.90 },
3:   { price: 2.60 },
5:   { price: 4.20 },

// DEPOIS (10% OFF)
1:   { price: 0.81 },  // 0.90 × 0.90
3:   { price: 2.34 },  // 2.60 × 0.90
5:   { price: 3.78 },  // 4.20 × 0.90
```

---

## 📞 PRECISA DE AJUDA?

- Sempre faça backup antes de mudanças grandes
- Teste em um ambiente de desenvolvimento primeiro
- Use Ctrl + F5 para forçar atualização
- Abra F12 (Console) para ver erros
- Consulte este guia sempre que precisar

**Lembre-se**: Edite apenas os valores numéricos. Não altere a estrutura do código! ✨

---

## 📊 RESUMO POR JOGO

| Jogo | Tipo de Preço | Facilidade | Arquivo |
|------|--------------|------------|---------|
| **MIR4** | Faixas de Gold + Pacotes | ⭐⭐⭐⭐⭐ | `Mir4/config-precos.js` |
| **Nightcrows** | Pacotes TWD + Top Up | ⭐⭐⭐⭐⭐ | `Nightcrows/config-precos.js` |
| **Odin** | Pacotes com Preço Final | ⭐⭐⭐⭐⭐ | `Odin/config-precos.js` |
| **Ymir** | Valor + Desconto % | ⭐⭐⭐⭐ | `Ymir/config-precos.js` |
| **Wemix** | Faixas Progressivas | ⭐⭐⭐ | `Wemix/config-precos.js` |

---

═══════════════════════════════════════════════════════════════
          🎮 Sistema criado para facilitar sua vida! 💜
═══════════════════════════════════════════════════════════════
