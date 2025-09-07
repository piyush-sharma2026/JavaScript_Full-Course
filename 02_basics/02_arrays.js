// Arrays....!

const marvel_heroes =["ironman","captain america","thor","hulk","black widow"];
const dc_heroes = new Array["superman","batman","flash","wonder"];

console.log(marvel_heroes); // [ 'ironman', 'captain america', 'thor', 'hulk', 'black widow' ]
console.log(typeof marvel_heroes); // object
console.log(Array.isArray(marvel_heroes)); // true
console.log(marvel_heroes.length); // 5
console.log(marvel_heroes[0]); // ironman
console.log(marvel_heroes[2]); // thor
console.log(marvel_heroes[4]); // black widow
console.log(marvel_heroes[5]); // undefined

marvel_heroes[5] = "spiderman"; // adding new element at index 5
console.log(marvel_heroes); // [ 'ironman', 'captain america', 'thor', 'hulk', 'black widow', 'spiderman' ]

marvel_heroes[3] = "doctor strange"; // updating element at index 3 (changing index 3 value from hulk to doctor strange)
console.log(marvel_heroes); // [ 'ironman', 'captain america', 'thor', 'doctor strange', 'black widow', 'spiderman' ]
console.log(marvel_heroes.length); // 6

marvel_heroes.push(dc_heroes); // adding new element at the end
console.log(marvel_heroes);  // [ 'ironman', 'captain america', 'thor', 'doctor strange', 'black widow', 'spiderman', [ 'superman', 'batman', 'flash', 'wonder' ] ]
console.log(marvel_heroes.length); // 7

marvel_heroes.pop(); // removing last element
console.log(marvel_heroes); // [ 'ironman', 'captain america', 'thor', 'doctor strange', 'black widow', 'spiderman' ]
console.log(marvel_heroes.length); // 6

marvel_heroes.unshift("antman"); // adding new element at the beginning
console.log(marvel_heroes); // [ 'antman', 'ironman', 'captain america', 'thor', 'doctor strange', 'black widow', 'spiderman' ]
console.log(marvel_heroes.length); // 7

marvel_heroes.shift(); // removing first element
console.log(marvel_heroes); // [ 'ironman', 'captain america', 'thor', 'doctor strange', 'black widow', 'spiderman' ]
console.log(marvel_heroes.length); // 6

console.log(marvel_heroes.indexOf("doctor strange")); // 3 --> it returns the index of the element
console.log(marvel_heroes.indexOf("superman")); // -1 --> if element not found, it returns -1

console.log(marvel_heroes.includes("black widow")); // true --> it returns true if element found
console.log(marvel_heroes.includes("flash")); // false --> it returns false if element not found

console.log(marvel_heroes.reverse()); // [ 'spiderman', 'black widow', 'doctor strange', 'thor', 'captain america', 'ironman' ] --> it reverses the array




//Concatenate two arrays
const newArr = marvel_heroes.concat(dc_heroes); // it concatenates two arrays and returns a new array
console.log(newArr); // [ 'spiderman', 'black widow', 'doctor strange', 'thor', 'captain america', 'ironman', [ 'superman', 'batman', 'flash', 'wonder' ] ]
console.log(newArr[6]); // superman
console.log(marvel_heroes); // [ 'spiderman', 'black widow', 'doctor strange', 'thor', 'captain america', 'ironman' ] --> original array remains unchanged




// Spread operator to concatenate two arrays
const all_new_heroes = [...marvel_heroes,...dc_heroes]; // it concatenates two arrays and returns a new array using spread operator
console.log(all_new_heroes); // [ 'spiderman', 'black widow', 'doctor strange', 'thor', 'captain america', 'ironman', 'superman', 'batman', 'flash', 'wonder' ]
console.log(all_new_heroes[6]); // superman
console.log(marvel_heroes); // [ 'spiderman', 'black widow', 'doctor strange', 'thor', 'captain america', 'ironman' ] --> original array remains unchanged



const_another_array = [1,2,3[4,5,6],7[6,7],8,9]; // nested array
console.log(const_another_array); // [ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7 ], 8, 9 ]
console.log(const_another_array.length); // 8
console.log(const_another_array[3]); // [ 4, 5, 6 ]
console.log(const_another_array[3][1]); // 5
console.log(const_another_array[5][0]); // 6

const_flat_array = const_another_array.flat(); // it flattens the nested array
console.log(const_flat_array); // [ 1, 2, 3, 4, 5, 6, 7, 6, 7, 8, 9 ]
console.log(const_flat_array.length); // 11
console.log(const_flat_array[3]); // 4
console.log(const_flat_array[5]); // 6
console.log(const_flat_array[7]); // 6



console.log(Array.isArray("Piyush")); // false // it checks whether the given value is an array or not
console.log(Array.isArray(["Piyush"])); // true // it checks whether the given value is an array or not
console.log(Array.isArray([])); // true



console.log(Array.from("Piyush")); // [ 'P', 'i', 'y', 'u', 's', 'h' ] // it converts a string into an array of characters
console.log(Array.from([1,2,3])); // [ 1, 2, 3 ] // it converts a array-like object into an array



let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ] // it creates a new array from the given values