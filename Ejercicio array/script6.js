// 6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
// ejemplo:🎴🃏🎴 En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴

const array = ['🎴','🎴','🎴','🃏','🎴','🎴','🎴'];
const result = [];

for (let i = 0; i < array.length; i++) {
    result.push(array[i]);
    // Si la carta actual y la siguiente son 🎴, añadimos 🃏 entre ellas
    if (array[i] === '🎴' && array[i + 1] === '🎴') {
        result.push('🃏');
    }
}

console.log(result);
