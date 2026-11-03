"use strict"; //treat all JS code as newer version like <!DOCTYPE html>
/*Point to be noted: By default this is already in strict mode.
But this tags gives the surety that by mistake you don't use any part of old version*/

/*alert(3+3)
 this problem does not happen in htm or developer console on web but here cause issues
we are using node js not the browser that will do the work of engine*/

console.log(6+6)  //code redability should be high
console.log("kc")

//data types {PRIMITIVE}
let name="Kanishka"
console.log(typeof name);
//*string => ""\''

let age=18   
console.log(typeof age);
            
/* number => 2^53
big int for larger numbers*/

let isLoggedIn= true 
console.log(typeof isLoggedIn);
//boolean =>true\false

let state=null
console.log(typeof state);
//null =>standalone value and datatype too. Representation of empty value. It's type is 'object' {flaw of js or language error}

/*undefined => when no value assigned, variable is there but no value, matlab kuch toh hai par bataya nahi. It is a type itself
 It's type is 'undefined' {again a flaw of js}*/

//symbol => to identify the uniqueness of a component. taled mainly in react js

//object=> data type for 'null'

console.log(typeof null);

