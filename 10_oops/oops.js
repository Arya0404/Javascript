// Object literal
const user = {
  username: "aryan",
  loginCount: 4,
  signedIn: true,

  getUserDetails: function () {
    //console.log("Got user details from database");
    // console.log(`username: ${this.username}`)
    console.log(this);
  },
};

// console.log(user.getUserDetails());
//console.log(user.username);
//console.log(this)

// constructor
// const promiseOne = new Promise()
const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("Aryan", 13, true);
const userTwo = new User("Ayneha", 15, true);
console.log(userOne.constructor); // its nothing but the reference to the current
// console.log(userTwo);

// new kwyword: when you use this keyword an empty object is created which is called constructor
// step1- empty object is created
// step2- constructor function is called
// step3- this keyword injects all the wrapped up content
// step4- you get the data as u want
