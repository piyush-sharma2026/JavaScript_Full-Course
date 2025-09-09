// for of loop....!


const colors1 = ['red', 'green', 'blue'];

for (const color of colors1) {
    console.log(color);
}
// Output:
// red
// green
// blue

console.log(colors1[0]); // Output: red
console.log(colors1[1]); // Output: green
console.log(colors1[2]); // Output: blue


const greetings = "Hello world";

for (const char of greetings) {
    console.log(char);
}
// Output:
// H
// e
// l
// l
// o
//
// w
// o
// r
// l
// d





//Maps
const myMap = new Map();
myMap.set('IN',"India");
myMap.set('USa',"United State of America");
myMap.set('Fr',"France");
myMap.set('IN',"India");

console.log(myMap); // Only unique value will print

// Output: 
//  'IN' => 'India',
//   'USa' => 'United State of America',
//   'Fr' => 'France'

for(const [key, value] of myMap){
    console.log(key, " :-", value);
}
// Output:-
// IN  :- India
// USa  :- United State of America
// Fr  :- 






// for in loop.....!
//OBJECT
const myObj = {
    js : "JavaScript",
    cpp : "c++",
    rb : "ruby",
    swift : " swift by apple",
}

for(const key in myObj){
    console.log(key + ":" + myObj[key]);
}



// for in loop.....!
//ARRAYS
const programming = ["js","rb","py","java","cpp"];

for(const key in programming){
    console.log(key); // Output will be index
    console.log(programming[key]); // output will be elements of array

}





// //Maps (for in loop.....in maps...!)
// const myMap1 = new Map();
// myMap.set('IN',"India");
// myMap.set('USa',"United State of America");
// myMap.set('Fr',"France");
// myMap.set('IN',"India");

// for(const key in myMap1){
//     console.log(myMap1[key]); //loop not possible in map
// }


const coding = ["js","rb","py","java","cpp"];

coding.forEach(function(languages){
    console.log(languages);
})





// Array methods

const colors = ['red', 'green', 'blue'];

for (const color of colors) {
    console.log(color);
}

// Finding index of an element
const index = colors.indexOf('green');
console.log(`Index of green is: ${index}`); // Output: Index of green is: 1

// Finding if an element exists
const hasBlue = colors.includes('blue');
console.log(`Array contains blue: ${hasBlue}`); // Output: Array contains blue: true

// Adding an element
colors.push('yellow');
console.log(colors); // Output: ['red', 'green', 'blue', 'yellow']

// Removing the last element
const lastColor = colors.pop();
console.log(`Removed color: ${lastColor}`); // Output: Removed color: yellow
console.log(colors); // Output: ['red', 'green', 'blue']

// Removing the first element
const firstColor = colors.shift();
console.log(`Removed color: ${firstColor}`); // Output: Removed color: red
console.log(colors); // Output: ['green', 'blue']

// Adding an element at the beginning
colors.unshift('purple');
console.log(colors); // Output: ['purple', 'green', 'blue']

// Finding the length of the array
const length = colors.length;
console.log(`Length of array: ${length}`); // Output: Length of array: 3

// Reversing the array
colors.reverse();
console.log(colors); // Output: ['blue', 'green', 'purple']

// Sorting the array
colors.sort();
console.log(colors); // Output: ['blue', 'green', 'purple']

// Slicing the array
const slicedColors = colors.slice(0, 2);
console.log(slicedColors); // Output: ['blue', 'green']

// Splicing the array (removing elements)
const splicedColors = colors.splice(1, 1);
console.log(`Removed colors: ${splicedColors}`); // Output: Removed colors: green
console.log(colors); // Output: ['blue', 'purple']

// Joining the array into a string
const colorString = colors.join(', ');
console.log(colorString); // Output: blue, purple




