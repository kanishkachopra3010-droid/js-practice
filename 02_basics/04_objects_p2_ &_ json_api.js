// const tinderUser = new Object()
const tinderUser = {}

// way to put value in object
tinderUser.id = "123abc"
tinderUser.name = "Kelly"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kelly",
            lastname: "Wits"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }  //obj1 becomes key and whatever inside it is value
// const obj3 = Object.assign({}, obj1, obj2, obj4)  // here it keeps the format same meaning it actually combines 
// agar yahan par ek khali object nahi diya toh saari value obj1 mein chali jayegi 
// it fallows C language (target, source) wala format

// const obj3 = {...obj1, ...obj2}  // same like we did in arrays
// console.log(obj3);

// objects in array
const users = [
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
    {
        id: 1,
        email: "k@gmail.com"
    },
]

// first tell array ka index and then obtain it like object
// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // gives the key
// console.log(Object.values(tinderUser));  //gives the vaue
// console.log(Object.entries(tinderUser));  // key value pair is converted to array i.e nested array [[key:pair],[],[]]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // to check is there any key/property so no problem occurs whie looping
//console.log(Object.prototype.propertyIsEnumerable(tinderUser)); //use prototype for suggestion and accurate result



 // +++++++++++++++++++++++++++++++++++++++ Objects P3 ++++++++++++++++++++++++++++++++++++++
const course = {
    coursename: "js practicing in hindi",
    price: "999",
    courseInstructor: "kelly"
}

// course.courseInstructor

 const {courseInstructor:instructor} = course  // tis is done to make code less messy, value ko colon ke baad shorter name

// console.log(courseInstructor);
// console.log(instructor);


// ++++++++++++++++++++++++++++++++++ API INTRO +++++++++++++++++++++++++++++++++

// treated as json since it has no name rn, if key is string then value is string too
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// array format of api
[
    {},
    {},
    {}
]