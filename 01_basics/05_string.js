const name = "Aryan" // gives object
const repoCount = 5

// console.log(name + repoCount + "value"); // old way

//string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//string declaration second
const gameName = new String('Aryannnnn--am-ma') // on console provides as undefined datatype

// console.log(gameName[0]); // gives the letter at 0th position

// console.log(gameName.__proto__); // provides details of all the protoypes can be usecd with the strings

// console.log(gameName.length); // provides length of the string

console.log(gameName.charAt(2)); // provides character at the given index

console.log(gameName.indexOf('n')); // provides incex of the given char in the string

console.log(gameName.toUpperCase()); // makes a copy and provides the whole string as capital

const newString = gameName.substring(0, 4); // provides substring but no negaitves allowed
console.log(newString);

const anotherString = gameName.slice(-8, 4); // provides slicing and neagative indexing is allowed
console.log(anotherString)

const newStringOne = "   Aryan   "
console.log(newStringOne);
console.log(newStringOne.trim()); // for removing spaces

const url = " https://aryan.com/aryan%20meshram"

console.log(url.replace('%20', '-'));

console.log(url.includes('aryan'));

console.log(gameName.split("-"));