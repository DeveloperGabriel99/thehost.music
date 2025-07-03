document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
    const navList = document.querySelector('.nav-list');

    // Função para o menu hambúrguer
    mobileMenuIcon.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link (útil para one-page)
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (navList.classList.contains('active')) {
                navList.classList.remove('active');
            }
        });
    });

});