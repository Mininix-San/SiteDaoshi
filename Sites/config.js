// ===== CONFIGURAÇÃO DA DAOSHI STORE =====
// Este arquivo centraliza TODAS as configurações editáveis do site
// Edite aqui para mudar textos, valores, links e informações

const SITE_CONFIG = {
  
  // ===== INFORMAÇÕES DA LOJA =====
  loja: {
    nome: "DAOSHI STORE",
    logo: "⭐💎⭐",
    tagline: "✨ A Loja Premium de Games que Você Confia ✨",
    subtitle: "🎮 8 Jogos • Melhores Preços • Entrega Instantânea • Suporte 24/7 🚀",
    descricao: "A DAOSHI STORE é a sua loja premium de confiança para serviços de games. Com anos de experiência no mercado, oferecemos as melhores soluções para jogadores que buscam qualidade, segurança e preços justos.",
    missao: "Trabalhamos com os principais jogos do momento, oferecendo Gold, Diamonds, Top Up e muito mais. Nossa missão é proporcionar a melhor experiência de compra para a comunidade gamer."
  },

  // ===== ESTATÍSTICAS =====
  stats: [
    { numero: "10.000+", label: "Clientes Satisfeitos" },
    { numero: "100.000+", label: "Transações Realizadas" },
    { numero: "auto", label: "Jogos Disponíveis" }, // "auto" = conta automaticamente
    { numero: "24/7", label: "Suporte Online" }
  ],

  // ===== JOGOS =====
  jogos: [
    {
      id: "mir4",
      nome: "MIR4",
      icone: "https://i.imgur.com/XrXphs0.png",
      iconeGrande: true,
      emoji: "⚔️",
      descricaoCurta: "Gold, Top Up e Serviços Premium",
      descricaoLonga: "O melhor serviço de Gold e Top Up para MIR4!",
      url: "Mir4/index.html",
      features: [
        "Calculadora de Gold Automática",
        "Conversão Dollar/Real em Tempo Real",
        "Múltiplas Formas de Pagamento",
        "Entrega Instantânea",
        "Suporte Dedicado"
      ]
    },
    {
      id: "raven2",
      nome: "Raven II",
      icone: "https://i.imgur.com/jgNSgdY.png",
      iconeGrande: false,
      emoji: "✝︎",
      descricaoCurta: "RAVEN II",
      descricaoLonga: "Venha comprar packs para sua conta ^^",
      url: "raven2/index.html",
      features: [
        "Entrega Rápida",
        "Suporte 24/7",
        "100% Seguro",
        "Entrega Garantida",
        "Melhor valor do mercado"
      ]
    },
    {
      id: "rohan2",
      nome: "Rohan II",
      icone: "https://i.imgur.com/nZg3UYE.png",
      iconeGrande: false,
      emoji: "✳︎",
      descricaoCurta: "ROHAN II",
      descricaoLonga: "Venha comprar packs pra sua conta ^^",
      url: "rohan2/index.html",
      features: [
        "Entrega Rápida",
        "Suporte 24/7",
        "100% Seguro",
        "Entrega Garantida",
        "Melhor preço do mercado"
      ]
    },
    {
      id: "genshin",
      nome: "Genshin Impact",
      icone: "https://i.imgur.com/Q1T1tta.png",
      iconeGrande: false,
      emoji: "⚔️",
      descricaoCurta: "GENSHIN IMPACT",
      descricaoLonga: "Genesis Crystals e Benção da Lua com os melhores preços!",
      url: "genshin/index.html",
      features: [
        "Entrega Instantânea",
        "Suporte 24/7",
        "100% Seguro",
        "Melhor Preço",
        "Genesis Crystals"
      ]
    },
    {
      id: "nightcrows",
      nome: "NIGHTCROWS",
      icone: "https://i.imgur.com/LLGJGNI.png",
      iconeGrande: true,
      emoji: "🦇",
      descricaoCurta: "Compra de Diamonds Rápida e Segura",
      descricaoLonga: "Compre Diamonds para Nightcrows com segurança!",
      url: "Nightcrows/index.html",
      features: [
        "Compra Rápida de Diamonds",
        "Preços Competitivos",
        "Sistema de Pagamento Seguro",
        "Entrega Garantida",
        "Suporte 24/7"
      ]
    },
    {
      id: "odin",
      nome: "ODIN: VALHALLA",
      icone: "https://i.imgur.com/aLsQf6y.png",
      iconeGrande: true,
      emoji: "⚡",
      descricaoCurta: "Valhalla Rising - Diamonds e Pacotes",
      descricaoLonga: "Top Up de Diamonds para Odin Valhalla Rising!",
      url: "Odin/index.html",
      features: [
        "Pacotes de Diamonds",
        "Cálculo Automático de Valores",
        "Desconto em Grandes Compras",
        "Pagamento Facilitado",
        "Entrega Imediata"
      ]
    },
    {
      id: "ymir",
      nome: "LEGENDS OF YMIR",
      nomeCurto: "YMIR",
      icone: "https://i.imgur.com/Bna4U0c.png",
      iconeGrande: false,
      emoji: "❄️",
      descricaoCurta: "Legends of Ymir - Pacotes e Itens",
      descricaoLonga: "Pacotes exclusivos e itens para Legends of Ymir!",
      url: "Ymir/index.html",
      features: [
        "Pacotes Premium",
        "Sistema de Login Integrado",
        "Compra de Itens Especiais",
        "Promoções Exclusivas",
        "Suporte Personalizado"
      ]
    },
    {
      id: "wemix",
      nome: "WEMIX",
      icone: "https://i.imgur.com/YTGq40y.png",
      iconeGrande: false,
      emoji: "💎",
      descricaoCurta: "Conversão WEMIX/BRL Facilitada",
      descricaoLonga: "Conversão de WEMIX para Real facilitada!",
      url: "Wemix/index.html",
      features: [
        "Conversor WEMIX/BRL",
        "Taxas Transparentes",
        "Cotação em Tempo Real",
        "Transferência Rápida",
        "Sistema Seguro"
      ]
    }
  ],

  // ===== CARACTERÍSTICAS/DIFERENCIAIS =====
  features: [
    {
      icone: "🚀",
      titulo: "ENTREGA RÁPIDA",
      texto: "Receba seus itens instantaneamente após a confirmação do pagamento"
    },
    {
      icone: "🔒",
      titulo: "100% SEGURO",
      texto: "Transações protegidas e dados criptografados para sua segurança"
    },
    {
      icone: "💰",
      titulo: "MELHOR PREÇO",
      texto: "Preços competitivos e justos para todos os jogadores"
    },
    {
      icone: "💬",
      titulo: "SUPORTE 24/7",
      texto: "Equipe sempre disponível para ajudar você"
    },
    {
      icone: "⭐",
      titulo: "5.000+ CLIENTES",
      texto: "Milhares de jogadores confiam em nossos serviços"
    },
    {
      icone: "✅",
      titulo: "GARANTIA TOTAL",
      texto: "Devolução garantida em caso de problemas"
    }
  ],

  // ===== REDES SOCIAIS =====
  social: [
    {
      nome: "Discord",
      icone: "https://i.imgur.com/7Dmdj3I.png",
      descricao: "Junte-se à nossa comunidade no Discord! Suporte 24/7, promoções exclusivas e muito mais!",
      url: "https://discord.gg/daoshi",
      textoBotao: "Entrar no Discord"
    },
    {
      nome: "Instagram",
      icone: "https://i.imgur.com/hfAONeB.png",
      descricao: "Siga-nos no Instagram para novidades, promoções e atualizações sobre os jogos!",
      url: "https://www.instagram.com/daoshi.store/",
      textoBotao: "Seguir no Instagram"
    },
    {
      nome: "Facebook",
      icone: "https://i.imgur.com/cvwtPa9.png",
      descricao: "Curta nossa página no Facebook e fique por dentro de todas as novidades da loja!",
      url: "https://www.facebook.com/profile.php?id=61581292253937",
      textoBotao: "Curtir no Facebook"
    }
  ],

  // ===== FOOTER =====
  footer: {
    descricao: "A sua loja premium de games. Qualidade, segurança e os melhores preços do mercado!",
    copyright: "© 2025 Daoshi Store • Todos os direitos reservados",
    mensagem: "Feito com 💜 para a comunidade gamer"
  },

  // ===== NAVEGAÇÃO =====
  nav: {
    links: [
      { id: "home", icone: "🏠", texto: "Início" },
      { id: "games", icone: "🎮", texto: "Jogos" },
      { id: "about", icone: "📖", texto: "Sobre" },
      { id: "contact", icone: "💬", texto: "Contato" }
    ]
  },

  // ===== TÍTULOS DE SEÇÕES =====
  titulos: {
    jogos: "🎮 NOSSOS JOGOS 🎮",
    todosJogos: "🎮 TODOS OS JOGOS 🎮",
    sobre: "📖 SOBRE NÓS 📖",
    quemSomos: "💜 Quem Somos",
    contato: "💬 ENTRE EM CONTATO 💬"
  },

  // ===== BOTÕES =====
  botoes: {
    verJogos: "🎮 VER JOGOS",
    faleConosco: "💬 FALE CONOSCO",
    voltarInicio: "🏠 VOLTAR AO INÍCIO",
    acessar: "Acessar",
    abrirNovaAba: "🔗 Abrir em Nova Aba (Recomendado)"
  }
};

// Exporta a configuração para ser usada no HTML
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SITE_CONFIG;
}

