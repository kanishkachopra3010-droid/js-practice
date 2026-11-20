/*
console.log(2>1); 
console.log(2>=1);
console.log(2<1)
console.log(2==1)
*/

//console.log("2">1)   //yahan par it changes the data type for comparision but it doesn't give the expected output always
//console.log("02"==0) // same case above

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0) //null ki badmoshi: here value conversion aa jata hai so no predicatable result
console.log(null <= 0) // same as above
// reason for above issue is that js changed the method of woring in "==" and comparision operator
// comparision convert null to a number, treating null as 0
// equalilty check does not do this

console.log(undefined ==0) // this gives false in all cases

console.log("2" === 2) // the third euality is for checking of data type