// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["batman", "blackpanther"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

//array copying is shallow copy so do changes in real array
// Array methods

//like python list thingy 
// myArr.push(6)
// myArr.push(7)
// myArr.pop() //last element nikal dega, no parameter

// myArr.unshift(9) //sabse pehle daldega, sari array ki value shift hojati hai toh comp pe load aa jata hai
// myArr.shift()  //pehla element bhaag gaya, no parameter hai

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //sare arrays string mein, data type is string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // outer limit is exclusive

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);  //original array mein jo slice wla part hai na wo cut hokar naye variable mein chala gaya
// isiiye myn2 toh woh siced part hogaya par original array mein se woh part hat gaya
// both the limits are inclusive
console.log(myn2);