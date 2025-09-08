const user = {
    username:"Piyush",
    price:999,
    welcomeMessage:function(){
        console.log("Welcome " + this.username + " to LearnCodeOnline.in"); // this is used to access the property of the object and refers to the current object
        console.log(this); // this refers to the current object and prints the whole object
    }

}

user.welcomeMessage();
user.username = "Hitesh";
user.welcomeMessage();

console.log(this); // this refers to the global object (window in browsers and global in node.js)






function chai() { 
    let username = "Vicky";
    console.log("Chai is good for health");
    console.log(this); // this refers to the global object (window in browsers and global in node.js)
    console.log(this.username); // Undefined
}

chai(); // this refers to the global object (window in browsers and global in node.js)







// const employee = function(){ // Nothing will be printed because function is not called
//     let username = "Sakshi";
//     console.log("Employee name is " + username);
//     //console.log(this); // this refers to the global object (window in browsers and global in node.js)
//     console.log(this.username); // Undefined
// }


//*****************Arrow function***********

const employee = () => { // Arrow function
    let username = "Sakshi";
    console.log("Employee name is " + username);
    console.log(this); // this refers to the global object (window in browsers and global in node.js)
    console.log(this.username); // Undefined
}



//Explicit return

const addTwo = (num1, num2)=>{
    return num1 + num2;
}
console.log(addTwo(5, 10));



// Emplicit return
const addTwoNumber = (num1, num2)=> num1 + num2; // if there is only one line of code then we can remove the curly braces and return keyword
console.log(addTwo(5, 10));

/*
 You can write this in this format also....(Emplicit return)

const addTwoNumber = (num1, num2)=> (num1 + num2); // if there is only one line of code then we can remove the curly braces and return keyword
console.log(addTwo(5, 10));

*/

const nameofEmployee = (empname) => ("Employee name is " + empname); // if there is only one line of code then we can remove the curly braces and return keyword
console.log(nameofEmployee("Sakshi"));


const myArray = [1,2,3,4];
myArray.forEach((number) => console.log(number)); // Arrow function in forEach loop