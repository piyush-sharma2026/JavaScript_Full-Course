// Functions in JavaScript
// A function is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).
// Functions are one of the building blocks in JavaScript.

// Function Declaration
function greet() {
    console.log("Hello, welcome to JavaScript!");
}
// Invoking the function // or calling the function
greet(); // Hello, welcome to JavaScript!




// Function with parameters
function add(a, b) {
    let sum = a + b; // we can put or directly return a + b;
    return sum;
}
const sum = add(5, 3);
console.log(sum); // 8

// Another Example in another way
function addNumbers(num1, num2) { //parameters
    console.log(num1 + num2);
}
addNumbers(10, 20); // 30         //arguments
addNumbers(5, 15); // 20






function loginUserMessage(username = "guest" ) { // default parameter

    // if(username === undefined) {
    //     console.log("Please enter your username");
    //     return;
    // }

    return `Welcome back, ${username}!`;

}
//console.log(loginUserMessage("Piyush")); // Welcome back, Piyush!
console.log(loginUserMessage()); // Welcome back, guest



/**********************************************************************/

function calculateCardPrice(...num1){
        return num1;

}
console.log(calculateCardPrice(5,8,26,5,8,9)); // [ 5, 8, 26, 5, 8, 9 ]


/**********************************************************************/

// Function inside Object
const user = {
    username : "Piyush",
    price : 1000,

}

function handleObject(anyobject) { 
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user); // username is Piyush and price is 1000


//We can do this too
handleObject({username: "Piyush", price: 1000}); // username is John and price is 500

/**********************************************************************/

const myNewArray = [1,2,3,4,5,6,7,8,9];

function returnSecondValue(getArray){
    return getArray[2];
}
console.log(returnSecondValue(myNewArray)); // 3





