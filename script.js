// Funkcja do sprawdzenia, czy strona jest uruchomiona lokalnie
const adjustLinks = () => {
    const isLocal = window.location.protocol === 'file:';
    const links = document.querySelectorAll('.home-link'); // Wybieramy linki do strony głównej
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    const figureSlider = document.getElementById('slider');

    links.forEach(link => {
        if (isLocal) {
            // Jeśli lokalnie (plik file://), ustawiamy linki na index.html
            link.href = "index.html";
        }
    });

    portfolioLinks.forEach(link => {
       if (isLocal) {
           // Jeśli lokalnie (plik file://), ustawiamy linki na pelny adres
           link.href = "https://krystianbeduch.github.io/";
       }
    });

    const images = [
        "audi_a8",
        "audi_q8",
        "audi_rs7",
        "bentley_continental_gt",
        "bmw_m2",
        "bmw_m3",
        "bmw_m5",
        "bmw_m8",
        "chevrolet_camaro",
        "chevrolet_corvette",
        "ferrari_488_spider",
        "fiat_tipo",
        "ford_mustang_gt",
        "jaguar_xf",
        "lamborghini_aventador",
        "lamborghini_urus",
        "lexus_lc_500",
        "maserati_levante",
        "maybach_klasa_s",
        "mercedes_klasa_a",
        "mercedes_klasa_c",
        "mercedes_klasa_e",
        "mercedes_klasa_g",
        "mercedes_klasa_s",
        "nissan_leaf",
        "rolls_royce_cullinan",
        "rolls_royce_ghost",
        "rolls_royce_wraith",
        "tesla_model_x",
        "volvo_xc90"
    ];

    if (figureSlider) {
        for (let i = 0; i < 10; i++) {
            const random = Math.floor(Math.random() * images.length);
            const pathToFile = "oferta/car_photos/" + images[random] + ".jpg";
            console.log(pathToFile);
            images.pop();
            const img = document.createElement("img");
            img.src = pathToFile;
            img.alt = images[random];
            figureSlider.appendChild(img);
            console.log("test");
        }
    }

    // let randomImages = [];







};

document.addEventListener('DOMContentLoaded', adjustLinks);