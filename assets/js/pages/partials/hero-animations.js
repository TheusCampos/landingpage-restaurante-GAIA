/**
 * Animações específicas para a Hero Section
 */
export function initHeroAnimations() {
    const tl = gsap.timeline();

    tl.from(".hero__title span", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    })
    .from(".hero__title", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    }, "-=0.7")
    .from(".hero__text", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7")
    .from(".hero__actions", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
    }, "-=0.7")
    .from(".hero__deco", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
    }, "-=0.5");
}
