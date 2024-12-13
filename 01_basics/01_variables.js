const accountId = 1
let accountEmail = "aryan@gmail.com"
var accountPassword = "12345"
accountCity = "Indore"

// accountId = 2  //not allowed

accountEmail = "honey@gmail.com"
accountPassword = "12121"
accountCity = "Bhopal"

console.table([accountId, accountEmail, accountPassword, accountCity]);

/* 
Please do not use var
because there is an issue with block scope and functional scope
*/