# 📋 SISTEMA DE CAMPOS DINÂMICOS DA CONTA

## 🎯 NOVA FUNCIONALIDADE IMPLEMENTADA!

Agora você pode configurar **quantos campos quiser** para solicitar informações da conta ao adicionar um novo jogo!

---

## ✨ RECURSOS

### 1️⃣ **Campos Personalizados**
- ✅ Adicione quantos campos quiser
- ✅ Defina o nome de cada campo (Login, Senha, ID, Email, etc.)
- ✅ Defina o placeholder (texto de exemplo) de cada campo
- ✅ Remova campos que não precisa

### 2️⃣ **Geração Automática no HTML**
- ✅ Todos os campos são gerados automaticamente no HTML
- ✅ Interface completa e funcional
- ✅ Visual retro pixelado mantido

### 3️⃣ **Botão Copiar Inteligente**
- ✅ Coleta todos os campos preenchidos
- ✅ Formata bonitinho no texto copiado
- ✅ Inclui preços e informações do pacote

---

## 🚀 COMO USAR

### **Passo 1: Abrir Dashboard**
```
1. Abra: dashboard.html
2. Clique em "ADICIONAR JOGO"
3. Role até a seção "📋 Campos de Informações da Conta"
```

### **Passo 2: Configurar Campos**

**Exemplo 1: Login e Senha**
```
Campo 1:
├─ Nome do Campo: Login
└─ Placeholder: Digite seu login

Campo 2 (clique "➕ Adicionar Novo Campo"):
├─ Nome do Campo: Senha
└─ Placeholder: Digite sua senha
```

**Exemplo 2: Jogo com mais informações**
```
Campo 1:
├─ Nome do Campo: ID da Conta
└─ Placeholder: Digite o ID da sua conta

Campo 2:
├─ Nome do Campo: Servidor
└─ Placeholder: Ex: América - Server 1

Campo 3:
├─ Nome do Campo: Personagem
└─ Placeholder: Nome do personagem principal

Campo 4:
├─ Nome do Campo: Email
└─ Placeholder: seu.email@example.com
```

### **Passo 3: Salvar o Jogo**
```
1. Preencha todos os outros campos (ID, Nome, Emoji, etc.)
2. Configure os pacotes
3. Clique "💾 Salvar Tudo"
4. O HTML será gerado COM TODOS OS CAMPOS!
```

---

## 📄 O QUE É GERADO

### **No HTML do Jogo:**

```html
<!-- Se você configurou: Login e Senha -->

<div class="form-group">
  <label>LOGIN</label>
  <input type="text" id="field1" placeholder="Digite seu login">
</div>

<div class="form-group">
  <label>SENHA</label>
  <input type="text" id="field2" placeholder="Digite sua senha">
</div>
```

### **No Botão Copiar:**

```
═══════════════════════════════
🎮 MEU JOGO - Pacotes
═══════════════════════════════

💎 PACOTE: $10.00 (-14%)
💰 VALOR: U$ 8.60
💵 TOTAL: R$ 53.72

📋 INFORMAÇÕES DA CONTA:
Login: meulogin123
Senha: minhasenha456

═══════════════════════════════
🏪 Daoshi Store - Loja Premium
═══════════════════════════════
```

---

## 🎨 BOTÕES E FUNÇÕES

### **➕ Adicionar Novo Campo**
- Adiciona um novo campo de informação
- Cada campo tem nome e placeholder personalizáveis
- Sem limite de campos!

### **❌ Remover**
- Remove o campo específico
- Não é possível remover o primeiro campo
- Os outros campos continuam funcionando normalmente

### **🔄 Limpar Formulário**
- Reseta todos os campos para o padrão (1 campo: Login)
- Limpa todos os outros dados do formulário

---

## 💡 EXEMPLOS DE USO

### **Jogo Simples (1 campo):**
```
Login
```

### **Jogo Normal (2-3 campos):**
```
Login
Senha
ID da Conta
```

### **Jogo Completo (4+ campos):**
```
ID da Conta
Servidor
Personagem
Email
Telefone
Data de Nascimento
```

---

## ⚙️ VALIDAÇÕES

### **No Dashboard:**
- ✅ Nome do campo é obrigatório
- ✅ Placeholder é opcional (gerado automaticamente se vazio)
- ✅ Campos vazios são ignorados

### **No Site do Jogo:**
- ⚠️ **TODOS os campos devem ser preenchidos** antes de copiar
- ⚠️ Se algum campo estiver vazio, mostra alerta
- ✅ Só copia quando tudo estiver preenchido

---

## 🔧 COMO FUNCIONA (Técnico)

### **1. Configuração (Dashboard):**
```javascript
// O dashboard coleta os campos configurados
const accountFields = [
  { id: 'field1', name: 'Login', placeholder: 'Digite seu login' },
  { id: 'field2', name: 'Senha', placeholder: 'Digite sua senha' }
];
```

### **2. Geração do HTML:**
```javascript
// Gera inputs dinamicamente
accountFields.map(field => `
  <div class="form-group">
    <label>${field.name.toUpperCase()}</label>
    <input type="text" id="${field.id}" placeholder="${field.placeholder}">
  </div>
`).join('')
```

### **3. Coleta dos Dados:**
```javascript
// Coleta todos os valores preenchidos
const accountData = [];
ACCOUNT_FIELDS.forEach(field => {
  const input = document.getElementById(field.id);
  const value = input.value.trim();
  accountData.push({ name: field.name, value: value });
});
```

### **4. Formatação para Copiar:**
```javascript
// Formata como texto
const accountInfo = accountData
  .map(field => `${field.name}: ${field.value}`)
  .join('\n');
```

---

## 🎯 CASOS DE USO REAIS

### **MIR4:**
```
Login
Senha
```

### **Nightcrows:**
```
Email
Senha
Servidor
Personagem
```

### **Odin:**
```
ID da Conta
Servidor
Classe
Level
```

### **Raven II:**
```
Email da Conta
Senha
Código de Verificação (se houver)
```

---

## ✅ CHECKLIST DE TESTE

### **Testar Adicionar Campos:**
```
□ Clique "➕ Adicionar Novo Campo"
□ Preencha nome e placeholder
□ Adicione 3-5 campos
□ Veja se todos aparecem corretamente
```

### **Testar Remover Campos:**
```
□ Adicione 3 campos
□ Remova o campo 2
□ Veja se campo 1 e 3 permanecem
```

### **Testar Geração do HTML:**
```
□ Configure 2-3 campos
□ Preencha o resto do formulário
□ Clique "📄 Visualizar HTML"
□ Veja se os campos aparecem no código
```

### **Testar No Site Final:**
```
□ Gere um jogo completo
□ Abra o index.html do jogo
□ Veja se todos os campos aparecem
□ Preencha todos os campos
□ Clique "📋 COPIAR INFORMAÇÕES"
□ Cole e veja se está tudo formatado
```

---

## 🆘 SOLUÇÃO DE PROBLEMAS

### **Campos não aparecem no HTML gerado:**
- Verifique se preencheu o "Nome do Campo"
- Campos com nome vazio são ignorados
- Reabra o dashboard e tente novamente

### **Botão copiar não funciona:**
- Preencha TODOS os campos da conta
- Se algum campo estiver vazio, não copia
- Veja o console do navegador (F12) para erros

### **Placeholder não aparece:**
- Se deixar vazio, é gerado automaticamente
- Será: "Digite [nome do campo em minúsculo]"
- Ex: Campo "Senha" → "Digite senha"

---

## 🎉 VANTAGENS

✅ **Flexibilidade Total:** Adapte para cada jogo
✅ **Facilidade:** Interface simples e intuitiva
✅ **Profissional:** Coleta todas informações necessárias
✅ **Organizado:** Tudo formatado automaticamente
✅ **Rápido:** Copia tudo com 1 clique

---

## 🚀 PRÓXIMOS PASSOS

1. **Teste com um jogo novo:**
   - Crie um jogo de teste
   - Configure 3-4 campos
   - Veja o resultado

2. **Atualize jogos existentes:**
   - Edite manualmente o HTML dos jogos antigos
   - Adicione os novos campos
   - Ajuste o JavaScript de copiar

3. **Personalize:**
   - Cada jogo pode ter campos diferentes
   - Adapte conforme a necessidade

---

**Agora você tem controle TOTAL sobre os campos de informação da conta!** 🎮✨

