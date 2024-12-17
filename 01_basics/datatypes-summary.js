// Primitive

// 7 types: String, number, Boolean, null, undefined, Symbol, BigInt

const score = 100  // typeof returns number
const scoreValue = 100.3 // typeof returns number

const isLoggedIn = false // typeof returns boolean
const outsideTemp = null // tpyeof returns object
let userEmail;

const id = Symbol('123') // typeof returns symbol
const anotherId = Symbol('123')

// console.log(id === anotherId)

const bigNumber = 345555555555555555n // typeof returns bigint



// Reference (non - promitive)

// Array, Objects, fuctions

const heroes = ["Hulk", "Captain America", "Thor" ]; // typeof returns as object

let myObj ={
    name: "Aryan",
    abge: 22,

} // typeof returns as object

const myFunction = function(){
    console.log("Hello World");
} // typeof returns as object function

console.log(typeof(myFunction))


// +++++++++++++++++++++++++++
//Memory

// Stack ( primitive ),  Heap(Non-Primitive)

//stack example
let myName = "Honey"
let anotherName = myName //here it creates a copy of original

anotherName = "Aryan"

console.log(myName); //gives honey
console.log(anotherName); // gives Aryan as copied version is changed

// heap example
//check for object
let user = {
    email: "xyz.com",
    upi: "abc",

}

let user2 = user

user2.email =  "aryan@google.com"

console.log(user.email);
console.log(user2.email);