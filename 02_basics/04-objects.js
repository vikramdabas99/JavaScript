const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = 'John'
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Nesting in object
const anotherUser = {
    email: 'some@gmail.com',
    fullname: {
        userfullname: {
            firstname: 'vikram',
            lastname: 'dabas'
        }
    }
}

// console.log(anotherUser.fullname.userfullname.firstname);

// combing objects
const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: 'v@gmail.com'
    },
    {
        id: 2,
        email: 'm@gmail.com'
    },
]
// console.log(users[0].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggesIn'));