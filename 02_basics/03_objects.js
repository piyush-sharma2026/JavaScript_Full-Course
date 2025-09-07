// Objects...!

// Singleton :- An object which has only one instance is called singleton.
// In JavaScript, almost everything is an object.
// Object is a collection of key-value pairs.
// Key is always a string and value can be any data type.



const person = { 
    name: "Piyush", // key: name, value: "Piyush"
    age: 21, 
    hobbies: ["coding", "reading", "gaming"],
     isAdult: true,
     };

console.log(person); // { name: 'Piyush', age: 21, hobbies: [ 'coding', 'reading', 'gaming' ], isAdult: true }
console.log(typeof person); // object

// Accessing values from object
console.log(person.name); // Piyush
console.log(person.age); // 21
console.log(person.hobbies); // [ 'coding', 'reading', 'gaming' ]
console.log(person.hobbies[0]); // coding
console.log(person.isAdult); // true

// Accessing values using bracket notation
console.log(person["name"]); // Piyush
console.log(person["age"]); // 21

// Changing values in object
person.age = 22;
console.log(person.age); // 22

// Adding new key-value pair to object
 person.game = "football";
 console.log(person); // { name: 'Piyush', age: 22, hobbies: [ 'coding', 'reading', 'gaming' ], isAdult: true, game: 'football' }

// Deleting key-value pair from object
delete person.isAdult;
console.log(person); // { name: 'Piyush', age: 22, hobbies: [ 'coding', 'reading', 'gaming' ], game: 'football' }

// Object methods
console.log(Object.keys(person)); // [ 'name', 'age', 'hobbies', 'game' ] --> it returns an array of keys
console.log(Object.values(person)); // [ 'Piyush', 22, [ 'coding', 'reading', 'gaming' ], 'football' ] --> it returns an array of values
console.log(Object.entries(person)); // [ [ 'name', 'Piyush' ], [ 'age', 22 ], [ 'hobbies', [Array] ], [ 'game', 'football' ] ] --> it returns an array of key-value pairs

// Nested object
const student = {
    name: "John",
    age: 20,
    marks: {
        math: 90,
        science: 85,
        english: 88
    }
};

console.log(student); // { name: 'John', age: 20, marks: { math: 90, science: 85, english: 88 } }
console.log(student.marks); // { math: 90, science: 85, english: 88 }
console.log(student.marks.math); // 90
console.log(student["marks"]["science"]); // 85

// Looping through object
for (let key in person) {
    console.log(key, person[key]);
}
// name Piyush
// age 22
// hobbies [ 'coding', 'reading', 'gaming' ]
// game football

// Object destructuring
const {name, age, hobbies} = person;
console.log(name); // Piyush
console.log(age); // 22
console.log(hobbies); // [ 'coding', 'reading', 'gaming' ]

// Destructuring nested object
const {math, science} = student.marks;
console.log(math); // 90
console.log(science); // 85

// Spread operator in object
const newPerson = {...person, country: "India"};
console.log(newPerson); // { name: 'Piyush', age: 22, hobbies: [ 'coding', 'reading', 'gaming' ], game: 'football', country: 'India' }
console.log(person); // original object remains unchanged { name: 'Piyush', age: 22, hobbies: [ 'coding', 'reading', 'gaming' ], game: 'football' }

// Nested destructuring with spread operator
const student2 = {...student, marks: {...student.marks, social: 92}};
console.log(student2); // { name: 'John', age: 20, marks: { math: 90, science: 85, english: 88, social: 92 } }
console.log(student); // original object remains unchanged { name: 'John', age: 20, marks: { math: 90, science: 85, english: 88 } }

// Object.freeze() --> it prevents modification of existing properties and addition of new 





// adding method to object        // `` is called template literal backtick
student.greetings = function() {  

    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}

student.greetings(); // Hello, my name is John and I am 20 years old.


