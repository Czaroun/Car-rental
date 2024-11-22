// Funkcja do sprawdzenia, czy strona jest uruchomiona lokalnie
const adjustLinks = () => {
    const isLocal = window.location.protocol === 'file:';
    const links = document.querySelectorAll('.home-link'); // Wybieramy linki do strony głównej

    links.forEach(link => {
        if (isLocal) {
            // Jeśli lokalnie (plik file://), ustawiamy linki na index.html
            link.href = "../index.html";
        } else {
            // Jeśli na GitHub Pages (https://github.com/...), ustawiamy linki na /
            link.href = "../";
        }
    });
};

document.addEventListener('DOMContentLoaded', adjustLinks);