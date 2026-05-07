/**
 * Gerencia as abas do menu gastronômico
 */
export function initMenuTabs() {
    const tabButtons = document.querySelectorAll('.menu__tab-btn');
    const tabContents = document.querySelectorAll('.menu__container');

    if (!tabButtons.length || !tabContents.length) return;

    // Função para abrir uma aba específica
    function openTab(tabId) {
        // Esconde todos os conteúdos
        tabContents.forEach(content => {
            content.classList.remove('active');
            content.style.display = 'none';
        });

        // Remove classe ativa de todos os botões
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        // Mostra o conteúdo alvo
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.style.display = 'grid';
            
            // Força o ScrollTrigger a atualizar após mudar o layout do menu
            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }

            // Timeout para permitir transição CSS se houver
            setTimeout(() => {
                targetContent.classList.add('active');
            }, 10);
        }

        // Ativa o botão correspondente
        const activeButton = document.querySelector(`.menu__tab-btn[data-target="${tabId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Adiciona listeners aos botões
    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const targetId = btn.getAttribute('data-target');
            openTab(targetId);
        });
    });

    // Inicializa a primeira aba (ou a que tiver a classe active)
    const initialActive = document.querySelector('.menu__tab-btn.active');
    if (initialActive) {
        const targetId = initialActive.getAttribute('data-target');
        openTab(targetId);
    } else {
        // Fallback para o primeiro
        const firstTab = tabButtons[0].getAttribute('data-target');
        openTab(firstTab);
    }
}
