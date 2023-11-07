// Immediately Invoked Function Expressions (IIFE)
// global variables k polution se bachne k liye use krte h 

(function chai(){
    console.log('DB CONNECTED');
})();

((name) => {
    console.log(`DB CONNECTED ${name}`);
})('Vikram')