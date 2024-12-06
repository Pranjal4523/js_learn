let score ="33"

console.log(typeof score);  // string

 let valueInNum = Number(score)
 console.log(typeof valueInNum);  // number


 let run= "22ab"
 let val = Number(run)
 console.log(val);  //NAN
 
let run2=null;
let val2 = Number(run2)
 console.log(val2);     //0


 let run3=undefined;
let val3 = Number(run3)
 console.log(val3);  // NaN

 let run5=true;
let val4 = Number(run5)
 console.log(val4);       //1

 let str ="Pranjal"
 let s=Number(str)
 console.log(s);      //NaN  (string are not convert in Integer)
                    // but number to string is possible
 

/*
"33" ==> 33
33ab ==> NaN
ture ==> 1; false ==>0
*/


let isLoggedIn =1
let booleanIsLogin =Boolean(isLoggedIn)
console.log(booleanIsLogin);            //true

let isLoggedIn2 =""
let booleanIsLogin2 =Boolean(isLoggedIn2)
console.log(booleanIsLogin2)            // false


/*
1 ==>true ; 0==> false
"" ==> false (if empty string)
"pranjal" ==>true 
*/