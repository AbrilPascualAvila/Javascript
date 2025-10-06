const imagenUno = document.querySelector(".uno");
const imagenDos = document.querySelector(".dos");

// Hover sobre la primera carta
imagenUno.addEventListener("mouseover", () => {
    imagenUno.src = "./img/card-front.png";
});

imagenUno.addEventListener("mouseout", () => {
    imagenUno.src = "./img/card-back.png";
});

// Hover sobre la segunda carta
imagenDos.addEventListener("mouseover", () => {
    imagenDos.src = "./img/card-front.png";
});

imagenDos.addEventListener("mouseout", () => {
    imagenDos.src = "./img/card-back.png";
});