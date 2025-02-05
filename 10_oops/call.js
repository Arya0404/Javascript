function setUsername(username) {
  //complex db calls
  this.username = username; 
  console.log("called")
}

function createUser(username, email, password) {
  // setUsername(username); // actually this mehtod is being not called
  setUsername.call(this, username); // Therefore call keyword is used to explicitly call
  // passing "this" helps the the function to understand that the execution context should be used from here.
  this.email = email;
  this.password = password;
}

const aryan = new createUser("aryan", "arya@fb.com", 123);
console.log(aryan);
