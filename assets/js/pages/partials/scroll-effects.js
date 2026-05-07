/**
 * Efeitos de Scroll e Revelação de conteúdo utilizando GSAP
 */
export function initScrollEffects() {
    console.log('Iniciando ScrollEffects...');

    // Registra o plugin ScrollTrigger caso não esteja registrado
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        console.log('GSAP e ScrollTrigger detectados e registrados.');
    } else {
        console.error('GSAP ou ScrollTrigger não encontrados!');
        return;
    }

    // Configuração comum para as revelações
    const revealSettings = (el, vars) => {
        console.log('Aplicando animação em:', el);
        gsap.fromTo(el, 
            { 
                opacity: 0, 
                ...vars.from 
            }, 
            {
                opacity: 1,
                ...vars.to,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    onEnter: () => console.log('Elemento entrou no viewport:', el)
                }
            }
        );
    };

    // 1. Reveal padrão (de baixo para cima)
    const standardReveals = document.querySelectorAll('.reveal');
    console.log('Encontrados .reveal:', standardReveals.length);
    standardReveals.forEach(el => {
        revealSettings(el, { from: { y: 50 }, to: { y: 0 } });
    });

    // 2. Reveal da esquerda (vem da esquerda para direita)
    const leftReveals = document.querySelectorAll('.reveal-left');
    console.log('Encontrados .reveal-left:', leftReveals.length);
    leftReveals.forEach(el => {
        revealSettings(el, { from: { x: -70 }, to: { x: 0 } });
    });

    // 3. Reveal da direita (vem da direita para esquerda)
    const rightReveals = document.querySelectorAll('.reveal-right');
    console.log('Encontrados .reveal-right:', rightReveals.length);
    rightReveals.forEach(el => {
        revealSettings(el, { from: { x: 70 }, to: { x: 0 } });
    });

    // Parallax suave em imagens decorativas e principais
    const parallaxImgs = document.querySelectorAll('.highlights__img, .about__img, .chef__image, .about__deco, .menu__deco--tree');
    console.log('Encontrados elementos para parallax:', parallaxImgs.length);
    parallaxImgs.forEach(img => {
        gsap.to(img, {
            yPercent: 15,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });
    });

    // Animação especial para as linhas decorativas do Hero
    gsap.from(".hero__deco-line", {
        width: 0,
        duration: 1.5,
        ease: "power4.inOut",
        delay: 1
    });
}
