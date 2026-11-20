const name = "kanishka"
const repoCount = 50

// console.log(name + repoCount + " Value");
//concatination

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//back text create "string interpolation" i.e creates placeholders for variables can apply methods as well

const gameName = new String('kanishka-kc-com') // a way to declare string

// console.log(gameName[0]); //indexing
// console.log(gameName.__proto__); // this is two underscore, access prototype gives empty object
//gives types to acces methods like length and functions and all


// console.log(gameName.length);          //direct use for one method, does not change original string
// related to string and heap doubt
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));  //what value at index "i"
console.log(gameName.indexOf('t')); //index of that particular character

const newString = gameName.substring(0, 4) //slicing, last value excluded, not using
console.log(newString);

const anotherString = gameName.slice(-13, 7) //here negative values can also be used in it
console.log(anotherString);

const newStringOne = "   kanishka    "
console.log(newStringOne);
console.log(newStringOne.trim()); //cuts the extra spaces
//works on white(blank) spaces and line terminators(\n)
// trimstart and trimend works as the fuction name suggests

const url = "https://google//kanishka%20hello.com"
// url coding mein browser converts blank space to %20


console.log(url.replace('%20', '-')) // replaces text whereever mentioned

console.log(url.includes('pinky'))  // searches this element in the variable

console.log(gameName.split('-')); // splits into array using the mentiones keyword