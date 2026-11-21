const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array ke andar array, senses like python, works on existing array

// console.log(marvel_heros);  
// console.log(marvel_heros[3][1]);  //python logic apply

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);   // sundarta ke saath join
// const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator glass girke spread :), three dots means indvidual elements
// more used

// console.log(all_new_heros);  

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //simply sab ek array ban jayega, depth deni hoti hai better infinity dedo
console.log(real_another_array);



console.log(Array.isArray("gongluman"))  // asking is it is array
console.log(Array.from("gongluman"))  // ise array bana dega
console.log(Array.from({name: "gongluman"})) // interesting result empty array dega
// batana padega key ka array ya value se

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    //elements ka array ban jaega