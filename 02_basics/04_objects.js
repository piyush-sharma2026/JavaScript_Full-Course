// Objects singleton and constructors

// Singleton :- An object which has only one instance is called singleton.
// In JavaScript, almost everything is an object.
// Object is a collection of key-value pairs.
// Key is always a string and value can be any data type.

// const tinderUser = new Object(); // object constructor (singleton)


const tinderUser = { 
    name: "Piyush", // key: name, value: "Piyush"
    age: 21, 
    hobbies: ["coding", "reading", "gaming"],
     isAdult: true,
     };
console.log(tinderUser); // { name: 'Piyush', age: 21, hobbies: [ 'coding', 'reading', 'gaming' ], isAdult: true }
console.log(typeof tinderUser); // object

// Accessing values from object
console.log(tinderUser.name); // Piyush
console.log(tinderUser.age); // 21
console.log(tinderUser.hobbies); // [ 'coding', 'reading', 'gaming' ]
console.log(tinderUser.hobbies[0]); // coding
console.log(tinderUser.isAdult); // true

// Accessing values using bracket notation
console.log(tinderUser["name"]); // Piyush
console.log(tinderUser["age"]); // 21

// Changing values in object
tinderUser.age = 22;
console.log(tinderUser.age); // 22

// Adding new key-value pair to object
 tinderUser.game = "football";
 console.log(tinderUser); // { name: 'Piyush', age: 22, hobbies: [ 'coding', 'reading', 'gaming' ], isAdult: true, game: 'football' }
 
// Deleting key-value pair from object
delete tinderUser.isAdult;
console.log(tinderUser); // { name: 'Piyush', age: 22, hobbies: [ 'coding', 'reading', 'gaming' ], game: 'football' }

const regularUser = {
    name: "Piyush",
    age: 21,
    hobbies: ["coding", "reading", "gaming"],
    isAdult: true,
    email :  "piyushdeg999@gmail.com",
    address : {
        city: "Indore",
        state: "Madhya Pradesh",
        country: "India"
    }
};
console.log(regularUser); // { name: 'Piyush', age: 21, hobbies: [ 'coding', 'reading', 'gaming' ], isAdult: true, email: '
console.log(regularUser.address); // { city: 'Indore', state: 'Madhya Pradesh', country: 'India' }
console.log(regularUser.address.city); // Indore
console.log(regularUser.address.state); // Madhya Pradesh
console.log(regularUser.address.country); // India

// Object methods
console.log(Object.keys(regularUser)); // [ 'name', 'age', 'hobbies', 'isAdult', 'email', 'address' ] --> it returns an array of keys
console.log(Object.values(regularUser)); // [ 'Piyush', 21, [ 'coding', 'reading', 'gaming' ], true, '

console.log(regularUser.address.city.state.country); // India




// Merging two objects using Object.assign() method
const obj1 = {1: "one", 2: "two"};
const obj2 = {3: "three", 4: "four"};

const obj3 = Object.assign({}, {obj1, obj2}); // merging two objects

console.log(obj3); // { obj1: { '1': 'one', '2': 'two' }, obj2: { '3': 'three', '4': 'four' } }
console.log(obj3.obj1); // { '1': 'one', '2': 'two' }
console.log(obj3.obj2); // { '3': 'three', '4': 'four' }
console.log(obj3.obj1[1]); // one
console.log(obj3.obj2[4]); // four


// Merging two objects using spread operator
const obj4 = {...obj1, ...obj2};
console.log(obj4); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four' }
console.log(obj4[1]); // one
console.log(obj4[4]); // four
  

const users = {
    id : 1,
    email : "piyush@user.com",
}
users[1].email;
console.log(users[1].email); // undefined
// Reason :- because users is an object and it doesn't have any key as 1. It has keys as id and email.

// To access the email of the user, we can do like this
console.log(users.email); // piyush@user.com


console.log(Object.keys(tinderUser)); // [ 'name', 'age', 'hobbies', 'game' ]
console.log(Object.values(tinderUser)); // [ 'Piyush', 22, [ 'coding', 'reading', 'gaming' ], 'football' ]
console.log(Object.entries(tinderUser)); // [ [ 'name', 'Piyush' ], [ 'age', 22 ], [ 'hobbies', [Array] ], [ 'game', 'football' ] ]





console.log(tinderUser.hasOwnProperty("name")); // true
console.log(tinderUser.hasOwnProperty("isAdult")); // false
console.log(tinderUser.hasOwnProperty("game")); // true
console.log(tinderUser.hasOwnProperty("age")); // true

// Freezing an object
Object.freeze(tinderUser);
tinderUser.age = 23; // it will not change the age because the object is frozen
console.log(tinderUser.age); // 22