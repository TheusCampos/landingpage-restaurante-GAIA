/**
 * Gerencia o efeito de scroll na navegação principal
 */
export function initNavigation() {
    const header = document.querySelector('.header');
    
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });
}
