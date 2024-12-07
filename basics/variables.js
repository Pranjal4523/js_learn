// const accountId=12221
// let accountEmail="pranjal@goole.com"
// var accountPassword = "12345"
// accountCity="pune"
// let accountState;
// //accountId=11111 //not allow becoz its constant

// accountEmail="pv@123"
// accountPassword=2222
// accountCity="Mumbai"

/*
prefer not to use var
because of issue in block scope and functional scope
 */ 
// console.log(accountId);
// console.table([accountId,accountEmail,accountCity,accountPassword,accountState])



/************************** Oprations **********************************************/

let val= 3
let negval=-val
console.log(negval)

let str="pranjal"
let str2= " pranju"
let str3 = str+str2
console.log(str3);

/* straring number in string then remmaning treat as string
 when string is strart from two number then add two number then string is attach
 to sum of number */
console.log("1"+2);        //12
console.log(1+"2");       //12
console.log("1"+2+2);    //122
console.log(1+2+"2");   //32

console.log(true);      // true
console.log(+true);     //1
console.log(+"");      //0

let num1,num2,num3
num1=num2=num3=2+2      //4

let gameCounter = 100
gameCounter++;   //++gameCounter
console.log(gameCounter);   //101

