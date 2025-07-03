document.addEventListener('DOMContentLoaded', () => {

    const donateButton = document.getElementById('donate-btn');
    const pixInfo = document.getElementById('pix-info');

    // Verifica se os elementos existem na página antes de adicionar o evento
    if (donateButton && pixInfo) {
        donateButton.addEventListener('click', () => {
            // Mostra a área de informações do PIX
            pixInfo.classList.remove('hidden');
            
            // Esconde o botão "Fazer uma doação" para não ser clicado de novo
            donateButton.style.display = 'none'; 
        });
    }

});