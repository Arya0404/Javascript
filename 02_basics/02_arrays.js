const marvel_heroes =["Thor", "Ironman", "Spiderman"]
const dc = [ "Superman", "Flash", "Batman"]

// marvel_heroes.push(dc)

// console.log(marvel_heroes);

const allHeroes= marvel_heroes.concat(dc)

console.log(allHeroes)

// using spread

const all_new_heroes = [...marvel_heroes, ...dc]

console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5 , 6], 7, [8, 9,[5, 7]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("Aryan"))
console.log(Array.from("Aryan"))


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))