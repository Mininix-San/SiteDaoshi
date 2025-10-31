# 🎮 GUIA COMPLETO - ADICIONAR NOVOS JOGOS

## 📋 Índice
1. [Visão Geral](#visão-geral)
2. [Como Usar o Dashboard](#como-usar-o-dashboard)
3. [Tipos de Sistema de Preços](#tipos-de-sistema-de-preços)
4. [Exemplos Práticos](#exemplos-práticos)
5. [Funções Disponíveis](#funções-disponíveis)

---

## 🎯 Visão Geral

O novo sistema de adicionar jogos permite criar:
- ✅ **Config.js**: Adiciona o jogo ao site principal
- ✅ **config-precos.js**: Configuração de preços e moedas
- ✅ **index.html**: Página básica do jogo com estilo retro pixel art

### Funcionalidades:
- 💰 **Sistema de Moeda/Gold**: Preços por faixa de quantidade (ex: MIR4)
- 📦 **Sistema de Pacotes**: Valores fixos em $ com desconto (ex: Ymir)
- 🎁 **Sistema Híbrido**: Ambos os sistemas juntos (ex: Nightcrows)
- 🤖 **Geração Automática**: Salva todos os arquivos automaticamente
- 📋 **Copiar Manual**: Opção de copiar códigos manualmente

---

## 🚀 Como Usar o Dashboard

### 1. Abra o Dashboard
```
dashboard.html
```

### 2. Clique em "ADICIONAR JOGO" (card com ➕)

### 3. Preencha as Informações Básicas

#### 🎮 Informações do Jogo:
- **ID do Jogo**: `novogame` (minúsculas, sem espaços)
- **Nome do Jogo**: `NOVO GAME` (como aparecerá no site)
- **Nome Curto** (opcional): `NOVO` (para cards pequenos)
- **Emoji**: `🎮` (emoji representativo)
- **URL do Ícone**: `https://i.imgur.com/...` (link do Imgur)
- **Ícone Grande**: ☑️ (50% maior, como MIR4, NC, Odin)

#### 📝 Descrições:
- **Descrição Curta**: Para os cards na home
- **Descrição Longa**: Para a página completa de jogos

#### ⭐ Características:
- Preencha 5 features/benefícios do jogo

---

## 💰 Tipos de Sistema de Preços

### 1️⃣ Sistema de Moeda/Gold (Ex: MIR4)

**Quando usar**: Quando o jogo tem uma moeda que pode ser comprada em qualquer quantidade, com preços variando por faixa.

**Configuração**:
- **Nome da Moeda**: Gold, Diamonds, Crystals
- **Unidade**: k (1k, 5k, 10k) ou deixe vazio
- **Faixas de Preço**:
  - Faixa 1: 0 - 5000 = R$ 27,00/unidade
  - Faixa 2: 5001 - 10000 = R$ 26,00/unidade
  - Faixa 3: 10001 - 20000 = R$ 25,00/unidade
- **USDT** (opcional): Preço em USDT

**Exemplo Prático**:
```javascript
// config-precos.js gerado
currencyName: "Gold",
currencyUnit: "k",
currencyRates: {
  base: { min: 0, max: 5000, price: 27.00 },
  tier1: { min: 5001, max: 10000, price: 26.00 },
  tier2: { min: 10001, max: 20000, price: 25.00 },
  usdt: 4.20
}
```

---

### 2️⃣ Sistema de Pacotes (Ex: Ymir)

**Quando usar**: Quando o jogo tem pacotes fixos de $ com preço já com desconto.

**Configuração**:
- **Nome dos Pacotes**: Diamonds, Crystals, Packs
- **Pacotes**:
  - Valor em $ (no jogo): 5
  - Preço Final (R$): 4.48 (já com desconto aplicado)
  - Quantidade de itens (opcional): 500

**Exemplo Prático**:
```javascript
// config-precos.js gerado
topUpPackages: {
  5: { price: 4.48, quantity: 500 },
  10: { price: 8.98, quantity: 1000 },
  30: { price: 26.98, quantity: 3000 }
}
```

---

### 3️⃣ Sistema Híbrido (Ex: Nightcrows)

**Quando usar**: Quando o jogo tem AMBOS os sistemas (moeda + pacotes).

**Configuração**:
- Configure tanto a moeda quanto os pacotes
- O sistema gerará ambas as seções no config-precos.js

---

## 🎯 Exemplos Práticos

### Exemplo 1: Jogo com Sistema de Moeda Simples

```
ID: crystalquest
Nome: CRYSTAL QUEST
Emoji: 💎
Sistema: Moeda/Gold

Moeda: Crystals
Unidade: k
Faixas:
  - 0 - 10k = R$ 30,00
  - 10k - 50k = R$ 28,00
  - 50k+ = R$ 25,00
```

### Exemplo 2: Jogo com Pacotes Fixos

```
ID: dragonwars
Nome: DRAGON WARS
Emoji: 🐉
Sistema: Pacotes

Pacotes:
  - $10 = R$ 8,50
  - $20 = R$ 17,00
  - $50 = R$ 42,00
```

### Exemplo 3: Jogo Híbrido

```
ID: epicrpg
Nome: EPIC RPG
Emoji: ⚔️
Sistema: Ambos

Moeda: Gold (k)
Faixas: 0-5k=R$25, 5k-20k=R$23

Pacotes: $5=R$4.50, $10=R$9.00
```

---

## 🔧 Funções Disponíveis

### 📋 Adicionar/Remover Faixas de Moeda
```javascript
addCurrencyTier()  // Adiciona nova faixa de preço
removeTier(button) // Remove faixa específica
```

### 📦 Adicionar/Remover Pacotes
```javascript
addPackage()         // Adiciona novo pacote
removePackage(button) // Remove pacote específico
```

### 👁️ Visualizar Códigos
```javascript
previewNewGameComplete()  // Ver código do config.js
previewConfigPrecos()     // Ver código do config-precos.js
previewGameHTML()         // Ver código do index.html
```

### 💾 Salvar
```javascript
saveCompleteGame()  // Salva TUDO automaticamente
                    // - Adiciona ao config.js
                    // - Cria pasta do jogo
                    // - Salva config-precos.js
                    // - Salva index.html

copyAllCode()       // Copia todos os códigos
                    // para colagem manual
```

---

## 📊 Estrutura Gerada

Ao salvar um jogo, a estrutura criada será:

```
Sites/
├── config.js ← Jogo adicionado ao array
├── NomeDoJogo/
│   ├── config-precos.js ← Configurações de preço
│   └── index.html ← Página básica do jogo
```

---

## ⚙️ Configurações Gerais

Todos os jogos incluem:

- **Cotação do Dólar**: Padrão R$ 5,88 (atualizado pela API Binance)
- **Taxa do Cartão**: Padrão 6% (0,06)

Essas configurações podem ser alteradas no formulário antes de gerar.

---

## 🎨 HTML Gerado

O HTML básico gerado inclui:
- ✅ Estilo Pixel Art Retro completo
- ✅ Background da Daoshi Store
- ✅ Paleta de cores roxa/dourada
- ✅ Fonte Press Start 2P
- ✅ Estrutura de painéis e inputs
- ✅ Integração com config-precos.js
- ✅ Estrutura básica para implementação

---

## 🔄 Workflow Recomendado

### Automático (Recomendado):
1. Abra o Dashboard
2. Conecte a pasta do projeto (botão "Connect Folder")
3. Clique em "ADICIONAR JOGO"
4. Preencha todos os campos
5. Configure o sistema de preços
6. Clique em "💾 Salvar Tudo"
7. Recarregue o site principal

### Manual:
1. Abra o Dashboard
2. Clique em "ADICIONAR JOGO"
3. Preencha todos os campos
4. Clique em "📋 Copiar Todos os Códigos"
5. Cole manualmente em cada arquivo
6. Crie a pasta e arquivos necessários

---

## 💡 Dicas Importantes

### ✅ FAZER:
- Use IDs simples (ex: `novogame`, `epicrpg`)
- Preencha TODAS as 5 características
- Teste o sistema de preços antes de finalizar
- Use a opção "Visualizar" para revisar códigos
- Salve com o botão "Salvar Tudo" quando conectado

### ❌ EVITAR:
- IDs com espaços ou caracteres especiais
- Deixar campos obrigatórios vazios
- Esquecer de selecionar o tipo de sistema de preços
- Não configurar pelo menos uma faixa ou pacote
- Esquecer de recarregar o site após salvar

---

## 🆘 Solução de Problemas

### Erro: "Selecione o tipo de sistema de preços"
**Solução**: Escolha Currency, Packages ou Both no dropdown

### Erro: "Conecte a pasta do projeto primeiro"
**Solução**: Clique no botão "Connect Folder" no header do dashboard

### Jogo não aparece no site
**Solução**: Recarregue completamente a página principal (Ctrl+Shift+R)

### Config-precos.js não funciona
**Solução**: Verifique se o nome da constante está correto (JOGO_CONFIG)

---

## 📞 Suporte

Para mais ajuda, consulte:
- `dashboard.html` - Interface visual
- `dashboard.js` - Lógica de geração
- `config.js` - Estrutura de jogos
- Outros jogos existentes como exemplo

---

**✨ Sistema criado pela Daoshi Store - 2025**

