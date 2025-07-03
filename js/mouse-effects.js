// Cria uma div que servirá como container para as notas
const noteContainer = document.createElement('div');
noteContainer.setAttribute('id', 'note-container');
document.body.appendChild(noteContainer);

// Array de notas musicais que podem aparecer
const notes = ['♪', '♫', '♩', '♭', '♮', '♯'];
let lastMove = 0;

document.addEventListener('mousemove', function(e) {
    // Para evitar sobrecarga, a função só roda a cada 50ms
    const now = Date.now();
    if (now - lastMove < 50) {
        return;
    }
    lastMove = now;

    // Cria o elemento da nota
    const note = document.createElement('span');
    note.className = 'musical-note';
    
    // Posiciona a nota onde o mouse está
    note.style.left = e.pageX + 'px';
    note.style.top = e.pageY + 'px';
    
    // Escolhe uma nota aleatória do array
    note.textContent = notes[Math.floor(Math.random() * notes.length)];
    
    // Adiciona tamanhos e rotações aleatórias para um efeito mais dinâmico
    const size = Math.random() * 20 + 15; // Tamanho entre 15px e 35px
    note.style.fontSize = size + 'px';
    
    const rotation = (Math.random() - 0.5) * 40; // Rotação entre -20 e +20 graus
    note.style.transform = `rotate(${rotation}deg)`;
    
    // Adiciona a nota ao container
    noteContainer.appendChild(note);
    
    // Remove a nota do DOM após a animação terminar (2 segundos)
    setTimeout(() => {
        note.remove();
    }, 2000);
});