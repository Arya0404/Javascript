
class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const aryan = new User("aryan", "aryan@gmail.com", "123")

console.log(aryan.encryptPassword())
console.log(aryan.changeUsername())