
function mostrarDetalhes(id) {
    document.getElementById("popup").style.display = "block";
}

function fecharPopup() {
    document.getElementById("popup").style.display = "none";
}

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel img");

function showSlides() {
    slides.forEach((img, index) => {
        img.classList.remove("active");
    });
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}

setInterval(showSlides, 4000);
slides[0].classList.add("active");
