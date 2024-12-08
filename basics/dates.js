// let myDate=new Date()
// console.log(myDate);   //2024-12-08T07:03:31.183Z
// console.log(myDate.toString());  //Sun Dec 08 2024 07:05:35 GMT+0000
// console.log(myDate.toISOString())  //2024-12-08T07:22:08.768Z
// console.log(myDate.toLocaleDateString())  //12/8/2024
// console.log(myDate.toJSON())  //2024-12-08T07:11:36.019Z
// console.log(myDate.toLocaleTimeString()) //7:22:08 AM

//console.log(typeof myDate)   // object

/*
   in Js month are start with 0
*/ 
// let createDate= new Date(2024, 0, 22)
// console.log(createDate.toDateString());  //Mon Jan 22 2024
// console.log(createDate.toLocaleString())  //1/22/2024, 12:00:00 AM

// let createDate= new Date(2024, 0, 22, 5, 3)
// console.log(createDate.toLocaleString());   //1/22/2024, 5:03:00 AM

// let createDate= new Date("2024-01-22")  // yy-mm-dd(formate)
// console.log(createDate.toLocaleString());

// let createDate= new Date("01-14-2024")
// console.log(createDate.toLocaleString());           // 1/14/2024, 12:00:00 AM

/*
 find timestamp
 */
let myTimeStamp =  Date.now();

//console.log(myTimeStamp);   // 1733643864735(IN millsencond)
//console.log(myTimeStamp.getTime());
//console.log(Math.floor(Date.now/1000)); 

let newDate = new Date();
console.log(newDate);  //2024-12-08T07:51:57.825Z
console.log(newDate.getDay()); 
console.log(newDate.getMonth()); //11  (start month 0)