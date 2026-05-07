/**
 * Registra plugins GSAP e configurações globais
 */
export function initAnimations() {
    console.log('Registrando plugins GSAP globais...');
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        
        // Configurações padrão do ScrollTrigger
        ScrollTrigger.config({
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize"
        });
        console.log('ScrollTrigger registrado com sucesso.');
    } else {
        console.error('Falha ao registrar ScrollTrigger: GSAP ou ScrollTrigger não definidos no escopo global.');
    }
}
