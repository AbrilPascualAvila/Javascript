function lanzarMoneda() {
    let numero = Math.round(Math.random()); 
    if (numero === 1) {
        return "cara";
    } else {
        return "cruz";
    }
}

console.log(lanzarMoneda());
