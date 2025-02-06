class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`username: ${this.username}`);
  }

  static createId() {
    return Math.floor(Math.random() * 1000);
  }
}

const aryan = new User("aryan");
// console.log(aryan.createId());

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher("samsung", "sam@sung.com")

console.log(samsung.logMe())