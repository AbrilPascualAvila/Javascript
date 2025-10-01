// 5. Añade el siguiente icono 🥵 inmediatamente después del cada
// 🌶️ en el siguiente array: 🌶️🥛🌶️🥛🌶️🥛

const array = ['🌶️',🥛,'🌶️',🥛,'🌶️','🥛'];

array.forEach((gindilla, index)=>{ 
    if(gindilla  ==='🌶️'){
        array[index] = '🍄';
    }
});

console.log("Pica mucho", array);

