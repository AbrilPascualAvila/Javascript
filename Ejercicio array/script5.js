// 5. Añade el siguiente icono 🥵 inmediatamente después del cada
// 🌶️ en el siguiente array: 🌶️🥛🌶️🥛🌶️🥛
const array = ['🌶️','🥛','🌶️','🥛','🌶️','🥛'];

for (let i = 0; i < array.length; i++) {
    if (array[i] === '🌶️') {
        // Inserta 🥵 después del 🌶️
        array.splice(i + 1, 0, '🥵');
        i++; // Saltamos el 🥵 recién insertado para no iterarlo
    }
}

console.log("Pica mucho", array);