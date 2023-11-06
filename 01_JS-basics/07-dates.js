// Dates 

let getDate = new Date()

// console.log(getDate);
// console.log(getDate.toDateString());
// console.log(getDate.toISOString());
// console.log(getDate.toJSON());
// console.log(getDate.toLocaleDateString());
// console.log(getDate.toLocaleString());

let createDate = new Date('03-12-23')

let timeStamp = Date.now()
console.log(timeStamp);
console.log(createDate.getTime());

const newDate = new Date()

console.log(newDate.toLocaleString('default', {
    weekday: 'long'
}))

