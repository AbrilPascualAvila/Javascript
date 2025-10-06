// Seleccionamos las imágenes
const bombilla = document.querySelector(".bombilla");
const boton = document.querySelector(".boton");

// Variable para controlar el estado (apagado = false, encendido = true)
let encendido = false;

// Al hacer click en el botón
boton.addEventListener("click", () => {
    if (!encendido) {
        // Encender
        bombilla.src = "./img/on.jpg";
        boton.src = "./img/bon.jpg";
        encendido = true;
    } else {
        // Apagar
        bombilla.src = "./img/off.jpg";
        boton.src = "./img/boff.jpg";
        encendido = false;
    }
});