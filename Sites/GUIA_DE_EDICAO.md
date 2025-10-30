# 📝 GUIA DE EDIÇÃO - DAOSHI STORE

## 🎯 Como Fazer Alterações no Site

Todas as configurações do site estão centralizadas no arquivo **`config.js`**. Você pode editar QUALQUER texto, link ou valor diretamente nesse arquivo, sem precisar mexer no HTML!

---

## 📂 Estrutura de Arquivos

```
Sites/
├── index.html          # Página principal (NÃO edite aqui!)
├── config.js           # ⭐ EDITE AQUI! (Todas as configurações)
├── Mir4/              # Site do MIR4
├── Nightcrows/        # Site do Nightcrows
├── Odin/              # Site do Odin
├── Ymir/              # Site do Ymir
└── Wemix/             # Site do Wemix
```

---

## ✏️ O QUE VOCÊ PODE EDITAR NO `config.js`

### 1️⃣ **INFORMAÇÕES DA LOJA**

```javascript
loja: {
  nome: "DAOSHI STORE",           // Nome da loja
  logo: "⭐💎⭐",                   // Logo/emoji
  tagline: "✨ A Loja Premium...",  // Frase principal
  subtitle: "🎮 5 Jogos...",       // Subtítulo
  descricao: "A DAOSHI STORE é...", // Descrição longa
  missao: "Trabalhamos com..."     // Missão da empresa
}
```

**Como usar:**
- Mude o `nome` para alterar o nome da loja em todo o site
- Mude `tagline` para alterar a frase principal no topo
- Mude `descricao` e `missao` para alterar textos da página "Sobre"

---

### 2️⃣ **ESTATÍSTICAS**

```javascript
stats: [
  { numero: "5.000+", label: "Clientes Satisfeitos" },
  { numero: "50.000+", label: "Transações Realizadas" },
  // ...
]
```

**Como usar:**
- Mude os números para atualizar as estatísticas
- Adicione ou remova itens da lista

---

### 3️⃣ **JOGOS** (Mais importante!)

```javascript
jogos: [
  {
    id: "mir4",                    // ID único (não mude!)
    nome: "MIR4",                  // Nome completo
    icone: "https://i.imgur...",   // URL do ícone
    iconeGrande: true,             // true = ícone maior
    emoji: "⚔️",                    // Emoji do jogo
    descricaoCurta: "Gold...",     // Descrição curta (home)
    descricaoLonga: "O melhor...", // Descrição longa (jogos)
    url: "Mir4/index.html",        // Caminho do site do jogo
    features: [                     // Lista de features
      "Calculadora de Gold...",
      "Conversão Dollar/Real...",
      // ...
    ]
  },
  // ... outros jogos
]
```

**Como usar:**
- **Adicionar novo jogo**: Copie um bloco inteiro e cole no final da lista
- **Mudar ícone**: Altere a URL em `icone`
- **Mudar tamanho do ícone**: `iconeGrande: true` (grande) ou `false` (normal)
- **Mudar descrições**: Edite `descricaoCurta` e `descricaoLonga`
- **Adicionar/remover features**: Edite a lista `features`
- **Mudar link do jogo**: Altere `url`

---

### 4️⃣ **DEPOIMENTOS**

```javascript
depoimentos: [
  {
    avatar: "👤",
    nome: "João Silva",
    rating: "⭐⭐⭐⭐⭐",
    texto: "Melhor loja de games!..."
  },
  // ...
]
```

**Como usar:**
- Adicione ou remova depoimentos
- Mude nomes, textos e avaliações

---

### 5️⃣ **CARACTERÍSTICAS/DIFERENCIAIS**

```javascript
features: [
  {
    icone: "🚀",
    titulo: "ENTREGA RÁPIDA",
    texto: "Receba seus itens..."
  },
  // ...
]
```

**Como usar:**
- Mude ícones, títulos e textos
- Adicione novos diferenciais

---

### 6️⃣ **REDES SOCIAIS**

```javascript
social: [
  {
    nome: "Discord",
    icone: "💬",
    descricao: "Junte-se à nossa...",
    url: "https://discord.gg/daoshi",
    textoBotao: "Entrar no Discord"
  },
  // ...
]
```

**Como usar:**
- Mude URLs das redes sociais
- Altere textos e descrições
- Adicione novas redes

---

### 7️⃣ **FOOTER**

```javascript
footer: {
  descricao: "A sua loja premium...",
  copyright: "© 2025 Daoshi Store...",
  mensagem: "Feito com 💜..."
}
```

**Como usar:**
- Mude textos do rodapé
- Atualize ano do copyright

---

### 8️⃣ **BOTÕES E TEXTOS**

```javascript
botoes: {
  verJogos: "🎮 VER JOGOS",
  faleConosco: "💬 FALE CONOSCO",
  voltarInicio: "🏠 VOLTAR AO INÍCIO",
  acessar: "Acessar"
}
```

**Como usar:**
- Mude textos de todos os botões do site

---

## 📝 EXEMPLOS PRÁTICOS

### ✅ Exemplo 1: Mudar nome da loja

```javascript
// ANTES
loja: {
  nome: "DAOSHI STORE",
  // ...
}

// DEPOIS
loja: {
  nome: "MEGA GAMES STORE",
  // ...
}
```

---

### ✅ Exemplo 2: Adicionar novo jogo

```javascript
jogos: [
  // ... jogos existentes ...
  {
    id: "novogame",
    nome: "NOVO GAME",
    icone: "https://i.imgur.com/SUAIMAGEM.png",
    iconeGrande: false,
    emoji: "🎮",
    descricaoCurta: "Descrição curta aqui",
    descricaoLonga: "Descrição longa aqui",
    url: "NovoGame/index.html",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3"
    ]
  }
]
```

**IMPORTANTE**: Depois de adicionar, você precisa criar a seção HTML correspondente no `index.html`:

```html
<div class="section" id="novogame">
  <div class="game-frame-container">
    <iframe src="NovoGame/index.html"></iframe>
  </div>
</div>
```

---

### ✅ Exemplo 3: Mudar ícone de um jogo

```javascript
// Procure o jogo no array
jogos: [
  {
    id: "mir4",
    nome: "MIR4",
    icone: "https://i.imgur.com/XrXphs0.png", // URL ANTIGA
    // ...
  }
]

// Mude a URL
jogos: [
  {
    id: "mir4",
    nome: "MIR4",
    icone: "https://i.imgur.com/NOVAIMAGEM.png", // URL NOVA
    // ...
  }
]
```

---

### ✅ Exemplo 4: Mudar link das redes sociais

```javascript
social: [
  {
    nome: "Discord",
    icone: "💬",
    descricao: "Junte-se à nossa...",
    url: "https://discord.gg/SEULINK",  // ⬅️ Mude aqui
    textoBotao: "Entrar no Discord"
  }
]
```

---

### ✅ Exemplo 5: Mudar estatísticas

```javascript
stats: [
  { numero: "10.000+", label: "Clientes Satisfeitos" },  // ⬅️ Mudei de 5.000+ para 10.000+
  { numero: "100.000+", label: "Transações Realizadas" }, // ⬅️ Mudei de 50.000+ para 100.000+
  // ...
]
```

---

## 🚀 COMO APLICAR AS MUDANÇAS

1. **Abra o arquivo** `config.js` em um editor de texto
2. **Faça suas alterações**
3. **Salve o arquivo** (Ctrl + S)
4. **Abra ou atualize** a página `index.html` no navegador
5. **Pressione Ctrl + F5** para recarregar (limpa cache)

---

## ⚠️ DICAS IMPORTANTES

✅ **SEMPRE use vírgulas** entre os itens de uma lista
✅ **SEMPRE use aspas** (`"`) para textos
✅ **NÃO coloque vírgula** no último item de uma lista
✅ **Mantenha o formato** dos objetos `{ chave: "valor" }`
✅ **Teste no navegador** após cada mudança

❌ **NÃO mude** os `id` dos jogos
❌ **NÃO remova** as chaves principais (loja, jogos, stats, etc.)
❌ **NÃO esqueça** de fechar aspas e colchetes

---

## 🛠️ SOLUÇÃO DE PROBLEMAS

### Problema: Site não atualiza
**Solução**: Pressione `Ctrl + F5` no navegador para limpar o cache

### Problema: Site fica em branco
**Solução**: Verifique se há erros de sintaxe no `config.js` (vírgulas faltando, aspas não fechadas)

### Problema: Ícone não aparece
**Solução**: Verifique se a URL da imagem está correta e acessível

---

## 📞 SUPORTE

Se tiver dúvidas, consulte este guia ou peça ajuda! 💜

**Lembre-se**: Edite apenas o `config.js`, o HTML se atualiza automaticamente! ✨

