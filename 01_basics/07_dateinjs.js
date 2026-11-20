// Dates
//starts from Jan 1, 1970 (UTC)
//is calculated in milli seconds

let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());  // date in words
//console.log(myDate.toISOString()); //here if date is before setted time it shows error
//console.log(myDate.toJSON());  // here it just shows null
//console.log(myDate.toLocaleDateString()); // fetches user's current local time
//console.log(myDate.toLocaleString());  // standard timezone of (UTC)
//console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // last to gives hours and min
// let myCreatedDate = new Date("2023-01-14") // here it is 00 is invalid (YYYY-MM-DD)
// let myCreatedDate = new Date("01-14-2023")  //(DD-MM-YYYY)
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());  //month starts from 0 in js

let myTimeStamp = Date.now() //EXACT TIMPESTAMPS time in milliseconds

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //time from given date
// console.log(Math.floor(Date.now()/1000));  // to get in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); // fir wohi zero wali bakwass js aur uske tarike
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    }))
// first parameter is internationalisation, weekday full karega mon-->monday