const userEmail = 'v@gmail.com'

if(userEmail){
    console.log('Got the email');
} else{
    console.log("Don't have user email");
}

// falsy value:- false, 0, -0, BigInt On, "", null, undefined, NaN
// truthy value:- "0", "false", " ", [], {}, function(){}

// checking empty array
const email = []

if(email.length === 0){
    console.log('Array is empty');
}

// checking empty object
const userObj = {}
if(Object.keys(userObj).length === 0) console.log('Object is empty');