const accountId=12221
let accountEmail="pranjal@goole.com"
var accountPassword = "12345"
accountCity="pune"
let accountState;
//accountId=11111 //not allow becoz its constant

accountEmail="pv@123"
accountPassword=2222
accountCity="Mumbai"

/*
prefer not to use var
because of issue in block scope and functional scope
 */ 
console.log(accountId);
console.table([accountId,accountEmail,accountCity,accountPassword,accountState])


