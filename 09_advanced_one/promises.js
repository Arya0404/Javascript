const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("promise consumed");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "Ayneha", email: "ayneha@example.com" });
  }, 1000);
});
promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "Aryan", password: "123" });
    } else {
      reject("ERROR: Something went wrong.");
    }
  }, 1000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(() => console.log("the promise is either resolved or rejected"));

const promiseFive = new Promise( function(resolve, reject) {
    setTimeout(() => {
        let error = true
        if(!error){
            resolve({username: "Javascript", password: "123"})
        } else {
            reject("ERROR: JS went wrong")
        }
    }, 1000)
})

// promiseFive.then(() => {

// })
// async () => {
//     const response = await promiseFive
//     console.log(response)
// }
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log("E:", error)
//     }
// }

// // i tried myself but was wrong way
// new Promise(function (resolve, reject){
//     setTimeout(() => {
//         let error = false
//         if (!error) {
//             resolve(fetch("https://jsonplaceholder.typicode.com/users"))        
//         } else {
//             reject("error")
//         }
//     }, 1000);
//     console.log(resolve)
// }).catch(function(error){
//     console.log(error)
// }).finally(() => {console.log("the message is either resolved or rejected")})

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) =>{
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))