╔═══════════════════════════════════════════════════════════════╗
║                                                               ║
║              ⭐ DAOSHI STORE - SISTEMA COMPLETO ⭐            ║
║                  DE CONFIGURAÇÃO CENTRALIZADA                 ║
║                                                               ║
╚═══════════════════════════════════════════════════════════════╝


📋 ÍNDICE DE ARQUIVOS DE CONFIGURAÇÃO
═══════════════════════════════════════════════════════════════

🌐 SITE PRINCIPAL (Main Page):
   📄 config.js                → Textos, jogos, redes sociais
   📖 GUIA_DE_EDICAO.md       → Guia completo do site principal
   📝 LEIA-ME.txt             → Guia rápido do site principal

💰 PREÇOS DOS JOGOS:
   📄 Mir4/config-precos.js   → Preços e taxas MIR4
   📄 Nightcrows/config-precos.js → Preços Nightcrows
   📄 Odin/config-precos.js   → Preços e pacotes Odin
   📄 Ymir/config-precos.js   → Preços e pacotes Ymir
   📄 Wemix/config-precos.js  → Taxas e conversão Wemix
   
   📖 GUIA_PRECOS.md          → Guia completo de preços
   📝 GUIA_PRECOS_RAPIDO.txt  → Guia rápido de preços


🎯 O QUE CADA ARQUIVO FAZ
═══════════════════════════════════════════════════════════════

config.js
─────────────────────────────────────────────────────────────
   • Nome da loja e logo
   • Textos do site principal (home, sobre, contato)
   • Lista de jogos e suas informações
   • Links das redes sociais (Discord, Instagram, Facebook)
   • Ícones dos jogos
   • Depoimentos de clientes
   • Estatísticas
   • Textos de botões
   • Tudo da página principal!

Mir4/config-precos.js
─────────────────────────────────────────────────────────────
   • Taxa de conversão Gold → Dollar
   • Taxa de venda e compra
   • Dados de pagamento (PIX, Binance)
   • Cotação do dólar
   • Limites de transação
   • Textos e instruções

Nightcrows/config-precos.js
─────────────────────────────────────────────────────────────
   • Preço por Diamond (em R$)
   • Limites de compra
   • Promoções e descontos
   • Dados de pagamento
   • Textos e instruções

Odin/config-precos.js
─────────────────────────────────────────────────────────────
   • Pacotes de Diamonds (5 pacotes padrão)
   • Preços de cada pacote
   • Descontos por pacote
   • Compra personalizada
   • Sistema de bônus
   • Dados de pagamento

Ymir/config-precos.js
─────────────────────────────────────────────────────────────
   • Pacotes completos (Bronze, Prata, Ouro, Diamante)
   • Itens de cada pacote
   • Preços dos pacotes
   • Itens avulsos (Gold, Cristais, Gemas)
   • Promoções especiais
   • Sistema de login

Wemix/config-precos.js
─────────────────────────────────────────────────────────────
   • Cotação WEMIX/USD
   • Taxas de compra e venda
   • Taxas especiais por volume
   • Limites de transação
   • Endereço da carteira
   • Dados bancários


🚀 FLUXO DE TRABALHO PARA EDIÇÕES
═══════════════════════════════════════════════════════════════

┌─────────────────────────────────────┐
│ QUER MUDAR ALGO NO SITE PRINCIPAL?  │
│ (nome, textos, jogos, redes sociais)│
└──────────────┬──────────────────────┘
               │
               ▼
         config.js
         GUIA_DE_EDICAO.md

┌─────────────────────────────────────┐
│ QUER MUDAR PREÇOS DE UM JOGO?       │
│ (valores, taxas, pacotes)           │
└──────────────┬──────────────────────┘
               │
               ▼
    Jogo/config-precos.js
    GUIA_PRECOS.md


💡 EXEMPLOS DE USO
═══════════════════════════════════════════════════════════════

CENÁRIO 1: Adicionar novo jogo no site
───────────────────────────────────────────────────────────────
   1. Abra: config.js
   2. Vá para a seção "jogos:"
   3. Copie um jogo existente
   4. Cole e modifique as informações
   5. Salve e atualize o navegador

CENÁRIO 2: Mudar preço dos Diamonds (Nightcrows)
───────────────────────────────────────────────────────────────
   1. Abra: Nightcrows/config-precos.js
   2. Procure: valorEmReais
   3. Mude o número
   4. Salve e atualize o navegador

CENÁRIO 3: Criar promoção no Odin
───────────────────────────────────────────────────────────────
   1. Abra: Odin/config-precos.js
   2. Encontre o pacote desejado
   3. Adicione ou mude: desconto: 0.20
   4. Salve e atualize o navegador

CENÁRIO 4: Mudar link do Discord
───────────────────────────────────────────────────────────────
   1. Abra: config.js
   2. Procure: discord.gg/daoshi
   3. Mude para seu link
   4. Salve e atualize o navegador

CENÁRIO 5: Adicionar novo pacote no Ymir
───────────────────────────────────────────────────────────────
   1. Abra: Ymir/config-precos.js
   2. Vá para a seção "pacotes:"
   3. Copie um pacote existente (pacote1, pacote2, etc.)
   4. Cole como pacote5
   5. Modifique nome, itens e preço
   6. Salve e atualize o navegador


⚠️ REGRAS DE OURO
═══════════════════════════════════════════════════════════════

1. SEMPRE faça backup antes de mudanças grandes
2. Teste IMEDIATAMENTE após cada mudança
3. Use PONTO para decimais (5.50, não 5,50)
4. Mantenha as VÍRGULAS entre objetos
5. NÃO mude os IDs dos jogos
6. NÃO remova estruturas principais
7. DOCUMENTE suas mudanças importantes


🔧 SOLUÇÃO DE PROBLEMAS
═══════════════════════════════════════════════════════════════

Problema: Mudei mas não aparece
───────────────────────────────────────────────────────────────
   ✅ Pressione Ctrl + F5 (limpa cache)
   ✅ Verifique se salvou o arquivo
   ✅ Abra o Console (F12) para ver erros

Problema: Site ficou em branco
───────────────────────────────────────────────────────────────
   ✅ Erro de sintaxe no arquivo JS
   ✅ Verifique vírgulas e aspas
   ✅ Abra Console (F12) para ver o erro
   ✅ Desfaça a última mudança

Problema: Preço não atualiza
───────────────────────────────────────────────────────────────
   ✅ Verifique se editou o arquivo certo
   ✅ Verifique se o jogo carrega o config
   ✅ Limpe o cache (Ctrl + F5)

Problema: Como reverter mudanças?
───────────────────────────────────────────────────────────────
   ✅ Use Ctrl + Z no editor
   ✅ Restaure do backup
   ✅ Recarregue do repositório (se usar Git)


📞 REFERÊNCIA RÁPIDA
═══════════════════════════════════════════════════════════════

ABRIR ARQUIVO:          Ctrl + O
SALVAR ARQUIVO:         Ctrl + S
PROCURAR NO ARQUIVO:    Ctrl + F
DESFAZER:              Ctrl + Z
REFAZER:               Ctrl + Y
ATUALIZAR NAVEGADOR:   Ctrl + F5 (limpa cache)
ABRIR CONSOLE:         F12


📂 ESTRUTURA COMPLETA DOS ARQUIVOS
═══════════════════════════════════════════════════════════════

Sites/
├── index.html                    ← Página principal
├── config.js                     ← ⭐ Config site principal
├── GUIA_DE_EDICAO.md            ← Guia site principal
├── LEIA-ME.txt                  ← Guia rápido site
├── GUIA_PRECOS.md               ← 💰 Guia completo preços
├── GUIA_PRECOS_RAPIDO.txt       ← Guia rápido preços
├── README_CONFIGURACAO.txt       ← Este arquivo!
│
├── Mir4/
│   ├── index.html
│   └── config-precos.js          ← ⭐ Preços MIR4
│
├── Nightcrows/
│   ├── index.html
│   └── config-precos.js          ← ⭐ Preços Nightcrows
│
├── Odin/
│   ├── index.html
│   └── config-precos.js          ← ⭐ Preços Odin
│
├── Ymir/
│   ├── index.html
│   └── config-precos.js          ← ⭐ Preços Ymir
│
└── Wemix/
    ├── index.html
    └── config-precos.js          ← ⭐ Preços Wemix


✨ RESUMO
═══════════════════════════════════════════════════════════════

TUDO está organizado em arquivos de configuração separados!

• Site Principal → config.js
• Preços dos Jogos → Jogo/config-precos.js
• Guias Completos → GUIA_DE_EDICAO.md e GUIA_PRECOS.md
• Guias Rápidos → LEIA-ME.txt e GUIA_PRECOS_RAPIDO.txt

Basta editar o arquivo correto, salvar e atualizar! 🚀


═══════════════════════════════════════════════════════════════
        🎮 Sistema desenvolvido com 💜 para você!
═══════════════════════════════════════════════════════════════

