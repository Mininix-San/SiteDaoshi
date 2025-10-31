// ═══════════════════════════════════════════════════════════════
// ⚙️ DASHBOARD ADMIN - DAOSHI STORE
// ═══════════════════════════════════════════════════════════════

let currentGame = null;
let currentConfig = null;
let projectDirectoryHandle = null; // Referência para a pasta do projeto

// Verificar se o navegador suporta File System Access API
const supportsFileSystemAccess = 'showDirectoryPicker' in window;

// Carregar configurações existentes ao abrir página de edição
async function loadCurrentConfig(game) {
  try {
    const response = await fetch(`${game.charAt(0).toUpperCase() + game.slice(1)}/config-precos.js`);
    const text = await response.text();
    // Extrai valores do arquivo
    parseConfigFile(game, text);
  } catch (error) {
    console.log('Usando valores padrão');
  }
}

// Navegar entre seções
function showSection(sectionId) {
  // Esconder todas as seções
  document.querySelectorAll('.admin-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Mostrar seção selecionada
  document.getElementById(sectionId).classList.add('active');
  
  // Atualizar botões de navegação
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  
  if (sectionId === 'home') {
    document.querySelectorAll('.nav-btn')[0].classList.add('active');
  }
  
  // Scroll para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Editar jogo específico (versão simples - volta para seções hardcoded)
function editGame(game) {
  currentGame = game;
  showSection(game);
  loadCurrentConfig(game);
}

// Resetar formulário para valores padrão
function resetForm(game) {
  if (!confirm('Tem certeza que deseja resetar todas as configurações para os valores padrão?')) {
    return;
  }
  
  const form = document.getElementById(`${game}Form`);
  if (form) {
    form.reset();
    showToast('Configurações resetadas!', 'warning');
  }
}

// Gerar configuração baseada no formulário
function generateConfig(game) {
  const form = document.getElementById(`${game}Form`);
  const formData = new FormData(form);
  const data = {};
  
  for (let [key, value] of formData.entries()) {
    data[key] = parseFloat(value) || value;
  }
  
  let configCode = '';
  
  switch(game) {
    case 'mir4':
      configCode = generateMir4Config(data);
      break;
    case 'nightcrows':
      configCode = generateNightcrowsConfig(data);
      break;
    case 'odin':
      configCode = generateOdinConfig(data);
      break;
    case 'ymir':
      configCode = generateYmirConfig(data);
      break;
    case 'wemix':
      configCode = generateWemixConfig(data);
      break;
    case 'genshin':
      configCode = generateGenshinConfig(data);
      break;
    case 'rohan2':
      configCode = generateRohan2Config(data);
      break;
    case 'raven2':
      configCode = generateRaven2Config(data);
      break;
  }
  
  return configCode;
}

// Gerar config MIR4
function generateMir4Config(data) {
  return `// ═══════════════════════════════════════════════════════════════
// ⚔️ CONFIGURAÇÃO DE PREÇOS - MIR4
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const MIR4_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: ${data.defaultExchangeRate}, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: ${(data.cardFeePercentage / 100).toFixed(2)}, // ${data.cardFeePercentage}%
  
  // ═══ PREÇOS DE GOLD (por 1000 Gold) ═══
  goldRates: {
    base: ${data.goldBase.toFixed(2)},        // 1k-4999 Gold
    above5k: ${data.gold5k.toFixed(2)},       // 5k-9999 Gold
    above10k: ${data.gold10k.toFixed(2)},     // 10k-19999 Gold
    above20k: ${data.gold20k.toFixed(2)},     // 20k+ Gold
    usdt: ${data.goldUsdt.toFixed(2)}         // Preço em USDT
  },
  
  // ═══ PACOTES DE TOP UP ═══
  topUpPackages: {
    1:   { price: ${data.pack1.toFixed(2)} },
    3:   { price: ${data.pack3.toFixed(2)} },
    5:   { price: ${data.pack5.toFixed(2)} },
    10:  { price: ${data.pack10.toFixed(2)} },
    30:  { price: ${data.pack30.toFixed(2)} },
    50:  { price: ${data.pack50.toFixed(2)} },
    100: { price: ${data.pack100.toFixed(2)} }
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.MIR4_CONFIG = MIR4_CONFIG;
}`;
}

// Gerar config Nightcrows
function generateNightcrowsConfig(data) {
  return `// ═══════════════════════════════════════════════════════════════
// 🦇 CONFIGURAÇÃO DE PREÇOS - NIGHTCROWS
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const NIGHTCROWS_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: ${data.defaultExchangeRate}, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: ${(data.cardFeePercentage / 100).toFixed(2)}, // ${data.cardFeePercentage}%
  
  // ═══ PACOTES DE TWD ═══
  twdPackages: {
    500:   { price: ${data.twd500.toFixed(2)} },
    800:   { price: ${data.twd800.toFixed(2)} },
    1000:  { price: ${data.twd1000.toFixed(2)} },
    1200:  { price: ${data.twd1200.toFixed(2)} },
    3000:  { price: ${data.twd3000.toFixed(2)} },
    3500:  { price: ${data.twd3500.toFixed(2)} },
    5000:  { price: ${data.twd5000.toFixed(2)} },
    7000:  { price: ${data.twd7000.toFixed(2)} },
    10000: { price: ${data.twd10000.toFixed(2)} },
    30000: { price: ${data.twd30000.toFixed(2)} }
  },
  
  // ═══ PACOTES DE TOP UP ═══
  topUpPackages: {
    5:   { price: ${data.topup5.toFixed(2)} },
    8:   { price: ${data.topup8.toFixed(2)} },
    10:  { price: ${data.topup10.toFixed(2)} },
    20:  { price: ${data.topup20.toFixed(2)} },
    30:  { price: ${data.topup30.toFixed(2)} },
    50:  { price: ${data.topup50.toFixed(2)} },
    100: { price: ${data.topup100.toFixed(2)} }
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.NIGHTCROWS_CONFIG = NIGHTCROWS_CONFIG;
}`;
}

// Gerar config Odin
function generateOdinConfig(data) {
  return `// ═══════════════════════════════════════════════════════════════
// ⚡ CONFIGURAÇÃO DE PREÇOS - ODIN VALHALLA RISING
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const ODIN_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  exchangeRate: ${data.exchangeRate}, // R$ por dólar
  
  // ═══ PREÇOS DOS PACOTES (já com desconto) ═══
  pacotePrecos: {
    4:  ${data.pack4.toFixed(2)},    // Pacote $4
    9:  ${data.pack9.toFixed(2)},    // Pacote $9
    23: ${data.pack23.toFixed(2)},   // Pacote $23
    30: ${data.pack30.toFixed(2)},   // Pacote $30
    40: ${data.pack40.toFixed(2)},   // Pacote $40
    80: ${data.pack80.toFixed(2)}    // Pacote $80
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.ODIN_CONFIG = ODIN_CONFIG;
}`;
}

// Gerar config Ymir
function generateYmirConfig(data) {
  return `// ═══════════════════════════════════════════════════════════════
// ❄️ CONFIGURAÇÃO DE PREÇOS - LEGENDS OF YMIR
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const YMIR_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  exchangeRate: ${data.exchangeRate}, // R$ por dólar
  
  // ═══ CONFIGURAÇÃO DOS PACOTES ═══
  CONFIG_PACOTES: [
    // Grupo 1
    { id: 'p1', valor: ${data.p1valor}, desconto: ${data.p1desconto}, grupo: 'grupo1' },
    { id: 'p2', valor: ${data.p2valor}, desconto: ${data.p2desconto}, grupo: 'grupo1' },
    
    // Grupo 2
    { id: 'p3', valor: ${data.p3valor}, desconto: ${data.p3desconto}, grupo: 'grupo2' },
    { id: 'p4', valor: ${data.p4valor}, desconto: ${data.p4desconto}, grupo: 'grupo2' },
    
    // Grupo 3
    { id: 'p5', valor: ${data.p5valor}, desconto: ${data.p5desconto}, grupo: 'grupo3' },
    { id: 'p6', valor: ${data.p6valor}, desconto: ${data.p6desconto}, grupo: 'grupo3' }
  ]
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.YMIR_CONFIG = YMIR_CONFIG;
}`;
}

// Gerar config Wemix
function generateWemixConfig(data) {
  const f3margemCalc = (1 + data.f3margem / 100).toFixed(2);
  const f4margemCalc = (1 + data.f4margem / 100).toFixed(2);
  const f5margemCalc = (1 + data.f5margem / 100).toFixed(2);
  
  return `// ═══════════════════════════════════════════════════════════════
// 💎 CONFIGURAÇÃO DE PREÇOS - WEMIX
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const WEMIX_CONFIG = {
  
  // ═══ PREÇOS POR FAIXA DE QUANTIDADE ═══
  precosPorFaixa: {
    // Faixa 1: ${data.f1min} a ${data.f1max} WEMIX (Preço Fixo)
    faixa1: {
      min: ${data.f1min},
      max: ${data.f1max},
      tipo: 'fixo',
      precoUnitario: ${data.f1preco.toFixed(2)}  // R$ ${data.f1preco.toFixed(2)} por WEMIX
    },
    
    // Faixa 2: ${data.f2min} a ${data.f2max} WEMIX (Preço Fixo)
    faixa2: {
      min: ${data.f2min},
      max: ${data.f2max},
      tipo: 'fixo',
      precoUnitario: ${data.f2preco.toFixed(2)}  // R$ ${data.f2preco.toFixed(2)} por WEMIX
    },
    
    // Faixa 3: ${data.f3min} a ${data.f3max} WEMIX (Baseado em Cotação)
    faixa3: {
      min: ${data.f3min},
      max: ${data.f3max},
      tipo: 'cotacao',
      margem: ${f3margemCalc}  // Cotação + ${data.f3margem}%
    },
    
    // Faixa 4: ${data.f4min} a ${data.f4max} WEMIX (Baseado em Cotação)
    faixa4: {
      min: ${data.f4min},
      max: ${data.f4max},
      tipo: 'cotacao',
      margem: ${f4margemCalc}  // Cotação + ${data.f4margem}%
    },
    
    // Faixa 5: ${data.f5min}+ WEMIX (Baseado em Cotação)
    faixa5: {
      min: ${data.f5min},
      max: Infinity,
      tipo: 'cotacao',
      margem: ${f5margemCalc}  // Cotação + ${data.f5margem}%
    }
  },
  
  // ═══ APIS DE COTAÇÃO ═══
  apis: {
    wemix: 'https://min-api.cryptocompare.com/data/price?fsym=WEMIX&tsyms=BRL,USD',
    usdt: 'https://min-api.cryptocompare.com/data/price?fsym=USDT&tsyms=BRL'
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.WEMIX_CONFIG = WEMIX_CONFIG;
}`;
}

// Gerar config GENSHIN IMPACT
function generateGenshinConfig(data) {
  return `// ═══════════════════════════════════════════════════════════════
// ⚔️ CONFIGURAÇÃO DE PREÇOS - GENSHIN IMPACT
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const GENSHIN_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: ${data.defaultExchangeRate}, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: ${(data.cardFeePercentage / 100).toFixed(2)}, // ${data.cardFeePercentage}%

  
  // ═══ PACOTES DE GENESIS CRYSTALS ═══
  topUpPackages: {
    1: { price: ${data.pkg1_final.toFixed(2)} },   // Benção da Lua
    2: { price: ${data.pkg2_final.toFixed(2)} },   // Crystal Genesis 300+30
    3: { price: ${data.pkg3_final.toFixed(2)} },   // Crystal Genesis 980+110
    4: { price: ${data.pkg4_final.toFixed(2)} },   // Crystal Genesis 1980+260
    5: { price: ${data.pkg5_final.toFixed(2)} },   // Crystal Genesis 3200+600
    6: { price: ${data.pkg6_final.toFixed(2)} }    // Crystal Genesis 6400+1600
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.GENSHIN_CONFIG = GENSHIN_CONFIG;
}`;
}

// Gerar config ROHAN II
function generateRohan2Config(data) {
  return `// ═══════════════════════════════════════════════════════════════
// ✳︎ CONFIGURAÇÃO DE PREÇOS - ROHAN II
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const ROHAN2_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: ${data.defaultExchangeRate}, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: ${(data.cardFeePercentage / 100).toFixed(2)}, // ${data.cardFeePercentage}%

  
  // ═══ PACOTES ═══
  topUpPackages: {
    10: { price: ${data.pkg10_final.toFixed(2)} },   // Pack de $10
    12: { price: ${data.pkg12_final.toFixed(2)} },   // Pack de $12
    20: { price: ${data.pkg20_final.toFixed(2)} },   // Pack de $20
    50: { price: ${data.pkg50_final.toFixed(2)} },   // Pack de $50
    100: { price: ${data.pkg100_final.toFixed(2)} }  // Pack de $100
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.ROHAN2_CONFIG = ROHAN2_CONFIG;
}`;
}

// Gerar config RAVEN II
function generateRaven2Config(data) {
  return `// ═══════════════════════════════════════════════════════════════
// ✝︎ CONFIGURAÇÃO DE PREÇOS - RAVEN II
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const RAVEN2_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: ${data.defaultExchangeRate}, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: ${(data.cardFeePercentage / 100).toFixed(2)}, // ${data.cardFeePercentage}%

  
  // ═══ PACOTES ═══
  topUpPackages: {
    3: { price: ${data.pkg3_final.toFixed(2)} },    // Pack de R$18,50 / 3 USD
    4: { price: ${data.pkg4_final.toFixed(2)} },    // Pack de R$24,90 / 4 USD
    7: { price: ${data.pkg7_final.toFixed(2)} },    // Pack de R$43,50 / 7 USD
    22: { price: ${data.pkg22_final.toFixed(2)} },  // Pack de R$135,90 / 22 USD
    36: { price: ${data.pkg36_final.toFixed(2)} },  // Pack de R$224,90 / 36 USD
    70: { price: ${data.pkg70_final.toFixed(2)} }   // Pack de R$435 / 70 USD
  }
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.RAVEN2_CONFIG = RAVEN2_CONFIG;
}`;
}

// Preview da configuração
function previewConfig(game) {
  currentConfig = generateConfig(game);
  document.getElementById('modalCode').textContent = currentConfig;
  document.getElementById('modal').classList.add('show');
}

// Fechar modal
function closeModal() {
  document.getElementById('modal').classList.remove('show');
}

// Copiar para clipboard
function copyToClipboard() {
  navigator.clipboard.writeText(currentConfig).then(() => {
    showToast('Código copiado para a área de transferência!', 'success');
  }).catch(err => {
    showToast('Erro ao copiar código', 'error');
  });
}

// Download da configuração (método antigo)
function downloadConfig() {
  const blob = new Blob([currentConfig], { type: 'text/javascript' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `config-precos.js`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showToast('Arquivo baixado! Coloque na pasta do jogo correspondente.', 'success');
}

// ═══════════════════════════════════════════════════════════════
// 🚀 SISTEMA DE SALVAMENTO DIRETO - File System Access API
// ═══════════════════════════════════════════════════════════════

// Solicitar acesso à pasta do projeto
async function requestProjectAccess() {
  if (!supportsFileSystemAccess) {
    showToast('Seu navegador não suporta salvamento direto. Use o botão de Download.', 'warning');
    return false;
  }
  
  try {
    // Pedir ao usuário para selecionar a pasta do projeto
    projectDirectoryHandle = await window.showDirectoryPicker({
      mode: 'readwrite',
      startIn: 'documents'
    });
    
    showToast('✅ Acesso à pasta concedido! Agora você pode salvar diretamente.', 'success');
    
    // Atualizar interface para mostrar que está conectado
    updateConnectionStatus(true);
    
    // Salvar referência no localStorage para próximas sessões
    localStorage.setItem('hasProjectAccess', 'true');
    
    return true;
  } catch (error) {
    if (error.name === 'AbortError') {
      showToast('Acesso à pasta cancelado.', 'warning');
    } else {
      console.error('Erro ao solicitar acesso:', error);
      showToast('Erro ao acessar a pasta. Use o botão de Download.', 'error');
    }
    return false;
  }
}

// Salvar diretamente no arquivo
async function saveDirectly(game) {
  if (!projectDirectoryHandle) {
    const hasAccess = await requestProjectAccess();
    if (!hasAccess) {
      return false;
    }
  }
  
  try {
    // Mapear nome do jogo para nome da pasta
    const folderNames = {
      'mir4': 'Mir4',
      'nightcrows': 'Nightcrows',
      'odin': 'Odin',
      'ymir': 'Ymir',
      'wemix': 'Wemix'
    };
    
    const folderName = folderNames[game];
    
    // Acessar a pasta do jogo
    const gameFolderHandle = await projectDirectoryHandle.getDirectoryHandle(folderName, { create: false });
    
    // Acessar/criar o arquivo config-precos.js
    const fileHandle = await gameFolderHandle.getFileHandle('config-precos.js', { create: true });
    
    // Criar um writable stream
    const writable = await fileHandle.createWritable();
    
    // Escrever o conteúdo
    await writable.write(currentConfig);
    
    // Fechar o stream
    await writable.close();
    
    showToast('✅ Arquivo salvo diretamente! Recarregue o site do jogo (Ctrl+F5)', 'success');
    
    return true;
  } catch (error) {
    console.error('Erro ao salvar:', error);
    
    if (error.name === 'NotFoundError') {
      showToast('❌ Pasta do jogo não encontrada. Selecione a pasta raiz do projeto.', 'error');
    } else if (error.name === 'NotAllowedError') {
      showToast('❌ Permissão negada. Solicite acesso novamente.', 'error');
      projectDirectoryHandle = null;
      updateConnectionStatus(false);
    } else {
      showToast('❌ Erro ao salvar. Use o botão de Download.', 'error');
    }
    
    return false;
  }
}

// Atualizar status de conexão na interface
function updateConnectionStatus(connected) {
  // Adicionar indicador visual no header
  const header = document.querySelector('.admin-header');
  let statusIndicator = document.getElementById('connectionStatus');
  
  if (!statusIndicator) {
    statusIndicator = document.createElement('div');
    statusIndicator.id = 'connectionStatus';
    statusIndicator.style.cssText = `
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 16px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
    `;
    header.appendChild(statusIndicator);
  }
  
  if (connected) {
    statusIndicator.innerHTML = '🟢 Conectado à Pasta';
    statusIndicator.style.background = 'rgba(0, 255, 136, 0.2)';
    statusIndicator.style.border = '2px solid #00ff88';
    statusIndicator.style.color = '#00ff88';
  } else {
    statusIndicator.innerHTML = '🔴 Não Conectado';
    statusIndicator.style.background = 'rgba(255, 51, 102, 0.2)';
    statusIndicator.style.border = '2px solid #ff3366';
    statusIndicator.style.color = '#ff3366';
  }
}

// Verificar se já tem acesso na inicialização
async function checkExistingAccess() {
  const hadAccess = localStorage.getItem('hasProjectAccess');
  
  if (hadAccess && supportsFileSystemAccess) {
    updateConnectionStatus(false); // Mostrar como não conectado até pedir permissão
    
    // Adicionar botão para reconectar
    showToast('💡 Clique em "Conectar Pasta" para salvar diretamente nos arquivos!', 'warning');
  }
}

// Salvar e baixar (método principal)
async function saveConfig(game) {
  currentGame = game;
  currentConfig = generateConfig(game);
  
  // Se suporta File System Access e tem acesso, tentar salvar direto
  if (supportsFileSystemAccess && projectDirectoryHandle) {
    const saved = await saveDirectly(game);
    
    if (saved) {
      // Perguntar se quer também fazer backup (download)
      setTimeout(() => {
        if (confirm('✅ Salvo! Deseja também baixar uma cópia de backup?')) {
          downloadConfig();
        }
      }, 500);
      return;
    }
  }
  
  // Fallback: perguntar se quer salvar direto ou baixar
  if (supportsFileSystemAccess && !projectDirectoryHandle) {
    const choice = confirm('💡 Deseja SALVAR DIRETAMENTE no arquivo?\n\n✅ OK = Salvar direto (recomendado)\n❌ Cancelar = Baixar arquivo (método antigo)');
    
    if (choice) {
      const saved = await saveDirectly(game);
      if (saved) return;
    }
  }
  
  // Se chegou aqui, usar método de download
  downloadConfig();
  
  setTimeout(() => {
    if (confirm('Deseja também copiar o código para a área de transferência?')) {
      copyToClipboard();
    }
  }, 500);
}

// Mostrar toast
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  const toastIcon = toast.querySelector('.toast-icon');
  
  // Remove classes anteriores
  toast.classList.remove('success', 'warning', 'error');
  
  // Adiciona nova classe
  toast.classList.add(type);
  
  // Define ícone
  const icons = {
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };
  toastIcon.textContent = icons[type] || '✅';
  
  // Define mensagem
  toastMessage.textContent = message;
  
  // Mostra toast
  toast.classList.add('show');
  
  // Esconde após 3 segundos
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Mostrar ajuda
function showHelp() {
  const helpText = supportsFileSystemAccess 
    ? `📖 AJUDA - DASHBOARD ADMIN

🎯 COMO USAR (MÉTODO NOVO - SALVAR DIRETO):

1. Clique em "📁 Conectar Pasta" no topo
2. Selecione a pasta raiz do projeto (Sites/)
3. Clique no card do jogo que deseja editar
4. Preencha os campos com os novos valores
5. Clique em "Salvar & Baixar" → Salva DIRETO no arquivo!
6. Recarregue o site do jogo (Ctrl + F5)

🚀 VANTAGENS DO SALVAMENTO DIRETO:

✅ Não precisa baixar arquivo
✅ Não precisa substituir manualmente
✅ Atualiza automaticamente
✅ Mais rápido e prático!

💡 DICAS:

• Use ponto (.) para decimais: 5.50 ✅
• Taxas em %: Digite 6 para 6% ✅
• Conecte a pasta UMA VEZ e use sempre
• Sempre faça backup antes de mudanças grandes

⚠️ IMPORTANTE:

• Selecione a pasta RAIZ do projeto
• Dê permissão quando o navegador pedir
• Após salvar, recarregue o site (Ctrl + F5)

❓ Precisa de mais ajuda?
Consulte os arquivos GUIA_PRECOS.md`
    : `📖 AJUDA - DASHBOARD ADMIN

🎯 COMO USAR:

1. Clique no card do jogo que deseja editar
2. Preencha os campos com os novos valores
3. Clique em "Preview" para ver o código gerado
4. Clique em "Salvar & Baixar" para baixar o arquivo
5. Coloque o arquivo na pasta do jogo correspondente

💡 DICAS:

• Use ponto (.) para decimais: 5.50 ✅
• Taxas em %: Digite 6 para 6% ✅
• Preços em R$ ou $ conforme indicado
• Sempre faça backup antes de substituir

⚠️ IMPORTANTE:

• Após baixar, substitua o arquivo config-precos.js
• Recarregue a página do jogo (Ctrl + F5)
• Teste para garantir que está funcionando

❓ Precisa de mais ajuda?
Consulte os arquivos GUIA_PRECOS.md`;

  alert(helpText);
}

// Fechar modal ao clicar fora
window.onclick = function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    closeModal();
  }
}

// Calculadora de desconto (Odin)
function calcularDesconto() {
  const original = parseFloat(document.getElementById('calcOriginal').value) || 0;
  const desconto = parseFloat(document.getElementById('calcDesconto').value) || 0;
  
  if (original <= 0 || desconto < 0) {
    showToast('Digite valores válidos!', 'warning');
    return;
  }
  
  const final = original * (1 - desconto / 100);
  document.getElementById('calcFinal').value = final.toFixed(2);
  
  showToast(`Preço final: $${final.toFixed(2)} (${desconto}% de desconto)`, 'success');
}

// Adicionar botão de conectar na interface
function addConnectButton() {
  if (!supportsFileSystemAccess) return;
  
  const nav = document.querySelector('.admin-nav');
  const connectBtn = document.createElement('button');
  connectBtn.className = 'nav-btn';
  connectBtn.innerHTML = '📁 Conectar Pasta';
  connectBtn.onclick = async () => {
    const success = await requestProjectAccess();
    if (success) {
      connectBtn.innerHTML = '✅ Conectado!';
      connectBtn.style.background = 'rgba(0, 255, 136, 0.2)';
      connectBtn.style.borderColor = '#00ff88';
    }
  };
  
  // Inserir antes do botão de ajuda
  nav.insertBefore(connectBtn, nav.lastElementChild);
}

// ═══════════════════════════════════════════════════════════════
// 🔄 SISTEMA DE GIT INTEGRADO
// ═══════════════════════════════════════════════════════════════

const GIT_SERVER_URL = 'http://localhost:3333';
let gitServerOnline = false;

// Verificar status do servidor Git
async function checkGitServer() {
  try {
    const response = await fetch(`${GIT_SERVER_URL}/status`);
    const data = await response.json();
    
    if (data.status === 'online') {
      gitServerOnline = true;
      updateGitServerStatus(true);
      return true;
    }
  } catch (error) {
    gitServerOnline = false;
    updateGitServerStatus(false);
  }
  return false;
}

// Atualizar status do servidor na interface
function updateGitServerStatus(online) {
  const statusDiv = document.getElementById('gitServerStatus');
  const gitButton = document.getElementById('gitButton');
  const startSection = document.getElementById('startServerSection');
  
  if (!statusDiv) return;
  
  if (online) {
    statusDiv.innerHTML = `
      <span style="font-size: 14px; font-weight: 600; color: #00ff88;">🟢 Servidor Online</span>
      <div style="font-size: 11px; margin-top: 5px; opacity: 0.8;">Pronto para enviar!</div>
    `;
    statusDiv.style.borderColor = '#00ff88';
    statusDiv.style.background = 'rgba(0, 255, 136, 0.1)';
    
    // Ocultar botão de iniciar
    if (startSection) startSection.style.display = 'none';
    
    if (gitButton) {
      gitButton.style.background = 'rgba(0, 255, 136, 0.2)';
      gitButton.style.borderColor = '#00ff88';
    }
  } else {
    statusDiv.innerHTML = `
      <span style="font-size: 14px; font-weight: 600; color: #ff3366;">🔴 Servidor Offline</span>
      <div style="font-size: 11px; margin-top: 5px; opacity: 0.8;">Clique abaixo para iniciar</div>
    `;
    statusDiv.style.borderColor = '#ff3366';
    statusDiv.style.background = 'rgba(255, 51, 102, 0.1)';
    
    // Mostrar botão de iniciar
    if (startSection) startSection.style.display = 'block';
    
    if (gitButton) {
      gitButton.style.background = 'rgba(153, 51, 255, 0.2)';
      gitButton.style.borderColor = 'var(--purple-vibrant)';
    }
  }
}

// Iniciar servidor manualmente pelo botão
function startServerManually() {
  showToast('🚀 Abrindo arquivo do servidor...', 'warning');
  
  // Criar link para o arquivo VBS
  const link = document.createElement('a');
  link.href = 'auto-start-git.vbs';
  link.download = 'auto-start-git.vbs';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Mostrar instruções
  addGitLog('📋 Arquivo do servidor aberto. Se não iniciar automaticamente, execute: auto-start-git.vbs', 'warning');
  
  // Verificar após alguns segundos
  setTimeout(async () => {
    showToast('⏳ Verificando servidor...', 'warning');
    
    // Tentar várias vezes
    for (let i = 0; i < 3; i++) {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const online = await checkGitServer();
      if (online) {
        showToast('✅ Servidor iniciado com sucesso!', 'success');
        addGitLog('✅ Servidor Git online e pronto!', 'success');
        return;
      }
    }
    
    // Se não conseguiu
    showToast('⚠️ Execute manualmente: auto-start-git.vbs ou iniciar-servidor.bat', 'warning');
    addGitLog('⚠️ Por favor, execute manualmente o arquivo auto-start-git.vbs', 'warning');
  }, 1000);
}

// Tentar iniciar o servidor automaticamente
async function tryStartServer() {
  showToast('🚀 Tentando iniciar servidor...', 'warning');
  
  // Tentar abrir o .bat através de um link
  const link = document.createElement('a');
  link.href = 'iniciar-servidor.bat';
  link.download = 'iniciar-servidor.bat';
  link.style.display = 'none';
  document.body.appendChild(link);
  
  // Tentar abrir via file protocol
  try {
    // Criar um iframe oculto para tentar executar
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = 'iniciar-servidor.bat';
    document.body.appendChild(iframe);
    
    setTimeout(() => {
      document.body.removeChild(iframe);
    }, 2000);
  } catch (e) {
    console.log('Método iframe falhou');
  }
  
  // Tentar via window.open
  try {
    const win = window.open('iniciar-servidor.bat', '_blank');
    if (win) {
      setTimeout(() => win.close(), 1000);
    }
  } catch (e) {
    console.log('Método window.open falhou');
  }
  
  document.body.removeChild(link);
  
  // Mostrar instruções alternativas
  showToast('📋 Abrindo arquivo do servidor... Se não abrir, execute manualmente!', 'warning');
  
  // Aguardar um pouco e verificar novamente
  setTimeout(async () => {
    const online = await checkGitServer();
    if (online) {
      showToast('✅ Servidor iniciado com sucesso!', 'success');
    } else {
      showToast('⚠️ Execute manualmente: iniciar-servidor.bat', 'warning');
    }
  }, 3000);
}

// Abrir painel Git (com inicialização automática)
async function openGitPanel() {
  const online = await checkGitServer();
  
  if (!online) {
    const choice = confirm(
      '⚠️ Servidor Git está offline!\n\n' +
      '🚀 Deseja que eu tente iniciar automaticamente?\n\n' +
      '✅ OK = Tentar iniciar\n' +
      '❌ Cancelar = Voltar'
    );
    
    if (!choice) return;
    
    // Tentar iniciar o servidor
    await tryStartServer();
    
    // Aguardar e verificar
    showToast('⏳ Aguarde enquanto o servidor inicia...', 'warning');
    
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const nowOnline = await checkGitServer();
    
    if (!nowOnline) {
      const manual = confirm(
        '⚠️ Não foi possível iniciar automaticamente.\n\n' +
        'Por favor, abra manualmente o arquivo:\n' +
        'iniciar-servidor.bat\n\n' +
        'Deseja abrir o painel mesmo assim?'
      );
      
      if (!manual) return;
    }
  }
  
  document.getElementById('gitModal').classList.add('show');
  
  // Limpar campos
  document.getElementById('gitCommitMessage').value = '';
  document.getElementById('gitLogArea').innerHTML = '';
  document.getElementById('gitStatusArea').style.display = 'none';
}

// Fechar painel Git
function closeGitModal() {
  document.getElementById('gitModal').classList.remove('show');
}

// Adicionar log no painel
function addGitLog(message, type = 'info') {
  const logArea = document.getElementById('gitLogArea');
  const logEntry = document.createElement('div');
  
  let color = 'var(--text-color)';
  let icon = 'ℹ️';
  
  if (type === 'success') {
    color = '#00ff88';
    icon = '✅';
  } else if (type === 'error') {
    color = '#ff3366';
    icon = '❌';
  } else if (type === 'warning') {
    color = '#ffaa00';
    icon = '⚠️';
  } else if (type === 'loading') {
    color = 'var(--purple-light)';
    icon = '⏳';
  }
  
  logEntry.style.cssText = `
    padding: 10px 15px;
    margin-bottom: 8px;
    border-left: 3px solid ${color};
    background: rgba(0,0,0,0.3);
    border-radius: 4px;
    font-size: 13px;
    color: ${color};
  `;
  
  logEntry.innerHTML = `${icon} ${message}`;
  logArea.appendChild(logEntry);
  
  // Scroll para o final
  logArea.scrollTop = logArea.scrollHeight;
}

// Verificar mudanças
async function checkGitStatus() {
  addGitLog('Verificando mudanças...', 'loading');
  
  try {
    const response = await fetch(`${GIT_SERVER_URL}/git/status`);
    const data = await response.json();
    
    if (data.success) {
      const statusArea = document.getElementById('gitStatusArea');
      const statusText = document.getElementById('gitStatusText');
      
      if (data.hasChanges) {
        statusText.textContent = data.output;
        statusArea.style.display = 'block';
        addGitLog(`${data.output.split('\n').length} arquivo(s) modificado(s)`, 'success');
      } else {
        statusArea.style.display = 'none';
        addGitLog('Nenhuma mudança detectada', 'warning');
      }
    } else {
      addGitLog('Erro ao verificar status: ' + data.error, 'error');
    }
  } catch (error) {
    addGitLog('Erro de conexão! Verifique se o servidor está rodando.', 'error');
  }
}

// Commit + Push
async function gitCommitPush() {
  const message = document.getElementById('gitCommitMessage').value.trim();
  
  if (!message) {
    showToast('Digite uma mensagem para o commit!', 'warning');
    return;
  }
  
  // Verificar servidor
  if (!gitServerOnline) {
    const online = await checkGitServer();
    if (!online) {
      addGitLog('Servidor offline! Execute: iniciar-servidor.bat', 'error');
      return;
    }
  }
  
  addGitLog('Iniciando processo...', 'loading');
  
  try {
    const response = await fetch(`${GIT_SERVER_URL}/git/commit-push`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    });
    
    const data = await response.json();
    
    if (data.success) {
      // Adicionar cada passo do log
      if (data.steps) {
        data.steps.forEach(step => {
          addGitLog(step, 'success');
        });
      }
      
      addGitLog(data.message, 'success');
      showToast('🎉 Alterações enviadas com sucesso!', 'success');
      
      // Limpar mensagem
      document.getElementById('gitCommitMessage').value = '';
    } else {
      addGitLog('Erro: ' + data.error, 'error');
      showToast('Erro ao enviar alterações', 'error');
    }
  } catch (error) {
    addGitLog('Erro de conexão: ' + error.message, 'error');
    showToast('Erro de conexão com o servidor Git', 'error');
  }
}

// Verificar servidor periodicamente
setInterval(() => {
  if (document.getElementById('gitModal').classList.contains('show')) {
    checkGitServer();
  }
}, 5000);

// ═══════════════════════════════════════════════════════════════
// 🎮 CARREGAR JOGOS DINAMICAMENTE DO CONFIG.JS
// ═══════════════════════════════════════════════════════════════

async function loadGamesFromConfig() {
  console.log('🔍 Carregando jogos do config.js...');
  console.log('ℹ️ Jogos hardcoded já estão visíveis como fallback');
  
  // Por enquanto, não carregar dinamicamente
  // Os jogos hardcoded já estão no HTML
  // Essa função será melhorada no futuro
  
  return;
  
  /* CÓDIGO DINÂMICO DESATIVADO TEMPORARIAMENTE
  try {
    const response = await fetch('./config.js');
    const configText = await response.text();
    
    const jogosMatch = configText.match(/jogos:\s*\[([\s\S]*?)\]/);
    
    if (!jogosMatch) {
      console.warn('⚠️ Array de jogos não encontrado no config.js');
      return;
    }
    
    const scriptEl = document.createElement('script');
    scriptEl.textContent = configText;
    document.head.appendChild(scriptEl);
    
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const config = window.CONFIG || {};
    const jogos = config.jogos || [];
    
    if (!jogos || jogos.length === 0) {
      console.warn('⚠️ Nenhum jogo encontrado no config.jogos');
      console.log('Config carregado:', config);
      return;
    }
    
    console.log(`✅ ${jogos.length} jogos encontrados!`, jogos);
    
    const gamesGrid = document.getElementById('gamesGrid');
    if (!gamesGrid) {
      console.error('❌ Container gamesGrid não encontrado!');
      return;
    }
    
    // Remover jogos hardcoded (exceto o card "Adicionar")
    const hardcodedGames = gamesGrid.querySelectorAll('.game-admin-card:not(:first-child)');
    hardcodedGames.forEach(card => card.remove());
    
    jogos.forEach(jogo => {
      const card = document.createElement('div');
      card.className = 'game-admin-card';
      card.onclick = () => editGame(jogo.id);
      
      const iconeHTML = jogo.icone && jogo.icone.startsWith('http') 
        ? `<div class="game-card-icon-img">
             <img src="${jogo.icone}" alt="${jogo.nome}">
           </div>`
        : `<span class="game-card-icon">${jogo.emoji || jogo.icone || '🎮'}</span>`;
      
      card.innerHTML = `
        ${iconeHTML}
        <h3 class="game-card-title">${jogo.nome}</h3>
        <p class="game-card-desc">${jogo.descricaoCurta || 'Gerenciar preços'}</p>
        <button class="game-card-btn">Editar Preços</button>
      `;
      
      gamesGrid.appendChild(card);
    });
    
    console.log('✅ Cards dos jogos gerados com sucesso!');
    
  } catch (error) {
    console.error('❌ Erro ao carregar jogos:', error);
    console.log('ℹ️ Usando jogos hardcoded como fallback');
  }
  */
}

// Mensagem de boas-vindas
window.onload = function() {
  console.log('%c⚙️ Dashboard Admin - Daoshi Store', 'font-size: 20px; color: #9933ff; font-weight: bold;');
  console.log('%cSistema de gerenciamento de preços carregado!', 'font-size: 14px; color: #ff69b4;');
  console.log('%c✅ Todos os 5 jogos implementados!', 'font-size: 14px; color: #00ff88;');
  
  // Carregar jogos do config.js
  loadGamesFromConfig();
  
  if (supportsFileSystemAccess) {
    console.log('%c🚀 Salvamento direto disponível!', 'font-size: 14px; color: #ffd700;');
  }
  
  showToast('Dashboard carregado com sucesso! 🎉', 'success');
  
  // Adicionar botão de conectar
  addConnectButton();
  
  // Verificar acesso existente
  checkExistingAccess();
  
  // Atualizar status inicial
  updateConnectionStatus(false);
  
  // Verificar servidor Git
  checkGitServer();
};

// ═══════════════════════════════════════════════════════════════
// 🎮 ADICIONAR NOVO JOGO
// ═══════════════════════════════════════════════════════════════

function generateNewGameCode() {
  console.log('🔍 [generateNewGameCode] Iniciando...');
  
  // Verificar elementos antes de acessar
  const idElement = document.getElementById('gameId');
  const nomeElement = document.getElementById('gameName');
  const nomeShortElement = document.getElementById('gameNameShort');
  const emojiElement = document.getElementById('gameEmoji');
  const iconeElement = document.getElementById('gameIcon');
  const iconeGrandeElement = document.getElementById('gameIconLarge');
  const descShortElement = document.getElementById('gameDescShort');
  const descLongElement = document.getElementById('gameDescLong');
  const urlElement = document.getElementById('gameUrl');
  
  console.log('Elementos encontrados:', {
    gameId: !!idElement,
    gameName: !!nomeElement,
    gameNameShort: !!nomeShortElement,
    gameEmoji: !!emojiElement,
    gameIcon: !!iconeElement,
    gameIconLarge: !!iconeGrandeElement,
    gameDescShort: !!descShortElement,
    gameDescLong: !!descLongElement,
    gameUrl: !!urlElement
  });
  
  if (!idElement || !nomeElement || !emojiElement || !iconeElement || !descShortElement || !descLongElement || !urlElement) {
    console.error('❌ Elementos faltando!');
    console.error('Missing elements:', {
      gameId: !idElement,
      gameName: !nomeElement,
      gameEmoji: !emojiElement,
      gameIcon: !iconeElement,
      gameDescShort: !descShortElement,
      gameDescLong: !descLongElement,
      gameUrl: !urlElement
    });
    showToast('Erro: Alguns campos do formulário não foram encontrados!', 'error');
    
    // Tentar focar no primeiro campo faltante
    if (!idElement) showToast('Campo "ID do Jogo" não encontrado', 'error');
    else if (!nomeElement) showToast('Campo "Nome do Jogo" não encontrado', 'error');
    else if (!emojiElement) showToast('Campo "Emoji" não encontrado', 'error');
    else if (!iconeElement) showToast('Campo "Ícone" não encontrado', 'error');
    else if (!descShortElement) showToast('Campo "Descrição Curta" não encontrado', 'error');
    else if (!descLongElement) showToast('Campo "Descrição Longa" não encontrado', 'error');
    else if (!urlElement) showToast('Campo "URL" não encontrado', 'error');
    
    return null;
  }
  
  const id = idElement.value.trim();
  const nome = nomeElement.value.trim();
  const nomeShort = nomeShortElement ? nomeShortElement.value.trim() : '';
  const emoji = emojiElement.value.trim();
  const icone = iconeElement.value.trim();
  const iconeGrande = iconeGrandeElement ? iconeGrandeElement.checked : false;
  const descShort = descShortElement.value.trim();
  const descLong = descLongElement.value.trim();
  // URL é auto-gerada se não fornecida
  let url = urlElement ? urlElement.value.trim() : '';
  if (!url && id) {
    url = `${id}/index.html`;
    console.log('🔍 URL auto-gerada:', url);
  }
  
  const features = [];
  for (let i = 1; i <= 5; i++) {
    const featureElement = document.getElementById(`feature${i}`);
    if (featureElement) {
      features.push(featureElement.value.trim());
    } else {
      features.push('');
    }
  }
  
  // Validar campos (URL não é obrigatória pois é auto-gerada)
  if (!id || !nome || !emoji || !icone || !descShort || !descLong) {
    console.error('Campos faltando:', {id, nome, emoji, icone, descShort, descLong});
    showToast('Preencha todos os campos obrigatórios!', 'error');
    return null;
  }
  
  // Auto-gerar URL se não fornecida
  if (!url) {
    url = `${id}/index.html`;
  }
  
  console.log('✅ Validação OK:', {id, nome, emoji, url});
  
  // Validar features
  if (features.some(f => !f)) {
    showToast('Preencha todas as 5 características!', 'error');
    return null;
  }
  
  // Gerar código do jogo
  const gameCode = `    {
      id: "${id}",
      nome: "${nome}",${nomeShort ? `\n      nomeCurto: "${nomeShort}",` : ''}
      icone: "${icone}",
      iconeGrande: ${iconeGrande},
      emoji: "${emoji}",
      descricaoCurta: "${descShort}",
      descricaoLonga: "${descLong}",
      url: "${url}",
      features: [
        "${features[0]}",
        "${features[1]}",
        "${features[2]}",
        "${features[3]}",
        "${features[4]}"
      ]
    }`;
  
  return gameCode;
}

function previewNewGame() {
  const code = generateNewGameCode();
  if (!code) return;
  
  const fullCode = `// ═══ ADICIONAR ESTE CÓDIGO NO ARRAY jogos: DO CONFIG.JS ═══\n\n${code},\n\n// ═══ Não esqueça da vírgula no final! ═══\n// ═══ Cole este jogo ao final do array jogos[], antes do ] ═══`;
  
  // Mostrar no modal
  document.getElementById('codePreview').textContent = fullCode;
  document.getElementById('previewModal').classList.add('show');
  
  showToast('Código gerado! Revise antes de salvar', 'success');
}

async function saveNewGame() {
  const code = generateNewGameCode();
  if (!code) return;
  
  // Verificar se tem acesso ao File System
  if (!projectDirectoryHandle) {
    showToast('⚠️ Conecte a pasta do projeto primeiro!', 'warning');
    const shouldConnect = confirm('Deseja conectar a pasta do projeto agora?');
    if (shouldConnect) {
      await requestProjectAccess();
      if (!projectDirectoryHandle) return;
    } else {
      return;
    }
  }
  
  try {
    // Ler o config.js atual
    const configFileHandle = await projectDirectoryHandle.getFileHandle('config.js', { create: false });
    const configFile = await configFileHandle.getFile();
    let configContent = await configFile.text();
    
    // Encontrar o array jogos
    const jogosArrayMatch = configContent.match(/jogos:\s*\[([\s\S]*?)\]/);
    
    if (!jogosArrayMatch) {
      showToast('Erro: Não foi possível encontrar o array jogos no config.js', 'error');
      return;
    }
    
    // Inserir o novo jogo no final do array (antes do fechamento ])
    const newJogosArray = jogosArrayMatch[0].replace(/\]$/, `,\n${code}\n  ]`);
    const newConfigContent = configContent.replace(jogosArrayMatch[0], newJogosArray);
    
    // Salvar o arquivo
    const writable = await configFileHandle.createWritable();
    await writable.write(newConfigContent);
    await writable.close();
    
    showToast('✅ Jogo adicionado ao config.js com sucesso!', 'success');
    showToast('🔄 Recarregue o site principal para ver as alterações', 'warning');
    
    // Limpar formulário
    resetAddGameForm();
    
    // Voltar para home
    setTimeout(() => showSection('home'), 2000);
    
  } catch (error) {
    console.error('Erro ao salvar:', error);
    showToast('Erro ao salvar: ' + error.message, 'error');
  }
}

function copyNewGameCode() {
  const code = generateNewGameCode();
  if (!code) return;
  
  const fullCode = `// ═══ ADICIONAR ESTE CÓDIGO NO ARRAY jogos: DO CONFIG.JS ═══\n\n${code},\n\n// ═══ Não esqueça da vírgula no final! ═══`;
  
  navigator.clipboard.writeText(fullCode).then(() => {
    showToast('✅ Código copiado! Cole no config.js', 'success');
  }).catch(err => {
    showToast('Erro ao copiar', 'error');
  });
}

function resetAddGameForm() {
  const form = document.getElementById('addGameForm');
  if (form) {
    form.reset();
  }
  
  // Reset containers dinâmicos
  const currencyContainer = document.getElementById('currencyTiersContainer');
  if (currencyContainer) {
    currencyContainer.innerHTML = `
      <div class="currency-tier">
        <h5 style="color: var(--pink);">Faixa 1 (Base)</h5>
        <div class="form-row">
          <div class="form-group">
            <label>Quantidade Mínima</label>
            <input type="number" class="tier-min" placeholder="0" value="0">
          </div>
          <div class="form-group">
            <label>Quantidade Máxima</label>
            <input type="number" class="tier-max" placeholder="5000">
          </div>
          <div class="form-group">
            <label>Preço por unidade (R$)</label>
            <input type="number" step="0.01" class="tier-price" placeholder="27.00">
          </div>
        </div>
      </div>
    `;
  }
  
  const packagesContainer = document.getElementById('packagesContainer');
  if (packagesContainer) {
    packagesContainer.innerHTML = `
      <div class="package-item">
        <h5 style="color: var(--pink);">Pacote 1</h5>
        <div class="form-row">
          <div class="form-group">
            <label>Valor Original ($)</label>
            <input type="number" step="0.01" class="pkg-original" placeholder="7.00">
            <small>Ex: $7, $15, $30</small>
          </div>
          <div class="form-group">
            <label>Preço com Desconto ($)</label>
            <input type="number" step="0.01" class="pkg-discounted" placeholder="6.30" required>
            <small>Ex: $6.30, $13.50, $26.00</small>
          </div>
          <div class="form-group">
            <label>Quantidade de itens (opcional)</label>
            <input type="number" class="pkg-quantity" placeholder="500">
            <small>Ex: 500 Diamonds</small>
          </div>
        </div>
      </div>
    `;
  }
  
  // Esconder sistemas
  const currencySystem = document.getElementById('currencySystem');
  const packagesSystem = document.getElementById('packagesSystem');
  if (currencySystem) currencySystem.style.display = 'none';
  if (packagesSystem) packagesSystem.style.display = 'none';
  
  // Reset campos da conta
  const accountFieldsContainer = document.getElementById('accountFieldsContainer');
  if (accountFieldsContainer) {
    accountFieldsContainer.innerHTML = `
      <div class="account-field-item">
        <h5 style="color: var(--hot-pink); margin-bottom: 10px;">Campo 1</h5>
        <div class="form-group">
          <label>Nome do Campo</label>
          <input type="text" class="field-name" placeholder="Ex: Login" value="Login">
          <small>O que será solicitado (ex: Login, Senha, ID)</small>
        </div>
        <div class="form-group">
          <label>Placeholder (texto de exemplo)</label>
          <input type="text" class="field-placeholder" placeholder="Ex: Digite seu login">
          <small>Texto que aparece dentro do campo vazio</small>
        </div>
      </div>
    `;
  }
  
  // Reset counters
  accountFieldCounter = 1;
  
  showToast('Formulário limpo!', 'success');
}

// ═══════════════════════════════════════════════════════════════
// 💰 SISTEMA DE PREÇOS - VISIBILIDADE
// ═══════════════════════════════════════════════════════════════

function updatePriceSystemVisibility() {
  const type = document.getElementById('priceSystemType').value;
  const currencySystem = document.getElementById('currencySystem');
  const packagesSystem = document.getElementById('packagesSystem');
  
  currencySystem.style.display = 'none';
  packagesSystem.style.display = 'none';
  
  if (type === 'currency' || type === 'both') {
    currencySystem.style.display = 'block';
  }
  
  if (type === 'packages' || type === 'both') {
    packagesSystem.style.display = 'block';
  }
}

// Toggle USDT
document.addEventListener('DOMContentLoaded', function() {
  const usdtCheckbox = document.getElementById('currencyHasUSDT');
  if (usdtCheckbox) {
    usdtCheckbox.addEventListener('change', function() {
      document.getElementById('usdtPriceGroup').style.display = this.checked ? 'block' : 'none';
    });
  }
});

// ═══════════════════════════════════════════════════════════════
// 💎 ADICIONAR/REMOVER FAIXAS DE MOEDA
// ═══════════════════════════════════════════════════════════════

let tierCounter = 1;

function addCurrencyTier() {
  tierCounter++;
  const container = document.getElementById('currencyTiersContainer');
  
  const tierDiv = document.createElement('div');
  tierDiv.className = 'currency-tier';
  tierDiv.innerHTML = `
    <h5 style="color: var(--pink); display: flex; justify-content: space-between; align-items: center;">
      Faixa ${tierCounter}
      <button type="button" onclick="removeTier(this)" style="background: var(--danger); border: none; color: white; padding: 5px 10px; cursor: pointer; border-radius: 5px;">❌ Remover</button>
    </h5>
    <div class="form-row">
      <div class="form-group">
        <label>Quantidade Mínima</label>
        <input type="number" class="tier-min" placeholder="5000">
      </div>
      <div class="form-group">
        <label>Quantidade Máxima</label>
        <input type="number" class="tier-max" placeholder="10000">
      </div>
      <div class="form-group">
        <label>Preço por unidade (R$)</label>
        <input type="number" step="0.01" class="tier-price" placeholder="26.00">
      </div>
    </div>
  `;
  
  container.appendChild(tierDiv);
  showToast('Faixa adicionada!', 'success');
}

function removeTier(button) {
  button.closest('.currency-tier').remove();
  showToast('Faixa removida!', 'success');
}

// ═══════════════════════════════════════════════════════════════
// 📦 ADICIONAR/REMOVER PACOTES
// ═══════════════════════════════════════════════════════════════

let packageCounter = 1;
let accountFieldCounter = 1;

function addAccountField() {
  accountFieldCounter++;
  const container = document.getElementById('accountFieldsContainer');
  
  const fieldDiv = document.createElement('div');
  fieldDiv.className = 'account-field-item';
  fieldDiv.style.marginTop = '20px';
  fieldDiv.style.paddingTop = '20px';
  fieldDiv.style.borderTop = '2px solid var(--hot-pink)';
  fieldDiv.innerHTML = `
    <h5 style="color: var(--hot-pink); display: flex; justify-content: space-between; align-items: center;">
      Campo ${accountFieldCounter}
      <button type="button" onclick="removeAccountField(this)" style="background: var(--danger); border: none; color: white; padding: 5px 10px; cursor: pointer; border-radius: 5px;">❌ Remover</button>
    </h5>
    <div class="form-group">
      <label>Nome do Campo</label>
      <input type="text" class="field-name" placeholder="Ex: Senha, ID, Email">
      <small>O que será solicitado (ex: Login, Senha, ID)</small>
    </div>
    <div class="form-group">
      <label>Placeholder (texto de exemplo)</label>
      <input type="text" class="field-placeholder" placeholder="Ex: Digite sua senha">
      <small>Texto que aparece dentro do campo vazio</small>
    </div>
  `;
  
  container.appendChild(fieldDiv);
  showToast('Campo adicionado!', 'success');
}

function removeAccountField(button) {
  button.closest('.account-field-item').remove();
  showToast('Campo removido!', 'success');
}

function addPackage() {
  packageCounter++;
  const container = document.getElementById('packagesContainer');
  
  if (!container) {
    showToast('Erro: Container de pacotes não encontrado!', 'error');
    return;
  }
  
  const pkgDiv = document.createElement('div');
  pkgDiv.className = 'package-item';
  pkgDiv.style.marginTop = '20px';
  pkgDiv.style.paddingTop = '20px';
  pkgDiv.style.borderTop = '2px solid var(--purple-medium)';
  pkgDiv.innerHTML = `
    <h5 style="color: var(--pink); display: flex; justify-content: space-between; align-items: center;">
      Pacote ${packageCounter}
      <button type="button" onclick="removePackage(this)" style="background: var(--danger); border: none; color: white; padding: 5px 10px; cursor: pointer; border-radius: 5px;">❌ Remover</button>
    </h5>
    <div class="form-row">
      <div class="form-group">
        <label>Valor Original ($)</label>
        <input type="number" step="0.01" class="pkg-original" placeholder="15.00">
        <small>Ex: $15, $30, $50</small>
      </div>
      <div class="form-group">
        <label>Preço com Desconto ($)</label>
        <input type="number" step="0.01" class="pkg-discounted" placeholder="13.50" required>
        <small>Ex: $13.50, $26.00, $45.00</small>
      </div>
      <div class="form-group">
        <label>Quantidade de itens (opcional)</label>
        <input type="number" class="pkg-quantity" placeholder="1000">
        <small>Ex: 1000 Diamonds</small>
      </div>
    </div>
  `;
  
  container.appendChild(pkgDiv);
  showToast('Pacote adicionado!', 'success');
}

function removePackage(button) {
  button.closest('.package-item').remove();
  showToast('Pacote removido!', 'success');
}

// ═══════════════════════════════════════════════════════════════
// 🎮 GERAR CÓDIGOS COMPLETOS
// ═══════════════════════════════════════════════════════════════

function generateConfigPrecosCode() {
  const gameIdElement = document.getElementById('gameId');
  const gameNameElement = document.getElementById('gameName');
  const priceSystemTypeElement = document.getElementById('priceSystemType');
  const exchangeRateElement = document.getElementById('defaultExchangeRate');
  const cardFeeElement = document.getElementById('cardFee');
  
  if (!gameIdElement || !gameNameElement || !priceSystemTypeElement) {
    showToast('Erro: Elementos do formulário não encontrados!', 'error');
    return null;
  }
  
  const gameId = gameIdElement.value.trim().toUpperCase();
  const gameName = gameNameElement.value.trim();
  const priceSystemType = priceSystemTypeElement.value;
  const exchangeRate = exchangeRateElement ? (exchangeRateElement.value || '5.88') : '5.88';
  const cardFee = cardFeeElement ? (cardFeeElement.value || '6') : '6';
  
  if (!gameId || !gameName) {
    showToast('Preencha ID e Nome do jogo!', 'error');
    return null;
  }
  
  if (!priceSystemType) {
    showToast('Selecione o tipo de sistema de preços!', 'error');
    return null;
  }
  
  let configCode = `// ═══════════════════════════════════════════════════════════════
// 🎮 CONFIGURAÇÃO DE PREÇOS - ${gameName.toUpperCase()}
// ═══════════════════════════════════════════════════════════════
// Gerado automaticamente pelo Dashboard Admin
// Data: ${new Date().toLocaleString('pt-BR')}

const ${gameId}_CONFIG = {
  
  // ═══ COTAÇÃO DO DÓLAR ═══
  defaultExchangeRate: ${exchangeRate}, // R$ por dólar
  
  // ═══ TAXA DO CARTÃO ═══
  cardFeePercentage: ${(parseFloat(cardFee) / 100).toFixed(2)}, // ${cardFee}%
`;

  // Sistema de Moeda/Gold
  if (priceSystemType === 'currency' || priceSystemType === 'both') {
    const currencyName = document.getElementById('currencyName').value || 'Gold';
    const currencyUnit = document.getElementById('currencyUnit').value || 'k';
    const hasUSDT = document.getElementById('currencyHasUSDT').checked;
    const usdtPrice = document.getElementById('currencyUSDTPrice').value || '4.20';
    
    const tiers = [];
    document.querySelectorAll('.currency-tier').forEach((tier, index) => {
      const min = tier.querySelector('.tier-min').value || '0';
      const max = tier.querySelector('.tier-max').value || '5000';
      const price = tier.querySelector('.tier-price').value || '27.00';
      tiers.push({ min, max, price });
    });
    
    configCode += `
  
  // ═══ SISTEMA DE ${currencyName.toUpperCase()} ═══
  currencyName: "${currencyName}",
  currencyUnit: "${currencyUnit}",
  
  // Preços por faixa
  currencyRates: {
`;
    
    tiers.forEach((tier, index) => {
      const tierName = index === 0 ? 'base' : `tier${index}`;
      configCode += `    ${tierName}: { min: ${tier.min}, max: ${tier.max}, price: ${tier.price} }, // ${tier.min}-${tier.max}${currencyUnit}\n`;
    });
    
    if (hasUSDT) {
      configCode += `    usdt: ${usdtPrice} // Valor de 1${currencyUnit} ${currencyName} em USDT\n`;
    }
    
    configCode += `  },`;
  }
  
  // Sistema de Pacotes
  if (priceSystemType === 'packages' || priceSystemType === 'both') {
    const packageCurrencyElement = document.getElementById('packageCurrency');
    const packageCurrency = packageCurrencyElement ? (packageCurrencyElement.value || 'Diamonds') : 'Diamonds';
    
    const packages = [];
    document.querySelectorAll('.package-item').forEach(pkg => {
      const originalInput = pkg.querySelector('.pkg-original');
      const discountedInput = pkg.querySelector('.pkg-discounted');
      const quantityInput = pkg.querySelector('.pkg-quantity');
      
      const original = originalInput ? originalInput.value : null;
      const discounted = discountedInput ? discountedInput.value : null;
      const quantity = quantityInput ? quantityInput.value : null;
      
      if (discounted) {
        packages.push({ 
          original: original || discounted, 
          discounted, 
          quantity 
        });
      }
    });
    
    if (packages.length === 0) {
      showToast('Adicione pelo menos um pacote!', 'error');
      return null;
    }
    
    configCode += `
  
  // ═══ PACOTES DE ${packageCurrency.toUpperCase()} ═══
  // Preços em $ (o valor final em R$ será calculado pela API Binance)
  topUpPackages: {
`;
    
    packages.forEach(pkg => {
      const pkgId = Math.round(parseFloat(pkg.original || pkg.discounted));
      configCode += `    ${pkgId}: { originalPrice: ${pkg.original || pkg.discounted}, finalPrice: ${pkg.discounted}${pkg.quantity ? `, quantity: ${pkg.quantity}` : ''} }, // Pack $${pkg.original || pkg.discounted} → $${pkg.discounted}\n`;
    });
    
    configCode += `  }`;
  }
  
  configCode += `
};

// Torna disponível globalmente
if (typeof window !== 'undefined') {
  window.${gameId}_CONFIG = ${gameId}_CONFIG;
}

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ${gameId}_CONFIG;
}
`;
  
  return configCode;
}

function previewConfigPrecos() {
  const code = generateConfigPrecosCode();
  if (code) {
    document.getElementById('codePreview').textContent = code;
    document.getElementById('previewModal').classList.add('show');
    showToast('Config-precos.js gerado!', 'success');
  }
}

function previewNewGameComplete() {
  const code = generateNewGameCode();
  if (code) {
    const fullCode = `// ═══ ADICIONAR ESTE CÓDIGO NO ARRAY jogos: DO CONFIG.JS ═══\n\n${code},\n\n// ═══ Não esqueça da vírgula no final! ═══`;
    document.getElementById('codePreview').textContent = fullCode;
    document.getElementById('previewModal').classList.add('show');
    showToast('Código do config.js gerado!', 'success');
  }
}

function generateBasicGameHTML() {
  const gameIdElement = document.getElementById('gameId');
  const gameNameElement = document.getElementById('gameName');
  const gameEmojiElement = document.getElementById('gameEmoji');
  const priceSystemTypeElement = document.getElementById('priceSystemType');
  
  if (!gameIdElement || !gameNameElement || !gameEmojiElement || !priceSystemTypeElement) {
    showToast('Erro: Elementos do formulário não encontrados!', 'error');
    return null;
  }
  
  const gameId = gameIdElement.value.trim();
  const gameName = gameNameElement.value.trim();
  const gameEmoji = gameEmojiElement.value.trim();
  const priceSystemType = priceSystemTypeElement.value;
  
  if (!gameId || !gameName || !gameEmoji) {
    showToast('Preencha os campos básicos do jogo!', 'error');
    return null;
  }
  
  if (!priceSystemType) {
    showToast('Selecione o tipo de sistema de preços!', 'error');
    return null;
  }
  
  // Obter nome da moeda dos pacotes
  const packageCurrencyEl = document.getElementById('packageCurrency');
  const packageCurrency = packageCurrencyEl ? (packageCurrencyEl.value || 'Pacotes') : 'Pacotes';
  
  // Obter campos da conta configurados
  const accountFields = [];
  document.querySelectorAll('.account-field-item').forEach((field, index) => {
    const nameInput = field.querySelector('.field-name');
    const placeholderInput = field.querySelector('.field-placeholder');
    
    const name = nameInput ? nameInput.value.trim() : '';
    const placeholder = placeholderInput ? placeholderInput.value.trim() : '';
    
    if (name) {
      accountFields.push({
        id: `field${index + 1}`,
        name: name,
        placeholder: placeholder || `Digite ${name.toLowerCase()}`
      });
    }
  });
  
  // Se não houver campos, adicionar um padrão
  if (accountFields.length === 0) {
    accountFields.push({
      id: 'field1',
      name: 'Informações da Conta',
      placeholder: 'Digite as informações da conta'
    });
  }
  
  console.log('Campos da conta:', accountFields);
  
  // Gerar HTML COMPLETO com interface funcional
  let htmlCode = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${gameEmoji} ${gameName} - Daoshi Store</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
  
  <!-- 💰 Arquivo de Configuração de Preços -->
  <script src="config-precos.js"></script>
  
  <style>
    /* ===== PIXEL ART RETRO STYLE ===== */
    :root {
      --purple-dark: #1a0d24;
      --purple-vibrant: #9933ff;
      --purple-light: #b366ff;
      --pink: #ff69b4;
      --gold: #ffd700;
      --text-color: #f5f5f5;
      --panel-bg: rgba(45, 27, 61, 0.92);
      --input-bg: rgba(153, 51, 255, 0.2);
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      transition: none !important;
      image-rendering: pixelated;
    }
    
    body {
      background-image: url('https://lh3.googleusercontent.com/d/1ECtr_z7YWp_QugVyvTQBWTiV9d88m5zS');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      font-family: 'Press Start 2P', cursive;
      color: var(--text-color);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding: 15px;
      font-size: 10px;
      line-height: 1.6;
    }
    
    body::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, 
        rgba(26, 13, 36, 0.90) 0%,
        rgba(153, 51, 255, 0.3) 30%,
        rgba(179, 102, 255, 0.3) 60%,
        rgba(45, 27, 61, 0.90) 100%
      );
      z-index: -1;
    }
    
    .container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .header {
      text-align: center;
      background: var(--panel-bg);
      border: 4px solid var(--gold);
      padding: 20px;
      box-shadow: 8px 8px 0 rgba(0,0,0,0.5);
    }
    
    .header h1 {
      font-size: 24px;
      color: var(--gold);
      text-shadow: 3px 3px 0 var(--purple-vibrant);
      margin-bottom: 10px;
    }
    
    .panel {
      background: var(--panel-bg);
      border: 4px solid var(--purple-light);
      padding: 20px;
      box-shadow: 8px 8px 0 rgba(0,0,0,0.5);
    }
    
    .panel-header {
      border-bottom: 3px solid var(--gold);
      margin-bottom: 15px;
      padding-bottom: 10px;
      text-align: center;
    }
    
    .panel-header h2 {
      font-size: 16px;
      color: var(--gold);
      text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
    }
    
    .package-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 15px;
      margin-bottom: 20px;
    }
    
    .package-card {
      background: rgba(0, 0, 0, 0.5);
      border: 3px solid var(--purple-vibrant);
      padding: 15px;
      box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
      cursor: pointer;
      position: relative;
    }
    
    .package-card:hover {
      border-color: var(--gold);
      box-shadow: 6px 6px 0 rgba(0,0,0,0.5), 0 0 15px var(--gold);
    }
    
    .package-card.selected {
      border-color: var(--gold);
      background: rgba(153, 51, 255, 0.3);
    }
    
    .package-original {
      text-decoration: line-through;
      color: var(--purple-light);
      font-size: 9px;
    }
    
    .package-price {
      color: var(--gold);
      font-size: 14px;
      margin: 10px 0;
    }
    
    .package-discount {
      background: var(--pink);
      color: white;
      padding: 3px 8px;
      font-size: 8px;
      position: absolute;
      top: 10px;
      right: 10px;
    }
    
    input[type="text"] {
      width: 100%;
      padding: 10px;
      background: var(--input-bg);
      color: var(--text-color);
      border: 3px solid var(--gold);
      font-family: 'Press Start 2P', cursive;
      font-size: 10px;
      box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
      margin-bottom: 10px;
    }
    
    input[type="text"]:focus {
      outline: none;
      border-color: var(--pink);
      box-shadow: 4px 4px 0 rgba(0,0,0,0.5), 0 0 15px var(--pink);
    }
    
    .btn {
      display: inline-block;
      width: 100%;
      padding: 15px;
      background: linear-gradient(135deg, var(--purple-vibrant), var(--pink));
      border: 3px solid var(--gold);
      color: white;
      font-family: 'Press Start 2P', cursive;
      font-size: 10px;
      cursor: pointer;
      box-shadow: 6px 6px 0 rgba(0,0,0,0.5);
      text-align: center;
    }
    
    .btn:hover {
      box-shadow: 8px 8px 0 rgba(0,0,0,0.5), 0 0 20px var(--gold);
    }
    
    .btn:active {
      transform: translate(2px, 2px);
      box-shadow: 2px 2px 0 rgba(0,0,0,0.5);
    }
    
    .result-box {
      background: rgba(0, 0, 0, 0.7);
      border: 3px solid var(--gold);
      padding: 20px;
      margin-top: 20px;
      box-shadow: 4px 4px 0 rgba(0,0,0,0.5);
    }
    
    .result-item {
      display: flex;
      justify-content: space-between;
      margin: 10px 0;
      font-size: 9px;
    }
    
    .result-label {
      color: var(--purple-light);
    }
    
    .result-value {
      color: var(--gold);
      font-weight: bold;
    }
    
    .total-price {
      font-size: 18px;
      color: var(--pink);
      text-shadow: 2px 2px 0 rgba(0,0,0,0.5);
    }
    
    .form-group {
      margin: 15px 0;
    }
    
    label {
      display: block;
      color: var(--gold);
      margin-bottom: 8px;
      font-size: 9px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>${gameEmoji} ${gameName} ${gameEmoji}</h1>
      <p style="color: var(--pink);">Daoshi Store - Loja Premium</p>
    </div>
    
    <div class="panel">
      <div class="panel-header">
        <h2>💰 ${packageCurrency}</h2>
      </div>
      
      <div class="package-grid" id="packageGrid">
        <!-- Pacotes serão gerados aqui -->
      </div>
      
      ${accountFields.map(field => `
      <div class="form-group">
        <label>${field.name.toUpperCase()}</label>
        <input type="text" id="${field.id}" placeholder="${field.placeholder}">
      </div>`).join('')}
      
      <button class="btn" onclick="copyToClipboard()">📋 COPIAR INFORMAÇÕES</button>
      
      <div class="result-box" id="resultBox" style="display: none;">
        <div class="result-item">
          <span class="result-label">Pacote Selecionado:</span>
          <span class="result-value" id="selectedPackage">-</span>
        </div>
        <div class="result-item">
          <span class="result-label">Valor Original:</span>
          <span class="result-value" id="originalPrice">-</span>
        </div>
        <div class="result-item">
          <span class="result-label">Desconto:</span>
          <span class="result-value" id="discountInfo">-</span>
        </div>
        <div class="result-item">
          <span class="result-label">Cotação Dólar (Binance):</span>
          <span class="result-value" id="exchangeRate">Carregando...</span>
        </div>
        <div class="result-item" style="margin-top: 15px; padding-top: 15px; border-top: 2px solid var(--purple-light);">
          <span class="result-label">TOTAL A PAGAR:</span>
          <span class="result-value total-price" id="totalPrice">R$ 0,00</span>
        </div>
      </div>
    </div>
  </div>
  
  <script>
    const CONFIG = window.${gameId.toUpperCase()}_CONFIG || {};
    let selectedPackage = null;
    let currentExchangeRate = CONFIG.defaultExchangeRate || 5.88;
    
    // Campos da conta configurados
    const ACCOUNT_FIELDS = ${JSON.stringify(accountFields)};
    
    console.log('💰 Config carregado:', CONFIG);
    console.log('📋 Campos da conta:', ACCOUNT_FIELDS);
    
    // Carregar pacotes
    if (CONFIG.topUpPackages) {
      const grid = document.getElementById('packageGrid');
      Object.entries(CONFIG.topUpPackages).forEach(([key, pkg]) => {
        const card = document.createElement('div');
        card.className = 'package-card';
        card.onclick = () => selectPackage(key, pkg);
        
        const discountPercent = pkg.discount || 0;
        const originalPrice = pkg.originalPrice || 0;
        const finalPrice = originalPrice * (1 - discountPercent / 100);
        
        card.innerHTML = \`
          <div class="package-discount">-\${discountPercent}%</div>
          <div style="color: var(--purple-light); font-size: 11px; margin-bottom: 8px;">
            💎 ${packageCurrency} Pack
          </div>
          <div class="package-original">U$ \${originalPrice.toFixed(2)}</div>
          <div class="package-price">U$ \${finalPrice.toFixed(2)}</div>
          \${pkg.quantity ? \`<div style="color: var(--purple-light); font-size: 8px; margin-top: 8px;">\${pkg.quantity} itens</div>\` : ''}
        \`;
        
        grid.appendChild(card);
      });
    }
    
    // Carregar taxa Binance
    async function loadExchangeRate() {
      try {
        const response = await fetch('https://api.binance.com/api/v3/ticker/price?symbol=USDTBRL');
        const data = await response.json();
        currentExchangeRate = parseFloat(data.price);
        
        // Aplicar taxa do cartão
        if (CONFIG.cardFeePercentage) {
          currentExchangeRate *= (1 + CONFIG.cardFeePercentage);
        }
        
        document.getElementById('exchangeRate').textContent = 'R$ ' + currentExchangeRate.toFixed(2);
        
        // Atualizar preço se houver pacote selecionado
        if (selectedPackage) {
          updateTotalPrice();
        }
      } catch (error) {
        console.error('Erro ao carregar cotação:', error);
        document.getElementById('exchangeRate').textContent = 'R$ ' + currentExchangeRate.toFixed(2) + ' (padrão)';
      }
    }
    
    function selectPackage(key, pkg) {
      selectedPackage = { key, ...pkg };
      
      // Remover seleção anterior
      document.querySelectorAll('.package-card').forEach(c => c.classList.remove('selected'));
      
      // Adicionar seleção atual
      event.currentTarget.classList.add('selected');
      
      // Atualizar informações
      updateTotalPrice();
      document.getElementById('resultBox').style.display = 'block';
    }
    
    function updateTotalPrice() {
      if (!selectedPackage) return;
      
      const original = selectedPackage.originalPrice || 0;
      const discount = selectedPackage.discount || 0;
      const final = original * (1 - discount / 100);
      const totalBRL = final * currentExchangeRate;
      
      document.getElementById('selectedPackage').textContent = '${packageCurrency} Pack $' + original.toFixed(2);
      document.getElementById('originalPrice').textContent = 'U$ ' + original.toFixed(2);
      document.getElementById('discountInfo').textContent = discount + '% (-U$ ' + (original - final).toFixed(2) + ')';
      document.getElementById('totalPrice').textContent = 'R$ ' + totalBRL.toFixed(2);
    }
    
    function copyToClipboard() {
      if (!selectedPackage) {
        alert('⚠️ Selecione um pacote primeiro!');
        return;
      }
      
      // Coletar todos os campos da conta
      const accountData = [];
      let hasEmptyFields = false;
      
      ACCOUNT_FIELDS.forEach(field => {
        const input = document.getElementById(field.id);
        const value = input ? input.value.trim() : '';
        
        if (!value) {
          hasEmptyFields = true;
        }
        
        accountData.push({
          name: field.name,
          value: value
        });
      });
      
      if (hasEmptyFields) {
        alert('⚠️ Preencha todos os campos da conta!');
        return;
      }
      
      const original = selectedPackage.originalPrice || 0;
      const discount = selectedPackage.discount || 0;
      const final = original * (1 - discount / 100);
      const totalBRL = final * currentExchangeRate;
      
      // Montar informações da conta
      const accountInfo = accountData.map(field => \`\${field.name}: \${field.value}\`).join('\\n');
      
      const text = \`
═══════════════════════════════
${gameEmoji} ${gameName} - ${packageCurrency}
═══════════════════════════════

💎 PACOTE: $\${original.toFixed(2)} (-\${discount}%)
💰 VALOR: U$ \${final.toFixed(2)}
💵 TOTAL: R$ \${totalBRL.toFixed(2)}

📋 INFORMAÇÕES DA CONTA:
\${accountInfo}

═══════════════════════════════
🏪 Daoshi Store - Loja Premium
═══════════════════════════════
      \`.trim();
      
      navigator.clipboard.writeText(text).then(() => {
        alert('✅ Informações copiadas!');
      }).catch(err => {
        console.error('Erro ao copiar:', err);
        alert('❌ Erro ao copiar. Tente novamente!');
      });
    }
    
    // Carregar taxa ao iniciar
    loadExchangeRate();
    setInterval(loadExchangeRate, 60000); // Atualizar a cada 1 minuto
  </script>
</body>
</html>`;
  
  return htmlCode;
}

function previewGameHTML() {
  const html = generateBasicGameHTML();
  if (html) {
    document.getElementById('codePreview').textContent = html;
    document.getElementById('previewModal').classList.add('show');
    showToast('HTML básico gerado!', 'success');
  }
}

async function saveCompleteGame() {
  if (!projectDirectoryHandle) {
    showToast('⚠️ Conecte a pasta do projeto primeiro!', 'warning');
    const shouldConnect = confirm('Deseja conectar a pasta do projeto agora?');
    if (shouldConnect) {
      await requestProjectAccess();
      if (!projectDirectoryHandle) {
        showToast('Operação cancelada!', 'warning');
        return;
      }
    } else {
      return;
    }
  }
  
  const gameIdElement = document.getElementById('gameId');
  const gameNameElement = document.getElementById('gameName');
  
  if (!gameIdElement || !gameNameElement) {
    showToast('Erro: Campos de ID ou Nome não encontrados!', 'error');
    return;
  }
  
  const gameId = gameIdElement.value.trim();
  const gameName = gameNameElement.value.trim();
  
  if (!gameId || !gameName) {
    showToast('Preencha ID e Nome do jogo!', 'error');
    return;
  }
  
  try {
    // 1. Adicionar ao config.js
    showToast('📝 Adicionando ao config.js...', 'warning');
    const gameCode = generateNewGameCode();
    if (!gameCode) return;
    
    const configFileHandle = await projectDirectoryHandle.getFileHandle('config.js', { create: false });
    const configFile = await configFileHandle.getFile();
    let configContent = await configFile.text();
    
    const jogosArrayMatch = configContent.match(/jogos:\s*\[([\s\S]*?)\]/);
    if (jogosArrayMatch) {
      const newJogosArray = jogosArrayMatch[0].replace(/\]$/, `,\n${gameCode}\n  ]`);
      configContent = configContent.replace(jogosArrayMatch[0], newJogosArray);
      
      const writable = await configFileHandle.createWritable();
      await writable.write(configContent);
      await writable.close();
      showToast('✅ Config.js atualizado!', 'success');
    }
    
    // 2. Criar pasta do jogo
    showToast(`📁 Criando pasta ${gameId}...`, 'warning');
    const gameFolder = await projectDirectoryHandle.getDirectoryHandle(gameId, { create: true });
    
    // 3. Salvar config-precos.js
    showToast('💰 Salvando config-precos.js...', 'warning');
    const configPrecosCode = generateConfigPrecosCode();
    if (configPrecosCode) {
      const configPrecosHandle = await gameFolder.getFileHandle('config-precos.js', { create: true });
      const configPrecosWritable = await configPrecosHandle.createWritable();
      await configPrecosWritable.write(configPrecosCode);
      await configPrecosWritable.close();
      showToast('✅ config-precos.js salvo!', 'success');
    }
    
    // 4. Salvar index.html
    showToast('📄 Salvando index.html...', 'warning');
    const htmlCode = generateBasicGameHTML();
    if (htmlCode) {
      const htmlHandle = await gameFolder.getFileHandle('index.html', { create: true });
      const htmlWritable = await htmlHandle.createWritable();
      await htmlWritable.write(htmlCode);
      await htmlWritable.close();
      showToast('✅ index.html salvo!', 'success');
    }
    
    showToast(`🎉 ${gameName} adicionado com sucesso!`, 'success');
    showToast('🔄 Recarregue o site principal para ver o novo jogo!', 'warning');
    
    setTimeout(() => showSection('home'), 2000);
    
  } catch (error) {
    console.error('Erro:', error);
    showToast('Erro: ' + error.message, 'error');
  }
}

function copyAllCode() {
  const configJs = generateNewGameCode();
  const configPrecos = generateConfigPrecosCode();
  const html = generateBasicGameHTML();
  
  if (!configJs || !configPrecos || !html) {
    showToast('Erro ao gerar códigos. Verifique os campos!', 'error');
    return;
  }
  
  const allCode = `// ═══════════════════════════════════════════════════════════════
// 📋 CÓDIGO COMPLETO - COPIE E COLE MANUALMENTE
// ═══════════════════════════════════════════════════════════════

// ═══ 1️⃣ ADICIONAR NO CONFIG.JS (array jogos) ═══

${configJs},


// ═══ 2️⃣ CRIAR ARQUIVO: ${document.getElementById('gameId').value}/config-precos.js ═══

${configPrecos}


// ═══ 3️⃣ CRIAR ARQUIVO: ${document.getElementById('gameId').value}/index.html ═══

${html}


// ═══════════════════════════════════════════════════════════════
// ✅ PRONTO! Siga estes passos:
// 1. Adicione o código 1 no array jogos do config.js
// 2. Crie a pasta do jogo e os arquivos config-precos.js e index.html
// 3. Recarregue o site principal
// ═══════════════════════════════════════════════════════════════
`;
  
  navigator.clipboard.writeText(allCode).then(() => {
    showToast('✅ Todos os códigos copiados!', 'success');
  }).catch(() => {
    showToast('Erro ao copiar', 'error');
  });
}

