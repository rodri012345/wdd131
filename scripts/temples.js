// Menú hamburguesa
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    if (menu.classList.contains('active')) {
        hamburger.textContent = '✖'; // Cambiar a "X"
        hamburger.setAttribute('aria-label', 'Close Menu');
    } else {
        hamburger.textContent = '☰'; // Cambiar a "hamburguesa"
        hamburger.setAttribute('aria-label', 'Open Menu');
    }
});

// Año actual y última modificación
const yearSpan = document.getElementById('year');
const lastModifiedSpan = document.getElementById('lastModified');

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

