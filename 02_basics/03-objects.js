// singleton :- constructor se banta h 
// Object.create()

// object literals

const mySym = Symbol('key1')

const JsUser = {
    name: 'Vikram',
    "full name": 'Vikram Dabas',
    [mySym]: 'myKey1',
    age: 28,
    location: 'Delhi',
    email: 'vikram@google.com',
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
}

// console.log(JsUser.name); // access key value
// console.log(JsUser['full name']);
// console.log(JsUser[mySym]);

JsUser.email = 'vik@gg.com'
// console.log(JsUser);

JsUser.greetings = function(){
    console.log('Hello JS user');
}

JsUser.greetingsTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());