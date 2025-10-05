// for loop

for (let i = 0; i < 5; i++) {
    console.log("Hello World " + i);
}
//Output:- Hello World 0
//        Hello World 1
//        Hello World 2
//        Hello World 3
//        Hello World 4

// i++ is same as i = i + 1

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
//Output:- 0
//        1
//        2
//        3
//        4
//        5
//        6
//        7
//        8
//        9
//        10

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//Output:- 10
//        9
//        8
//        7
//        6
//        5
//        4
//        3
//        2
//        1
//        0

for (let i = 0; i <= 20; i = i + 2) { // print even numbers from 0 to 20
    console.log(i);
}
//Output:- 0
//        2
//        4
//        6
//        8
//        10
//        12
//        14
//        16
//        18
//        20

for (let i = 1; i <= 20; i = i + 2) { // print odd numbers from 1 to 20
    console.log(i);
}
//Output:- 1
//        3
//        5
//        7
//        9
//        11
//        13
//        15
//        17
//        19



// for...in loop
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key + " : " + person[key]);
}
//Output:- name: John
//        age: 30
//        city: New York





// for...of loop
const colors = ["Red", "Green", "Blue"];

for (let color of colors) {
    console.log(color);
}
//Output:- Red
//        Green
//        Blue





// forEach loop
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (arrElement) {
    console.log(arrElement);
});
//Output:- 1
//        2
//        3
//        4
//        5

// We can also use arrow function in forEach loop
numbers.forEach((arrElement) => console.log(arrElement)); // Arrow function in forEach loop
//Output:- 1
//        2
//        3
//        4
//        5
// Note:- forEach loop cannot be used with objects. It can be used only with arrays.







//nested for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer loop:  + ${i}`);
    for (let j = 0; j <= 10; j++) {
        // 

        console.log(i + '*' + j + '=' + (i * j)); // multiplication table
    }
}

// Loops using arrays

//  let myArray = ["flash", "Batman", "Superman"];
//  console.log(myArray.length); // length of array
//  for(let i=0; i<myArray.length; i++){
//     console.log(myArray[i]);
//  }
// // Output:- flast
// //         Batman
// //         Superman





// We can also use for...of loop to iterate over array

let myArray = ["flash", "Batman", "Superman"];
for (let hero of myArray) {
    console.log(hero);
}
// Output:- flast
//         Batman
//         Superman




// break and continue
for (let i = 0; i <= 10; i++) {

    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        //break; // it will break the loop when i is 5
        continue; // it will skip the iteration when i is 5 and continue with next iteration
    }


    console.log(`Value of i is: ${i}`);
}





