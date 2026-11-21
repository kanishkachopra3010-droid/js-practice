// singleton, yeh apne tareh ka ek hi object hai 
// when we declare as literals it is not singleton
// when we declare it from constructor then it is singleton

// Object.create  // constructor method
// {} is object

// object literals

const mySym = Symbol("key1") // declaring symbol
// symbol is a primitive data type

const mySym1 = Symbol("key2")

// in object we can define keys like in dictionary in python
// array key/index works like lists in python
const JsUser = {
    name: "Priya",
    "full name": "Priya Sharma",  // to make things safe we added "" now there is no way we can access it using dot method
    [mySym]: "mykey1",  // here you make symbol as key, a special format
    // if [] is not used then the data typeof "mykey1" will not be a symbol
    age: 18,
    location: "Jaipur",
    email: "priya@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    mySym1: "mykey2"
}


// console.log(JsUser.email)  // determine it as it is no need to mention it as string, mainly use this
// console.log(JsUser["email"])  // method 2 for accessing, kyunki it stores string toh isko bhi string ki tarah hi likhna padega
// console.log(JsUser["full name"])  // suggestion mein yehi method aayega we can not access through above method  
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym]) // it tells in the last that mysum is a key

// console.log(JsUser.mySym1)
// console.log(typeof JsUser.mySym1) // STORED AS STRING

JsUser.email = "priya@chatgpt.com"
// Object.freeze(JsUser)   // if this is not commented then we can not create the function
JsUser.email = "priya@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // jab same object ko refrence karna hai toh use "this" keyword
}

console.log(JsUser.greeting); // isse fuction ka sirf reference aayega
console.log(JsUser.greeting()); // if bracket not used then value is undefined
console.log(JsUser.greetingTwo());