// Arrays...!

const myArr = [1, 2, 3, 4, 5];

console.log(myArr); // [ 1, 2, 3, 4, 5 ]
console.log(typeof myArr); // object
console.log(Array.isArray(myArr)); // true

console.log(myArr.length); // 5
console.log(myArr[0]); // 1
console.log(myArr[2]); // 3
console.log(myArr[4]); // 5
console.log(myArr[5]); // undefined

myArr[5] = 6; // adding new element at index 5
console.log(myArr); // [ 1, 2, 3, 4, 5, 6 ]

myArr[3] = 10; // updating element at index 3 (changing index 3 value from 4 to 10)
console.log(myArr); // [ 1, 2, 3, 10, 5, 6 ]
console.log(myArr.length); // 6

myArr.push(7); // adding new element at the end
console.log(myArr); // [ 1, 2, 3, 10, 5, 6, 7 ]
console.log(myArr.length); // 7

myArr.pop(); // removing last element
console.log(myArr); // [ 1, 2, 3, 10, 5, 6 ]
console.log(myArr.length); // 6

myArr.unshift(0); // adding new element at the beginning
console.log(myArr); // [ 0, 1, 2, 3, 10, 5, 6 ]
console.log(myArr.length); // 7

myArr.shift(); // removing first element
console.log(myArr); // [ 1, 2, 3, 10, 5, 6 ]
console.log(myArr.length); // 6

console.log(myArr.indexOf(10)); // 3 --> it returns the index of the element
console.log(myArr.indexOf(100)); // -1 --> if element not found, it returns -1

console.log(myArr.includes(5)); // true --> it returns true if element found
console.log(myArr.includes(100)); // false --> it returns false if element not found

console.log(myArr.reverse()); // [ 6, 5, 10, 3, 2, 1 ] --> it reverses the array

const newArr = myArr.concat([7, 8, 9]); // it concatenates two arrays and returns a new array
console.log(newArr); // [ 6, 5, 10, 3, 2, 1, 7, 8, 9 ]
console.log(myArr); // [ 6, 5, 10, 3, 2, 1 ] --> original array remains unchanged



//******************************************************************************************************/

// Slice and splice.....!

const myNewArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Slice(startIndex, endIndex) --> it returns a new array from startIndex to endIndex-1
console.log(myNewArr.slice(2, 5)); // [ 3, 4, 5 ] --> it returns a new array from index 2 to index 4
console.log(myNewArr.slice(0, 3)); // [ 1, 2, 3 ] --> it returns a new array from index 0 to index 2
console.log(myNewArr.slice(4)); // [ 5, 6, 7, 8, 9 ] --> if endIndex is not provided, it returns till the end of the array
console.log(myNewArr.slice(-3)); // [ 7, 8, 9 ] --> if startIndex is negative, it starts from the end of the array

// Splice(startIndex, deleteCount, item1, item2, ...) --> it modifies the original array
myNewArr.splice(2, 3); // it removes 3 elements from index 2
console.log(myNewArr); // [ 1, 2, 6, 7, 8, 9 ]

myNewArr.splice(2, 0, 3, 4, 5); // it adds 3, 4, 5 at index 2 and removes 0 elements
console.log(myNewArr); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]