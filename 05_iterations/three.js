// High Order Array loops

// for of

// ["", "", ""]
// [{}, {}, {}]

/*
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}

const greetings = "Hello World!"

for (const greet of greetings) {
    console.log(`each char is ${greet}`)
    
}
    */

//Maps
const map = new Map()
map.set(`IN`, "India")
map.set(`USA`, "United states of America")
map.set(`FR`, "France")

// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
}



//object is not iterable but there are ways to make it possible
