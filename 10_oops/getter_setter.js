class User {
    constructor(email, password){
        this.email = email;
        this.password = password;

    }

    get email (){
        return this._email.toUpperCase()
    }

    set email (value){
        this._email =  value
    }    
    
    get password(){
        return `${this._password}aryan`
    }

    set password(value){
        this._password = value
    }
}

const aryan = new User("a@aryan.ai", "abc")
console.log(aryan.password)
console.log(aryan.email)