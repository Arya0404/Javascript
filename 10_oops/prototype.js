// let myName = "aryan     "

// console.log(myName.trim().length);
// console.log(myName.truelength()) // need this, so make this protoype

let myHeroes = ["thor", "spidy"]

let heroPower = {
    thor: "hammer",
    spidy: "web shooter",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spidy}`)

    }
    
}

Object.prototype.aryan =  function(){
    console.log(`aryan is present in all Objects`)
}

Array.prototype.heyAryan = function(){
    console.log(`Hey Aryan`)
}

// heroPower.aryan()

myHeroes.aryan()
// heroPower.heyAryan() // error
myHeroes.heyAryan()


// INHERITANCE

const user = {
    name: "aryan",
    email: "aryan@example.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TAsupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "Ayneha    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is: ${this.trim().length}`)

}
anotherUserName.trueLength()

"aRYAN".trueLength()
"Karanboi    ".trueLength()
"ayneha100".trueLength()