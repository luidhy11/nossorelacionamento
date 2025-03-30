// Função para iniciar o contador
function startCounter() {
    const startDate = new Date("2024-07-27T19:40:00");

    function updateCounter() {
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('counter').innerText =
            `${years} anos, ${days} dias, ${hours} h, ${minutes} m, ${seconds} s`;
    }

    setInterval(updateCounter, 1000);
}

// Função para o carrossel de fotos
const photos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
    "foto9.jpg",
    "foto10.jpg",
    "foto11.jpg",
    "foto12.jpg",
    "foto13.png",
    // Adicione mais fotos aqui, se necessário
];

let currentPhotoIndex = 0;

function showPhoto(index) {
    const imgElement = document.getElementById('carousel-img');
    imgElement.src = photos[index];
}

// Função para passar automaticamente as fotos
function startAutoCarousel() {
    setInterval(function() {
        currentPhotoIndex = (currentPhotoIndex < photos.length - 1) ? currentPhotoIndex + 1 : 0;
        showPhoto(currentPhotoIndex);
    }, 3000);  // Muda a foto a cada 3 segundos (3000 milissegundos)
}

// Iniciar o contador, carrossel automático e mostrar a primeira foto
window.onload = function() {
    startCounter();
    showPhoto(currentPhotoIndex);
    startAutoCarousel();
};
