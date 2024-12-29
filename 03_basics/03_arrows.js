const user = {
    username: "aryan",
    price: 99,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`); //this refers to current context
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomemessage()

// function yo(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// yo()

// const yo = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// yo()

const yo = () =>{
    let username = "hitesh"
    console.log(this.username);
}
// yo()

//arrow funciton

// 

// implicit redunt
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => ( num1 + num2 )

console.log(addTwo(3,4))
