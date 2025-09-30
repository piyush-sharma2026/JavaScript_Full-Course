// Scope in JavaScript...!

let a = 5;  // global scope

if (true) {  // block scope
    let a = 10;
    const b = 20;
    //var c = 30;
    // console.log("Inner :" , a);
}

console.log(a); // 5
// console.log(b);
// console.log(c);


function one() {
    const username = "piyush22";

    function two() {
        const website = "learncodeonline.in";
        console.log(username);
    }
    //console.log(website); // Error because website is a block scope variable

    two();
}
one();  // necessary to write this because without this function will not be called

if (true) {
    const username = "piyush22";
    if (username === "piyush22") {
        const website = "learncodeonline.in";
        console.log("Hello " + username);
    }
    //console.log(website); // Error because website is a block scope variable
}
// console.log(username); // Error because username is a block scope variable


/************************************Interesting Topic****************************************************/

// Function Hoisting
console.log(addone(5));  // Works because addone is a function declaration and not a function expression

function addone(num) {
    return num + 1;
}
addone(5); // either you write or not this line it will work because of function hoisting

// console.log(num); // Error because num is a functional scope variable


/***************************************************************/

// Function Expression Hoisting
//console.log(addTwo(5));  // Error because addTwo is a function expression(variable) not a function declaration

const addTwo = function (num) {
    return num + 2;
}


// console.log(num); // Error because num is a functional scope variable