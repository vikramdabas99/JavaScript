const user = {
    username: 'vikram',
    price: 299,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// this keyword is talk about only current context, cannot use in function

// user.welcomeMessage()
// user.username = 'monu'
// user.welcomeMessage()

// Arrow function

// const chai = () => {
//     let username = 'monu'
//     console.log(this.username);
// }

// chai()

