
function contador(){
    document.write("🆚 Player", [] ," Computer", [], "🆚<br>");
}


function elecion(){

    document.write("🃏 Player ✂️<br>");
    document.write("🃏 Player 🗞️<br>");
    document.write("🃏 Player 🪨<br>");

    document.write("🃏 Computer ✂️<br>");
    document.write("🃏 Computer 🗞️<br>");
    document.write("🃏 Computer 🪨<br>");
}


function ganadores(){
        // Empates
    document.write("✂️ VS ✂️ Empatan<br>");
    document.write("🗞️ VS 🗞️ Empatan<br>");
    document.write("🪨 VS 🪨 Empatan<br>");

    // Ganador ✂️
    document.write("✂️ VS 🗞️ Gana ✂️<br>");
    document.write("🗞️ VS ✂️ Gana ✂️<br>");

    // Ganador 🗞️
    document.write("🗞️ VS 🪨 Gana 🗞️<br>");
    document.write("🪨 VS 🗞️ Gana 🗞️<br>");

    // Ganador 🪨
    document.write("🪨 VS ✂️ Gana 🪨<br>");
    document.write("✂️ VS 🪨 Gana 🪨<br>");
}


function resultadofin(){
    document.write("💻Fin del juego gana Computer 💻<br>");

    document.write("🚶🏻‍♀️Fin del juego gana Player 🚶🏻‍♀️<br>");
}


contador();
eleccion();
ganadores();
resultadofin();