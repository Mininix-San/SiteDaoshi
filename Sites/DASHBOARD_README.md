# ⚙️ DASHBOARD ADMIN - DAOSHI STORE

## 🎯 O Que É?

Um **painel administrativo visual e profissional** para gerenciar TODOS os preços e configurações dos jogos da Daoshi Store de forma super fácil e intuitiva!

---

## ✨ Funcionalidades

### 🏠 Página Inicial
- **5 Cards de Jogos** clicáveis
- **Estatísticas** em tempo real
- **Design pixel retro** profissional com tema roxo/dourado

### 📝 Sistema de Edição Completo
Cada jogo tem sua própria página de edição com:
- ✅ **Formulários intuitivos** organizados por seções
- ✅ **Labels explicativos** para cada campo
- ✅ **Valores padrão** já preenchidos
- ✅ **Validação visual** dos campos

### 💾 Ações Disponíveis
1. **👁️ Preview** - Visualiza o código antes de salvar
2. **💾 Salvar & Baixar** - Gera e baixa o arquivo automaticamente
3. **📋 Copiar Código** - Copia para área de transferência
4. **🔄 Resetar** - Volta aos valores padrão

### 🎮 Jogos Implementados

| Jogo | Status | Campos | Complexidade |
|------|--------|--------|--------------|
| **⚔️ MIR4** | ✅ 100% | 14 campos | Médio |
| **🦇 Nightcrows** | ✅ 100% | 19 campos | Alto |
| **⚡ Odin** | ✅ 100% | 7 campos + Calculadora | Baixo |
| **❄️ Ymir** | ✅ 100% | 13 campos | Médio |
| **💎 Wemix** | ✅ 100% | 13 campos | Alto |

---

## 🚀 Como Usar

### **Passo 1: Abrir o Dashboard**
```
Clique em: dashboard.html
```

### **Passo 2: Selecionar um Jogo**
```
Clique no card do jogo que deseja editar
```

### **Passo 3: Editar os Valores**
```
Preencha os campos com os novos valores:
- Cotação do dólar
- Preços de pacotes
- Taxas e descontos
- Faixas de preço
- etc.
```

### **Passo 4: Preview (Opcional)**
```
Clique em "👁️ Preview" para ver o código gerado
```

### **Passo 5: Salvar**
```
Clique em "💾 Salvar & Baixar"
O arquivo config-precos.js será baixado automaticamente
```

### **Passo 6: Aplicar**
```
1. Vá até a pasta do jogo (ex: Mir4/)
2. Substitua o arquivo config-precos.js pelo novo
3. Recarregue a página do jogo (Ctrl + F5)
```

---

## 📋 Detalhes de Cada Jogo

### ⚔️ MIR4
**O que você pode editar:**
- Cotação do dólar (R$)
- Taxa do cartão (%)
- Preços de Gold por faixa:
  - 1k-4999 Gold
  - 5k-9999 Gold
  - 10k-19999 Gold
  - 20k+ Gold
  - Preço em USDT
- 7 Pacotes de Top Up ($1 a $100)

**Como funciona:**
- Gold tem preço progressivo (quanto mais compra, mais barato)
- Top Up são pacotes com preços fixos

---

### 🦇 Nightcrows
**O que você pode editar:**
- Cotação do dólar (R$)
- Taxa do cartão (%)
- 10 Pacotes de TWD (500 a 30000)
- 7 Pacotes de Top Up ($5 a $100)

**Como funciona:**
- TWD é a moeda principal do jogo
- Top Up são pacotes adicionais

---

### ⚡ Odin
**O que você pode editar:**
- Cotação do dólar (R$)
- 6 Pacotes ($4, $9, $23, $30, $40, $80)
- Preços já com desconto aplicado

**Recursos Extras:**
- 🧮 **Calculadora de Desconto** integrada
  - Digite valor original + % desconto
  - Calcula automaticamente o preço final

**Como funciona:**
- Sistema mais simples
- Preços finais diretos (já com desconto)

---

### ❄️ Ymir
**O que você pode editar:**
- Cotação do dólar (R$)
- 6 Pacotes organizados em 3 grupos:
  - **Grupo 1**: p1 ($5) e p2 ($9)
  - **Grupo 2**: p3 ($23) e p4 ($30)
  - **Grupo 3**: p5 ($40) e p6 ($80)
- Para cada pacote: Valor original + % de desconto

**Como funciona:**
- Sistema de valor + desconto %
- Preço final = Valor × (1 - desconto/100)
- Exemplo: $5 com 14% = $4.30

---

### 💎 Wemix
**O que você pode editar:**
- 5 Faixas de preço progressivas:
  - **Faixa 1** (1-10): Preço fixo em R$
  - **Faixa 2** (11-20): Preço fixo em R$
  - **Faixa 3** (21-50): Cotação + margem %
  - **Faixa 4** (51-100): Cotação + margem %
  - **Faixa 5** (101+): Cotação + margem %

**Como funciona:**
- Faixas pequenas: Preço fixo
- Faixas grandes: Baseado na cotação em tempo real
- Margem: Adicional sobre a cotação
  - 15% = margem 1.15
  - 10% = margem 1.10
  - 5% = margem 1.05

---

## 💡 Dicas e Boas Práticas

### ✅ **FAÇA:**
- **Sempre use PONTO** para decimais: `5.50` ✅
- **Teste** cada mudança antes de aplicar
- **Faça backup** do arquivo original
- **Use Preview** para verificar o código
- **Documente** mudanças importantes

### ❌ **NÃO FAÇA:**
- **Não use vírgula** para decimais: `5,50` ❌
- **Não feche** o dashboard durante o download
- **Não substitua** arquivos sem backup
- **Não edite** valores negativos

### 📝 **Formato de Valores:**

| Tipo | Formato | Exemplo |
|------|---------|---------|
| Preços | Decimal com ponto | `27.00`, `5.50` |
| Taxas (%) | Número inteiro | `6`, `14`, `17.3` |
| Margem | Decimal | `1.15`, `1.10` |
| Quantidade | Inteiro | `1`, `10`, `100` |

---

## 🎨 Interface do Dashboard

### **Cores do Sistema:**
- **Roxo Vibrante**: `#9933ff` - Destaque primário
- **Rosa**: `#ff69b4` - Detalhes secundários
- **Dourado**: `#ffd700` - Títulos e destaques
- **Verde Sucesso**: `#00ff88` - Mensagens de sucesso
- **Amarelo Aviso**: `#ffaa00` - Alertas
- **Vermelho Perigo**: `#ff3366` - Ações críticas

### **Componentes:**
- **Header** fixo no topo com navegação
- **Cards** com hover e animações
- **Formulários** organizados em seções
- **Action Bar** fixa na parte inferior
- **Toast** de notificações no canto superior direito
- **Modal** para preview de código

---

## 🔧 Recursos Técnicos

### **Tecnologias:**
- HTML5 + CSS3 moderno
- JavaScript Vanilla (sem dependências!)
- Animações CSS suaves
- Responsive Design (mobile-friendly)

### **Compatibilidade:**
- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Opera
- ⚠️ IE não suportado

### **Requisitos:**
- Navegador moderno
- JavaScript habilitado
- Nenhuma instalação necessária!

---

## 📊 Fluxo de Trabalho

```
┌─────────────────┐
│ Abrir Dashboard │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Selecionar Jogo │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Editar Valores  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Preview (Opção) │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Salvar & Baixar │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Substituir      │
│ Arquivo         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Recarregar Site │
│ (Ctrl + F5)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Testar Mudanças │
└─────────────────┘
```

---

## 🆘 Solução de Problemas

### **Problema: Arquivo não baixa**
**Solução:**
- Verifique se o navegador permite downloads
- Tente outro navegador
- Desative bloqueadores de popup

### **Problema: Valores não mudam no site**
**Solução:**
- Limpe o cache (Ctrl + Shift + Delete)
- Force reload (Ctrl + F5)
- Verifique se substituiu o arquivo na pasta correta

### **Problema: Código com erro**
**Solução:**
- Use sempre ponto para decimais
- Verifique se preencheu todos os campos obrigatórios
- Use o botão "Resetar" e tente novamente

### **Problema: Dashboard não abre**
**Solução:**
- Verifique se `dashboard.js` está na mesma pasta
- Abra pelo caminho completo do arquivo
- Verifique se JavaScript está habilitado

---

## 🎓 Exemplos Práticos

### **Exemplo 1: Aumentar preço do Gold (MIR4)**
```
1. Clique no card "MIR4"
2. Localize "1k - 4.9k Gold"
3. Mude de "27.00" para "30.00"
4. Clique "Salvar & Baixar"
5. Substitua Mir4/config-precos.js
6. Recarregue a página do MIR4
```

### **Exemplo 2: Criar promoção (Odin)**
```
1. Clique no card "ODIN"
2. Use a Calculadora de Desconto:
   - Original: 100
   - Desconto: 20
   - Resultado: 80.00
3. Copie o resultado para o campo desejado
4. Salve e aplique
```

### **Exemplo 3: Ajustar faixas (Wemix)**
```
1. Clique no card "WEMIX"
2. Faixa 1 - mude preço de 5.50 para 6.00
3. Faixa 3 - mude margem de 15% para 20%
4. Preview para conferir
5. Salve e aplique
```

---

## 📈 Vantagens do Dashboard

| Antes (Manual) | Depois (Dashboard) |
|----------------|-------------------|
| ❌ Editar código diretamente | ✅ Interface visual |
| ❌ Risco de erro de sintaxe | ✅ Geração automática |
| ❌ Difícil de entender | ✅ Super intuitivo |
| ❌ Sem validação | ✅ Campos validados |
| ❌ Sem preview | ✅ Preview em tempo real |
| ❌ Documentação separada | ✅ Tudo integrado |

---

## 🎁 Recursos Extras

### **Toast Notifications**
- ✅ Sucesso (verde)
- ⚠️ Aviso (amarelo)
- ❌ Erro (vermelho)

### **Calculadora (Odin)**
- Calcula desconto automaticamente
- Mostra resultado em tempo real

### **Validação**
- Campos numéricos validados
- Mensagens de erro claras

### **Responsivo**
- Funciona em desktop
- Funciona em tablet
- Funciona em mobile

---

## 🔮 Futuras Melhorias (Possíveis)

- [ ] Histórico de mudanças
- [ ] Backup automático
- [ ] Comparação de versões
- [ ] Sincronização com servidor
- [ ] Múltiplos usuários
- [ ] Logs de atividade
- [ ] Templates salvos
- [ ] Importação/Exportação em lote

---

## 📞 Suporte

Para dúvidas ou problemas:
1. Consulte este README
2. Veja os arquivos `GUIA_PRECOS.md`
3. Use o botão "❓ Ajuda" no dashboard

---

═══════════════════════════════════════════════════════════════
          ⚙️ Dashboard criado com 💜 para você!
═══════════════════════════════════════════════════════════════

**Versão**: 1.0.0  
**Data**: 2024  
**Status**: ✅ Totalmente funcional com 5 jogos implementados!

