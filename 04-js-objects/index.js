//#1 question//
let add =(num1, num2) => num1 + num2;
// correct #1 answer [const add = (num1 , num2) => num1 + num2]//
//#2 question//
let sub =(num1 , num2) => num1 - num2;
//correct answer to #2// [function sub(num1 , num2){ return Math.abs(num1 -num2);} ] (Math.abs used for absolute positive value)//

//#3 answer//
const compute = (callback) => callback(6 , 3)

//#3a answer//
console.log(compute(sub))
// #4 answer//
compute(function sub(num1 , num2){ 
    return Math.abs(num1 - num2);
})
//#5 answer//
setInterval(function(){console.log("Hi")}, 3000)