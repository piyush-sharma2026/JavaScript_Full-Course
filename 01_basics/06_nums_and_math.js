// Nums and math in js

const score = 400;
console.log(score); // 400

const balance = new Number(100);
console.log(balance); // [Number: 100]

console.log(typeof balance); // object
console.log(typeof score); // number

console.log(balance.toString().length); // 3
console.log(score.toString().length); // 3

console.log(balance.toFixed(2)); // 100.00 --> it shows 2 decimal points

const otherNumber = 123.123456;
console.log(otherNumber.toFixed(3)); // 123.123
console.log(otherNumber.toPrecision(4)); // 123.1 --> it shows total 4 digits


const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // 1,000,000 --> it adds commas according to the  US region
console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 --> it adds commas according to the INDIAN region


// ********************Maths**********************

console.log(Maths);

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045

const area = 7.7;
console.log(Math.round(area));
// 8 --> it rounds off the value
console.log(Math.floor(area));
// 7 --> it removes decimal part
console.log(Math.ceil(area));
// 8 --> it increases the value to next integer
console.log(Math.trunc(area));
// 7 --> it removes decimal part

// Random number between 0 to 1
const random = Math.random();
console.log(random); // 0.123456789
console.log(Math.random()*10); // it gives random number between 0 to 10
console.log(Math.random()*10+1) // it gives random number between 1 to 10

console.log(Math.round(random * 100)); // it gives random number between 0 to 100



// Min and Max
console.log(Math.min(3,5,1,6,8,4,-3)); // -3
console.log(Math.max(3,5,1,6,8,4,-3)); // 8


const min = 10;
const max = 20;

// Random number between min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // it gives random number between min and max (both inclusive)

// Power and Square root
console.log(Math.pow(2,4)); // 16 --> 2^4
console.log(2**4); // 16 --> 2^4

console.log(Math.sqrt(64)); // 8
console.log(64**(1/2)); // 8

console.log(Math.abs(-4)); // 4 --> absolute value changes -ve to +ve
console.log(Math.abs(4)); // 4




