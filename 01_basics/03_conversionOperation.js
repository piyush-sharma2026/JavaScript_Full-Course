let score = 33;
console.log(typeof score); // number

let age = "33";
console.log(typeof age); // string

let valueInNumber = Number(age);
console.log(typeof valueInNumber); // converted in number
console.log(valueInNumber); // 33


let marks = "33abc";
console.log(typeof marks); // String
let valueOfMarks = Number(marks); // converting in number
console.log(typeof marks); // number
console.log(valueOfMarks); //NaN
console.log(marks); // 33abc



let count = null;
console.log(typeof count); // object
let countValueInNumber = Number(count); // converting to number
console.log(typeof countValueInNumber); // number
console.log(countValueInNumber); // 0


let count2 = undefined;
console.log(typeof undefined); // undefined
let count2ValueInNumber = Number(count2); // converting to number
console.log(typeof count2ValueInNumber); // number
console.log(count2ValueInNumber); // NaN


let count3 = true;
console.log(typeof count3); // boolean
let count3ValueInNumber = Number(count3); // converting to number
console.log(typeof count3ValueInNumber); // number
console.log(count3ValueInNumber);// 1
// 0 if false

/*

Notes :- "33" =>33 easily converted in number
"33abc" => NaN
true => 1
false => 0

*/

let isLoggedIn = 1;
console.log(typeof isLoggedIn); // number
let booleanIsLoggedIn = Boolean(1); // converting to boolean
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn);// true

// Note : "Hites" => true


 let someNumber = 33;
 console.log(typeof someNumber); // number
let stringNumber = String(someNumber); // converting to string
console.log(typeof stringNumber); // string
console.log(stringNumber); //33





