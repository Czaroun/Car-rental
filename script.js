// Funkcja do sprawdzenia, czy strona jest uruchomiona lokalnie
const adjustLinks = () => {
    const isLocal = window.location.protocol === 'file:';
    const links = document.querySelectorAll('.home-link'); // Wybieramy linki do strony głównej
    const portfolioLinks = document.querySelectorAll('.portfolio-link');

    links.forEach(link => {
        if (isLocal) {
            // Jeśli lokalnie (plik file://), ustawiamy linki na index.html
            link.href = "index.html";
        }
    });

    portfolioLinks.forEach(link => {
       if (isLocal) {
           link.href = "https://krystianbeduch.github.io/";
       }
    });
};

document.addEventListener('DOMContentLoaded', adjustLinks);