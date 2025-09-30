// if

if (true) {
  console.log("This is true");
}

if (false) {
  console.log("This is false");
}

// if ... else

if (false) {
  console.log("This is true");
} else {
  console.log("This is false");
}

// if ... else if ... else

let num = 5;

if (num > 10) {
  console.log("Greater than 10");
} else if (num < 10) {
  console.log("Less than 10");
} else {
  console.log("Equal to 10");
}

// switch

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);

// ternary operator

let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(`Can vote: ${canVote}`);



// equality operators

// == (loose equality) vs === (strict equality)
if (2 == "2") {
  console.log("Loose equality: true");
}

if (2 === "2") {
  console.log("Strict equality: true");
}
else {
  console.log("Strict equality: false");
}



const temp = 41;
if (temp < 50) {
  console.log("It's very cold outside"); // Error in condition
}

console.log("End of the program"); // This will run anyway




// Logical operators

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
console.log(!b); // true
console.log(a && !b); // true
console.log(!a && b); // false
console.log(a || !b); // true
console.log(!a || b); // false
console.log((a && b) || (!a && !b)); // false
console.log((a || b) && (!a || !b)); // false
console.log((a || !b) && (!a || b)); // true
console.log((a && !b) || (!a && b)); // true
console.log((a && b) || (a && !b)); // true
console.log((!a && b) || (!a && !b)); // true
console.log((a || b) && (a || !b)); // true
console.log((!a || b) && (!a || !b)); // false
console.log((a || b) || (!a || !b)); // true
console.log((a && b) && (!a && !b)); // false
console.log((a || !b) || (!a || b)); // true
console.log((a && !b) && (!a && b)); // false
console.log((a || b) && (a || b)); // true
console.log((!a || !b) && (!a || !b)); // false
console.log((a && b) || (a && b)); // true
console.log((!a && !b) || (!a && !b)); // false
console.log((a || !b) || (a || !b)); // true
console.log((!a || b) || (!a || b)); // false
console.log((a && !b) || (a && !b)); // true
console.log((!a && b) || (!a && b)); // false


// Nested if

let marks = 85;

if (marks >= 0 && marks <= 100) {
  if (marks >= 90) {
    console.log("Grade A");
  } else if (marks >= 80) {
    console.log("Grade B");
  } else if (marks >= 70) {
    console.log("Grade C");
  } else if (marks >= 60) {
    console.log("Grade D");
  } else {
    console.log("Grade F");
  }
} else {
  console.log("Invalid marks");
}

// Ternary operator

let number = 10;
let result = (number % 2 === 0) ? "Even" : "Odd";
console.log(`${number} is ${result}`); // 10 is Even

// Nested ternary operator

let score = 75;
let grade = (score >= 90) ? "A" :
  (score >= 80) ? "B" :
    (score >= 70) ? "C" :
      (score >= 60) ? "D" : "F";
console.log(`Grade: ${grade}`); // Grade: C

// Combining logical operators

let isRaining = true;
let isWeekend = false;

if (isRaining && isWeekend) {
  console.log("Stay indoors and relax");
} else if (isRaining && !isWeekend) {
  console.log("Take an umbrella to work");
} else if (!isRaining && isWeekend) {
  console.log("Go for a hike");
} else {
  console.log("Enjoy your day");
}  // Output : // Take an umbrella to work





// IIFE:- Immediately Invoked Function Expression
// A function that runs as soon as it is defined.

// Not an IIFE
function chai() {
  let username = "Vicky"; //
  console.log(`Hey ${username} Chai is good for health`);

}
chai(); // function call basically



// IIFE (Immediately Invoked Function Expression)
(function () {
  let username = "Vicky"; //
  console.log(`Hey ${username} Chai is good for health`);

})();
// Full code inside the brackets is treated as a function and then it is immediately invoked


//Short hand Notation

//IMPLICIT 
const balance = 1000;
if (balance > 500) console.log("You are eligible for a credit card");

const balance1 = 1000;
if (balance1 > 500) { (console.log("You are eligible for a credit card")); }; // This is also correct but not a good practice





const UserEmail = "Piyushdeg9@gmail.com";
if (UserEmail) {
  console.log("Got the email");
} else {
  console.log("Email is not found");
}
// Output: Got the email



// truthly and falsy values in JavaScript
// Falsy values: false, 0, "", null, undefined, NaN
// Truthy values: All values that are not falsy

if (0) {
  console.log("This is truthy"); // This will not be printed because 0 is a falsy value
}
else {
  console.log("This is falsy"); // This will be printed because 0 is a falsy value
}
// Output: This is falsy


const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
} else {
  console.log("Object is not empty");
}
// Output: Object is empty 

// because Object.keys(emptyObj) returns an array of keys in the object
// and length property returns the number of keys in the object
// if there are no keys in the object then length will be 0
// So, Object.keys(emptyObj).length === 0 will be true if the object is empty





// Nullish Coalescing Operator (??)

// It returns the right-hand side operand when the left-hand side operand is null or undefined, otherwise it returns th
// e left-hand side operand.

let val1;
val1 = 5 ?? 10; // val1 is undefined so it will return 10
console.log(val1); // Output: 10

let val2 = null;
val2 = val2 ?? "Hello"; // val2 is null so it will return "Hello"
console.log(val2); // Output: Hello

let val3 = "World";
val3 = val3 ?? "Hello"; // val3 is "World" so it will return "World"
console.log(val3); // Output: World
