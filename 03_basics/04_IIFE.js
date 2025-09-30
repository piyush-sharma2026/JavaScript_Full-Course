// IIFE:- Immediately Invoked Function Expression
// A function that runs as soon as it is defined.

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


// We can also pass parameters in IIFE
(function (name) {
    let username = name; //
    console.log(`Hey ${username} Chai is good for health`);

})("Piyush");
// Full code inside the brackets is treated as a function and then it is immediately invoked with parameter "Piyush"