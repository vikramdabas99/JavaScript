// string interpulation

const name = 'vikram'
const age = 28

// console.log(`Hey my name is ${name} and i'm ${age} years old. `);

const userName = 'vikramdabas'
const str = 'Hello my name is monu.'
const greet = userName.concat(' ',str)

const spaces = '      hey monu!    ' // remove the spaces from starting and ending bt not in middle of text

console.log(userName);
console.log(userName.length);
console.log(userName.charAt(3));
console.log(userName.indexOf('d'));
console.log(userName.substring(2, 5)); // starting index is include bt not last 
console.log(str.split(' '));
console.log(greet);
console.log(spaces.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());
console.log(userName.replace('vikram', 'monu'));
console.log(str.includes('my'));
console.log(userName.slice(2, 5));