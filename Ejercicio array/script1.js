// 1. A partir de la pizza sustituías todos los elemento del array por
// cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩

const arr=["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"]; //Creamos la array
let start=4; 
arr.forEach((n,index)=>{ 
    if(index>=start){
        arr[index]="🍺";
    }
    console.log(arr[index]);
});

//---------------------------------------------------------------


const array = ['🍔','🌯','🍣','🍕','🍜','🍱','🍙','🍘','🥩'];

const indexPizza = array.indexOf('🍕');
    for (let i = indexPizza; i < array.length; i++) {
    array[i] = '🍺';

}

console.log(array);