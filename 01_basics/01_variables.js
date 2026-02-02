//Const: Val can't be changed
const accountId=144553

let accoutEmail="anvesha@gmail.com"
//var is function scoped
var accountPassword="12354";
accountCity="Jaipur"
//returns the val is undefined
let accountState;

//accountId=2

accountEmail="hc@hc.com"
accountPassword="2123"
accountCity="Fatehpur"


console.log(accountId);

/*
Prefer not to use var
bcoz of issue in block scope & functional scope 
*/

console.table([accountId,accountPassword,accoutEmail,accountCity,accountState])