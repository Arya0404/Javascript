const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aryan",
            lastname: "meshram"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname)


// combination of objects

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 =  Object.assign({}, obj1, obj2)
// console.log(obj3)

const obj3 =  {...obj1, ...obj2}
console.log(obj3)

// objects in arrays
const users = [
    {
        id: 1,
        email: "am@gmail.con"
    },
    {
        id: 1,
        email: "am@gmail.con"
    },
    {
        id: 1,
        email: "am@gmail.con"
    }
]

users[1].email
console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// Object de-structure

const course = {
    coursename: "js in hindi",
    price: "99",
    courseInstructor: "Aryan"
}

//course.courseInstructor

const {courseInstructor} =course

console.log(courseInstructor)

// JSON API
//  {
//     "name": "Aryan",
//     "coursename": "js in hindi",
//     "price": "free"
//  }