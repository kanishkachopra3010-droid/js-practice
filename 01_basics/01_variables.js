const accountID = 135267
let accountEmail = "Gajendra@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore" 
let accountState;

//your choice to put semicolon in js

/*if var is not mentioned then automatically the id of of data gets a 'var' type, i.e. it becomes a variable 
This method should not be used as it causes problem same by the 'var' keyword*/

//accountID={any value}, not allowed

accountEmail="kc@kc.com"
accountPassword="28282828"
accountCity="Jaipur"

//'var' causes bloc and functional scope problem. So, use 'let'

console.log(accountID)
console.table([accountEmail, accountPassword, accountID, accountCity, accountState])