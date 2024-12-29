console.log("A");
console.log("R");
console.log("Y");
console.log("A");
console.log("N");


function sayMyName(){
    console.log("A");
    console.log("R");
    console.log("Y");
    console.log("A");
    console.log("N");

}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2){
    // let  result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 4)

console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
            console.log("please enter a username")
            return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("aryan"))

function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "aryan",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user)
handleObject({
    username:"same",
    price:399
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 600, 800]));
console.log()