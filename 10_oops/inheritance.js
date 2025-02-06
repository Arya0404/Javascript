class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`USERNAME is  ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);

  }
}

const aryan = new Teacher("aryan", "aryan@teacher.com", "123")

aryan.addCourse()

const ayneha = new User("ayneha")

// ayneha.addCourse() // not possible
ayneha.logMe()

console.log(aryan instanceof Teacher)
console.log(aryan instanceof User)