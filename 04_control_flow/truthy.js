const userEmail = "a@gmail.com"

if (userEmail) {
    console.log("Got user email")
;    
} else {
    console.log("Don't have a user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values
// "0", "false", " ", [], {}, function(){}