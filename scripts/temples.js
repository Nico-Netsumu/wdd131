// Blank Line

const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger
const hamburgerButton = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburgerButton.addEventListener('click', () => {
    const isHidden = menu.classList.contains('hidden');

    if (isHidden) {
        menu.classList.remove('hidden');
        hamburgerButton.textContent = 'X';
    } else {
        menu.classList.add('hidden');
        hamburgerButton.textContent = '☰';
    }
});
