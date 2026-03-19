const elemSlides = document.querySelector(".slides");
const slides = document.querySelectorAll(".slide");

const totalSlides = slides.length;
let index = 0;

const INTERVALO = 3000;

function atualizarCarrossel() {
    elemSlides.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => {
    index = (index + 1) % totalSlides;
    atualizarCarrossel();
}, INTERVALO);