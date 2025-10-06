    // Aquí puedes controlar la lógica de tu mascota
    const eatBar = document.getElementById("eatBar");
    const playBar = document.getElementById("playBar");
    const fightBar = document.getElementById("fightBar");
    const sleepBar = document.getElementById("sleepBar");
    const happinessBar = document.getElementById("happinessBar");

    // Ejemplo de actualización de barras
    function updateBars() {
        eatBar.style.width = "24%";
        playBar.style.width = "48%";
        fightBar.style.width = "20%";
        sleepBar.style.width = "49%";
        happinessBar.style.width = "30%";
    }

    updateBars();