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

// Editar jogo específico
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

// Mensagem de boas-vindas
window.onload = function() {
  console.log('%c⚙️ Dashboard Admin - Daoshi Store', 'font-size: 20px; color: #9933ff; font-weight: bold;');
  console.log('%cSistema de gerenciamento de preços carregado!', 'font-size: 14px; color: #ff69b4;');
  console.log('%c✅ Todos os 5 jogos implementados!', 'font-size: 14px; color: #00ff88;');
  
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

