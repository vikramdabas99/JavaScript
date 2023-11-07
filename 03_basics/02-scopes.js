// var c = 300;
let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);

// Nested function scopes
function one(){
    const username = 'vikram'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

// function declaration
first(3)
function first(num){
    return num + 1
}

// function expression
const second = function(num){
    return num + 1
}
console.log(second(2))

