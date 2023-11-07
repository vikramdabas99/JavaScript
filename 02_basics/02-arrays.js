const marvels_heros = ['Thor', 'Ironman', 'Spiderman']
const dc_heros = ['Superman', 'Flash', 'Batman']

// join 2 array into a new array and return it
const all_heros = marvels_heros.concat(dc_heros)
// console.log(all_heros);

const all_new_heros = [...marvels_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6], 7, [6,7,[8,9]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray('Vikram'));
// console.log(Array.from('Vikram')); // convert into an array
// console.log(Array.isArray({name: 'Vikram'}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));