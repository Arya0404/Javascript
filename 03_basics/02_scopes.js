if (true) {
    let a = 10
    const b = 20
    var c = 30
}

//console.log(a) //will not print because variables only present in if scope only
//console.log(b) //will not print because variables only present in if scope only
console.log(c) // will print 


//scope level

function one(){
    const username = "aryan"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website) // error website not defined scope only till function two
    two()
}

// one()


if (true) {
    const username = "aryan"
    if (username === "aryan") {
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);// scope over
}

//console.log(username) // scope over

// ++++++++++++++++INteresting++++++++++++++++++++

// addone(5) //possible
function addone(num){
    return num+1
}

addone(5)


//addTwo // not possible because of hoisting
const addTwo = function(num){
    return num + 2
}

addTwo(5)