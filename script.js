// Dados dos métodos para verificar dispositivos conectados ao hotspot
const methods = [
    {
        id: 1,
        title: "Configurações do Android",
        description: "O método mais direto e disponível em todos os dispositivos Android.",
        icon: "settings",
        colorClass: "icon-blue",
        steps: [
            "Abra as Configurações do seu dispositivo",
            "Vá em 'Rede e Internet' ou 'Conexões'",
            "Toque em 'Hotspot e Tethering'",
            "Selecione 'Hotspot Wi-Fi'",
            "Veja a lista de 'Dispositivos conectados'"
        ]
    },
    {
        id: 2,
        title: "Painel de Notificações",
        description: "Acesso rápido através das configurações rápidas do Android.",
        icon: "notification",
        colorClass: "icon-purple",
        steps: [
            "Deslize para baixo a partir do topo da tela",
            "Pressione e segure o ícone do Hotspot",
            "Visualize os dispositivos conectados",
            "Toque para gerenciar conexões"
        ]
    },
    {
        id: 3,
        title: "Aplicativos de Terceiros",
        description: "Apps especializados oferecem mais recursos e detalhes.",
        icon: "apps",
        colorClass: "icon-green",
        steps: [
            "Abra a Google Play Store",
            "Pesquise por 'Who Use My WiFi' ou 'Fing'",
            "Instale o aplicativo escolhido",
            "Abra o app e escaneie sua rede",
            "Veja todos os dispositivos com detalhes"
        ]
    },
    {
        id: 4,
        title: "ADB (Android Debug Bridge)",
        description: "Método avançado para usuários técnicos usando linha de comando.",
        icon: "terminal",
        colorClass: "icon-orange",
        steps: [
            "Ative a Depuração USB nas opções do desenvolvedor",
            "Conecte o dispositivo ao computador",
            "Abra o terminal/prompt de comando",
            "Execute: adb shell ip neigh show",
            "Analise os endereços IP e MAC listados"
        ]
    },
    {
        id: 5,
        title: "Arquivo ARP do Sistema",
        description: "Acesse diretamente o arquivo de cache ARP do Android.",
        icon: "file",
        colorClass: "icon-yellow",
        steps: [
            "Abra um aplicativo de terminal no Android",
            "Execute: cat /proc/net/arp",
            "Visualize a tabela ARP com IPs e MACs",
            "Identifique os dispositivos conectados"
        ]
    },
    {
        id: 6,
        title: "Gerenciador de Banda",
        description: "Alguns dispositivos têm opção de limitar e ver conexões.",
        icon: "bandwidth",
        colorClass: "icon-indigo",
        steps: [
            "Acesse Configurações > Hotspot Wi-Fi",
            "Procure por 'Gerenciar dispositivos'",
            "Veja o consumo de dados por dispositivo",
            "Bloqueie dispositivos indesejados se necessário"
        ]
    }
];

// Função para criar o ícone SVG baseado no tipo
function getIcon(iconType) {
    const icons = {
        settings: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>`,
        notification: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
        </svg>`,
        apps: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
        </svg>`,
        terminal: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>`,
        file: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>`,
        bandwidth: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>`
    };
    return icons[iconType] || icons.settings;
}

// Função para criar um card de método
function createMethodCard(method) {
    const stepsHtml = method.steps.map((step, index) => `
        <li>
            <span class="step-badge">${index + 1}</span>
            <span>${step}</span>
        </li>
    `).join('');

    return `
        <div class="method-card">
            <div class="icon-container ${method.colorClass}">
                ${getIcon(method.icon)}
            </div>
            <h4>${method.title}</h4>
            <p>${method.description}</p>
            <div class="steps-container">
                <h5>PASSO A PASSO:</h5>
                <ul class="steps-list">
                    ${stepsHtml}
                </ul>
            </div>
        </div>
    `;
}

// Função para renderizar todos os métodos
function renderMethods() {
    const container = document.getElementById('methods-container');
    if (container) {
        container.innerHTML = methods.map(method => createMethodCard(method)).join('');
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    renderMethods();
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
