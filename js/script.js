document.addEventListener('DOMContentLoaded', () => {

    // --- CÓDIGO DO MENU MOBILE (Existente) ---
    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navList = document.querySelector('.nav-list');

    if (mobileMenuIcon && navList) {
        mobileMenuIcon.addEventListener('click', () => {
            navList.classList.toggle('active');
        });

        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('active')) {
                    navList.classList.remove('active');
                }
            });
        });
    }

    // --- NOVO CÓDIGO PARA ANIMAÇÕES DE SCROLL (ScrollReveal) ---
    if (typeof ScrollReveal !== 'undefined') {
        const sr = ScrollReveal({
            origin: 'bottom',      // De onde a animação vem (top, bottom, left, right)
            distance: '60px',      // Distância do deslocamento
            duration: 2000,        // Duração da animação em ms
            delay: 200,            // Atraso antes da animação começar em ms
            reset: false           // A animação acontece apenas uma vez
        });

        // Aplicando animações a elementos específicos
        // --- Página Principal (index.html) ---
        sr.reveal('.hero-content h1, .hero-content p', { origin: 'top' });
        sr.reveal('.hero-buttons', { delay: 600 });
        sr.reveal('#about .about-icon', { origin: 'left', distance: '100px' });
        sr.reveal('#about .about-text', { origin: 'right', distance: '100px' });
        sr.reveal('#services .service-card', { interval: 200 });
        sr.reveal('#discover h2, #discover .section-subtitle', { origin: 'top' });
        sr.reveal('#discover .artist-card', { interval: 150 });
        sr.reveal('#discover .primary-outline', { delay: 500 });
        sr.reveal('#critics .critic-card', { interval: 200, scale: 0.85 });

        // --- Páginas Secundárias ---
        sr.reveal('.donation-container', { scale: 0.9 });
        sr.reveal('.placeholder-content', { scale: 0.9, duration: 1500 });
    }
});