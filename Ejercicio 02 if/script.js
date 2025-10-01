function sumarTres(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log("La suma es: " + sumarTres(5, 10, 15));


function nombreCompleto(nombre, apellido1, apellido2) {
    return nombre + " " + apellido1 + " " + apellido2;
}
console.log("Tu nombre completo es: " + nombreCompleto("Abril", "Pascual", "Avila"));


function numeroMayor(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log("El número mayor es: " + numeroMayor(8, 12));