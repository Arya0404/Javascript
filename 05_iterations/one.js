// for loop
for (let i = 1; i < 11; i++) {
    const element = i;
    if (element == 5){
        console.log("5 is best number");
    }
    // console.log(element);
    
}

/*
for (let i = 0; i < 10; i++) {
    console.log(`Outer loop value: ${i}`)
    for (let j = 0; j < 10; j++) {
        console.log(`inner loop value ${j} and inner loop ${i}`);
        
    }
    
}

*/

let myArray = ["spidy", "hulk", "hawk"]

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}

// break and continue
/*
for (let i = 0; i < 20; i++) {
    if(i == 7){
        console.log("DEtected 7");
        break
    }
    console.log(`value of i is ${i}`)
    
}
*/
for (let i = 0; i < 20; i++) {
    if(i == 7){
        console.log("DEtected 7");
        continue
    }
    console.log(`value of i is ${i}`)
    
}