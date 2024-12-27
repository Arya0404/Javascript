//singleton : made from constructor

const mySym = Symbol("Key1")

//object literals
const JsUser = {
    name: "Aryan",
    [mySym]: "key1",
    "full name": "Aryan meshram",
    age: "22",
    location: "Indore",
    email: "meshramaryan0404@gmail.com",
    isLoggedIn: false,

}

console.log(JsUser.email);
console.log(JsUser["email"]);

// console.log(JsUser.fullname) //not possible
console.log(JsUser["full name"]);

console.log(typeof JsUser[mySym]);

JsUser.email = "yo@gmail.com"
//Object.freeze(JsUser)

JsUser.email = "nochange@gmail.com"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());