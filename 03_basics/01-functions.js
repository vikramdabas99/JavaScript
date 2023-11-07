function myName(){
    console.log('V');
    console.log('i');
    console.log('k');
    console.log('r');
    console.log('a');
    console.log('m');
}

// myName()

// function add(num1, num2){
//     console.log(num1 + num2);
// }

function add(num1, num2){
    //  const result = num1 + num2;
    //  return result

    return num1 + num2
}

const result = add(3, 5)
// console.log('Result: ', result);

function loginUserMessage(username){
    if(!username){
        console.log('Please enter the username');
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage('Vikram'));
// console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1){ // rest operator
    return num1
}

// console.log(calculateCartPrice(200, 500, 700))

// functions in objects
const user = {
    username: 'Vikram',
    price: 299
}

function handleObject(otherobject){
    console.log(`The username is ${otherobject.username} and the price is ${otherobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: 'VikramDabas',
//     price: 399
// })

// functions in array

const myNewArray = [200,400,300,700]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,300,600,800]));