// Arrays

const myArr = [0, 1, 2, 3, 4 , 5]

const myArr2 = new Array(1, 2, 3, 4, 5)


//Array Methods

myArr.push(6)
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.slice(1, 3)
console.log(myn2);

const myn3 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn3);