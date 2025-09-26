// Apartado 1 ---------------------------------------------------
const arrowFunctionName = (nombre, apellido1, apellido2) => {
    
    console.log(nombre + " " + apellido1 + " " + apellido2);
};

arrowFunctionName ("Abril", "Pascual", "Avila");

// Apartado 2 ---------------------------------------------------
let esMayorDeEdad = true;
const FunctionName = (name) => {

    console.log(name + " es mayor de edad? " + esMayorDeEdad);
    console.log(typeof name, typeof esMayorDeEdad);
};

FunctionName ("Abril");

// Apartado 3 ---------------------------------------------------
function miFuncion(...numeros) {
    numeros.forEach(numero => console.log(numero));
}

miFuncion (1, 2, 3, 4, 5)