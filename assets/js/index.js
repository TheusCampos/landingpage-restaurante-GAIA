/**
 * Ponto de entrada principal
 */
import { initNavigation } from './global/navigation.js';
import { initAnimations } from './global/animations.js';
import { initHeroAnimations } from './pages/partials/hero-animations.js';
import { initScrollEffects } from './pages/partials/scroll-effects.js';
import { initMenuTabs } from './pages/partials/menu-tabs.js';

// Marca o documento como "JS habilitado" apenas se os módulos carregarem
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initAnimations(); // Registra plugins e globais
    initHeroAnimations();
    initScrollEffects();
    initMenuTabs();
    
    console.log('GAIA Application Initialized');
});
