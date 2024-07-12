// Recupero la griglia
document.getElementById('generateGrid').addEventListener('click', function () {
    
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    // Genero le celle
    for (let i = 1; i <= 100; i++) {
        const square = document.createElement('div');
        square.className = 'square';
        square.textContent = i;


});