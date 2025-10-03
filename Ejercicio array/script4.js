// 4. A partir del siguiente array 🍓🍋🍓🍋🍓convierte todas las fresas en 🍄

const array = ['🍓','🍋','🍓','🍋','🍓'];

array.forEach((fruta, index)=>{ 
    if(fruta ==='🍓'){
        array[index] = '🍄';
    }
});

console.log("Frestas to champi:", array);

