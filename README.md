# 🎮 Daoshi Store - Game Shop Platform

![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)
![Made with Love](https://img.shields.io/badge/Made%20with-💜-purple)

Plataforma completa de venda de itens para games com tema pixel art retrô!

---

## 🚀 Acesso Rápido

**Site Principal:** [https://[seu-usuario].github.io/[seu-repositorio]/](https://[seu-usuario].github.io/[seu-repositorio]/)

> O site redireciona automaticamente para `Sites/index.html`

---

## 🎯 Jogos Disponíveis

| Jogo | Recursos |
|------|----------|
| **MIR4** ⚔️ | Gold por faixas + Top Up |
| **Nightcrows** 🦇 | TWD + Top Up |
| **Odin Valhalla** ⚡ | Pacotes de Diamonds |
| **Legends of Ymir** ❄️ | Top Up + TWD |
| **Wemix** 💎 | Conversão WEMIX/BRL |

---

## 📁 Estrutura do Projeto

```
D:\Cursor\
├── index.html                    # Redirecionamento para Sites/
├── Sites/
│   ├── index.html               # 🏠 Página Principal
│   ├── config.js                # ⚙️ Configuração do Site
│   │
│   ├── Mir4/
│   │   ├── index.html
│   │   └── config-precos.js
│   │
│   ├── Nightcrows/
│   │   ├── index.html
│   │   └── config-precos.js
│   │
│   ├── Odin/
│   │   ├── index.html
│   │   └── config-precos.js
│   │
│   ├── Ymir/
│   │   ├── index.html
│   │   └── config-precos.js
│   │
│   ├── Wemix/
│   │   ├── index.html
│   │   └── config-precos.js
│   │
│   ├── Preços/
│   │   └── index.html
│   │
│   ├── dashboard.html           # 🎛️ Dashboard Admin
│   ├── dashboard.js
│   │
│   ├── git-server.js            # 🔧 Servidor Git Local
│   ├── auto-start-git.vbs
│   └── iniciar-servidor.bat
│
├── atualizar.bat                # 🚀 Script de Deploy
└── README.md                    # 📖 Este arquivo
```

---

## ⚙️ Configuração do GitHub Pages

### 🔧 Passo a Passo:

1. **Vá para Settings → Pages**
2. **Source:** Selecione `main` branch
3. **Folder:** Selecione `/ (root)`
4. **Clique em Save**

✅ **Pronto!** O site será publicado em alguns minutos.

### 🎯 Como Funciona:

```
github.io/seu-repo/
         ↓
    index.html (raiz)
         ↓
  (redireciona para)
         ↓
    Sites/index.html
```

---

## 🛠️ Ferramentas Incluídas

### 📊 **Dashboard Admin**
- Edição visual de preços
- Salvamento direto via File System API
- Geração de configurações

### 🔄 **Sistema Git Integrado**
- Servidor Node.js local
- Commit & Push pelo dashboard
- Sem necessidade de CMD

### ⚡ **Script de Deploy Automático**
```bash
# Execute o atualizar.bat
atualizar.bat
```

---

## 📝 Como Editar Preços

### **Opção 1: Dashboard** (Recomendado)
```
1. Abra: Sites/dashboard.html
2. Selecione o jogo
3. Edite os preços
4. Clique em "Save & Download"
5. Faça Git Push pelo botão integrado
```

### **Opção 2: Arquivos de Configuração**
```
Edite manualmente:
- Sites/config.js (site principal)
- Sites/[Jogo]/config-precos.js (cada jogo)
```

---

## 🚀 Deploy Rápido

### **Com o Script Automático:**
```bash
1. Execute: atualizar.bat
2. Digite a mensagem do commit
3. Confirme o envio
4. Pronto! ✅
```

### **Ou Manualmente:**
```bash
cd D:\Cursor
git add .
git commit -m "Atualização"
git push
```

---

## 🎨 Recursos Visuais

- ✅ Tema Pixel Art Retrô
- ✅ Paleta Roxa/Dourada
- ✅ Animações CSS
- ✅ Responsivo (Mobile/Desktop)
- ✅ Efeitos de Scanlines
- ✅ GIF Temática

---

## 📞 Contato

- **Discord:** [Link do Discord](https://discord.gg/daoshi)
- **Facebook:** [Daoshi Store](https://www.facebook.com/profile.php?id=61581292253937)
- **Instagram:** [@daoshi.store](https://www.instagram.com/daoshi.store/)

---

## 📋 To-Do

- [ ] Adicionar mais jogos
- [ ] Sistema de carrinho
- [ ] Integração com pagamento
- [ ] Painel de pedidos
- [ ] Histórico de transações

---

## 🤝 Contribuindo

Este é um projeto privado, mas sugestões são bem-vindas!

---

## 📄 Licença

© 2024 Daoshi Store. Todos os direitos reservados.

---

<div align="center">

**Feito com 💜 e muito ☕**

[⬆ Voltar ao topo](#-daoshi-store---game-shop-platform)

</div>

