// for

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     console.log('5 is best');
//   }

//   console.log(i);
// }

// nested loops
// for (let i = 1; i <= 5; i++) {
//   console.log(`Table of ${i}`);
//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// loops in array
// const heros = ['superman', 'spiderman', 'ironman'];

// for (let index = 0; index < heros.length; index++) {
//   const element = heros[index];
//   console.log(element);
// }

// break and continue

// for (let index = 1; index < 10; index++) {
//   if (index === 5) {
//     console.log('Detected 5');
//     break;
//   }
//   console.log(`Value of index is ${index}`);
// }

for (let index = 1; index < 10; index++) {
    if (index === 5) {
      console.log('Detected 5');
      continue;
    }
    console.log(`Value of index is ${index}`);
  }
  