// Blank Line

const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

const lastModified = document.lastModified;
lastModifiedSpan.textContent = lastModified;

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
