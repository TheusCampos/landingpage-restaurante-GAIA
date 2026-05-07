/**
 * GAIA - Coffee & Gastronomy
 * Main JavaScript File
 */
(function() {
    'use strict';

    document.documentElement.classList.add('js');

    function initNavigation() {
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

    function initAnimations() {
        if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
            console.warn('GSAP ou ScrollTrigger não carregaram!');
            return;
        }

        gsap.registerPlugin(ScrollTrigger);

        const revealElements = [
            { selector: '.reveal', from: { y: 50 }, to: { y: 0 } },
            { selector: '.reveal-left', from: { x: -70 }, to: { x: 0 } },
            { selector: '.reveal-right', from: { x: 70 }, to: { x: 0 } }
        ];

        revealElements.forEach(({ selector, from, to }) => {
            document.querySelectorAll(selector).forEach(el => {
                gsap.fromTo(el,
                    { opacity: 0, ...from },
                    {
                        opacity: 1,
                        ...to,
                        duration: 1.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            toggleActions: "play none none none"
                        }
                    }
                );
            });
        });

        document.querySelectorAll('.highlights__img, .about__img, .chef__image').forEach(img => {
            gsap.to(img, {
                yPercent: 10,
                ease: "none",
                scrollTrigger: {
                    trigger: img,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });
        });

        gsap.from(".hero__deco-line", {
            width: 0,
            duration: 1.5,
            ease: "power4.inOut",
            delay: 1
        });

        gsap.from(".hero__title span", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3
        });

        gsap.from(".hero__title", {
            y: 20,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.5
        });

        gsap.from(".hero__text", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.7
        });

        gsap.from(".hero__actions", {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.9
        });
    }

    function initMenuTabs() {
        const tabButtons = document.querySelectorAll('.menu__tab-btn');
        const tabContents = document.querySelectorAll('.menu__container');

        if (!tabButtons.length || !tabContents.length) return;

        function openTab(tabId) {
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            tabButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.style.display = 'grid';
                setTimeout(() => {
                    targetContent.classList.add('active');
                }, 10);
            }

            const activeButton = document.querySelector(`.menu__tab-btn[data-target="${tabId}"]`);
            if (activeButton) {
                activeButton.classList.add('active');
            }

            if (typeof ScrollTrigger !== 'undefined') {
                ScrollTrigger.refresh();
            }
        }

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-target');
                openTab(targetId);
            });
        });

        const initialActive = document.querySelector('.menu__tab-btn.active');
        if (initialActive) {
            const targetId = initialActive.getAttribute('data-target');
            openTab(targetId);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initAnimations();
        initMenuTabs();
    });

})();