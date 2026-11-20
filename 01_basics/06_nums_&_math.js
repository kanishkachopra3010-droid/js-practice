const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);  // converts to string and displays string length
// console.log(balance.toFixed(1));   //this function gives decimal to keep limited point values

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  //this includes ki decimal and normal number milakar itni value pe focus karo
//yahan pe round off bhi hoga

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'));  //to make the representation easy, comma acc to US system

//max value and min value batata hai ki itni max ya min value ho sakti hai numer ki in js

// ++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++

//library default in js, object with lots of properties
// console.log(Math);
// console.log(Math.abs(-4));  //modulus
// console.log(Math.round(4.6)); //round off of a number
// console.log(Math.ceil(4.2));  //closest largest integer to the number
// console.log(Math.floor(4.9));  //closest smallest integer to the number
// console.log(Math.min(4, 3, 6, 8)); //min value in the array
// console.log(Math.max(4, 3, 6, 8));  // max vaue in the array

console.log(Math.random());  //random module like python between 0 and 1
console.log((Math.random()*10) + 1);  //sets particular range, to avoid 0.0 wala case
// bracket removes that BODMAS things
console.log(Math.floor(Math.random()*10) + 1); //integer pakedega

const min = 10
const max = 20

//range set karne ka formula
console.log(Math.floor(Math.random()*(max-min+1)) + min)
//max-min+1 10 se maultiply karne ki jagha yeh use kiya +1 to avoid zero case
// sets the range  +min makes sure the value starts from the required min value