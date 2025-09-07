// Summary of Datatypes....!

/*

There are basically two types of data types:-

1. Primitive
2. Non Primitive(reference types)

*/

/*
Primitive Datatypes 
*******************
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol (to make a value unique)
7. BigInt
*/

/*
Non Primitive (Reference types)
*******************************
1. Array
2. Objects
3. Functions
*/

// Note : JAVASCRIPT IS A DYNAMICALLY CHANGED LANGAUGE

//Examples of Primitive...!

const score = 100; //number
const scoreValue = 100.56; // number (not float)
const isLoggedIn = false; // boolean
const outSideTemperature = null; // null
let userEmail; // undefined
let name = "Piyush"; // string


const id = Symbol('123');
const anotherId = Symbol('123');
// Bothe id and anotherId has same value but in Symbol makes both value unique
console.log(id===anotherId); // false

const bigNumber = 52958720362645646n;


//****************************************//

//Examples of Non Primitive...!

// Arrays...!
const heroes = ["Batman","Superman","Captain America","Hulk", "Thor"];

// Object...!
let myObj = {
    name: "Piyush",
    age: 22,
    id : 200,
}

// Functions...!
const myFunction = function(){
    console.log("Hello World..!")
}


console.log(typeof bigNumber); // bigInt
console.log(typeof heroes); // object
console.log(typeof myObj);  // object





//********************************************************************//
/*
Stack and Heap
*/

// Stack-->(Primitive) 
// Heap--->(Non-Primitive)

let myName = "Piyush";
let anotherName = myName;

anotherName = "Sharma";

console.log(myName); // Piyush
console.log(anotherName); // Sharma


let userOne = {
    email:"user@google.com",
    upi: "user@ybl",
}

let userTwo = userOne;

userTwo.email = "user@hitesh.com";

console.log(userOne.email); // user@hitesh.com
console.log(userTwo.email); // user@hitesh.com

