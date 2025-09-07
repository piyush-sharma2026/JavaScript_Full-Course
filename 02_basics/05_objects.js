const course = {
    title: "JavaScript - The Complete Guide",
    lessons: 100,
    creator: "Maximilian",
    length: 25,
    level: 2,
    isFree: true,
    tags: ["JavaScript", "programming"],
};

// Accessing Object Properties
console.log(course.title);
console.log(course["title"]);

const prop = "level";
console.log(course[prop]);

// Adding New Properties
course.isPublished = true;
console.log(course); // { title: 'JavaScript - The Complete Guide', lessons: 100, creator: 'Maximilian', length: 25, level: 2, isFree: true, tags: [ 'JavaScript', 'programming' ], isPublished: true }

// Deleting Properties
delete course.isFree;
console.log(course); // { title: 'JavaScript - The Complete Guide', lessons: 100, creator: 'Maximilian', length: 25, level: 2, tags: [ 'JavaScript', 'programming' ], isPublished: true }




// De-structuring Objects 
// (VERY VERY IMPORTANT)
const {title, lessons} = course;
console.log(title, lessons); // JavaScript - The Complete Guide 100

const {creator} = course;
console.log(creator); // Maximilian
const {creator:author} = course; // renaming while destructuring
console.log(author); // Maximilian

const {length, level} = course;
console.log(length, level); // 25 2





// JSON (JavaScript Object Notation)
// JSON is a syntax for storing and exchanging data.
// JSON is text, written with JavaScript object notation.
// JSON is language independent data format.
// JSON is "self-describing" and easy to understand.

//JSON EXAMPLES:--

// {
//      "name": "Piyush",
//      "age": 21,
//      "hobbies": ["coding", "reading", "gaming"],
//      "isAdult": true,
// }

// Converting Object to JSON
const courseJSON = JSON.stringify(course);
console.log(courseJSON); // {"title":"JavaScript - The Complete Guide","lessons":100,"creator":"Maximilian","length":25,"level":2,"tags":["JavaScript","programming"],"isPublished":true}
console.log(typeof courseJSON); // string

// Converting JSON to Object
const courseObject = JSON.parse(courseJSON);
console.log(courseObject); // { title: 'JavaScript - The Complete Guide', lessons: 100, creator: 'Maximilian', length: 25, level: 2, tags: [ 'JavaScript', 'programming' ], isPublished: true }
console.log(typeof courseObject); // object








// Nested Objects
const student = {
    name: "John",
    age: 25,
    courses: ["JavaScript", "React"],
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
    },
};  
console.log(student.address.city);

// Object Methods
const person = {
    firstName: "Jane",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
};

console.log(person.fullName()); // Jane Doe

// Iterating Over Object Properties
for (let key in course) {
    console.log(key + ": " + course[key]);  // title: JavaScript - The Complete Guide, lessons: 100, creator: Maximilian, length: 25, level: 2, isFree: true, tags: JavaScript,programming
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(course)); // [ 'title', 'lessons', 'creator', 'length', 'level', 'isFree', 'tags', 'isPublished' ]
console.log(Object.values(course)); // [ 'JavaScript - The Complete Guide', 100, 'Maximilian', 25, 2, true, [ 'JavaScript', 'programming' ], true ]
console.log(Object.entries(course)); // [ [ 'title', 'JavaScript - The Complete Guide' ], [ 'lessons', 100 ], [ 'creator', 'Maximilian' ], [ 'length', 25 ], [ 'level', 2 ], [ 'isFree', true ], [ 'tags', [Array] ], [ 'isPublished', true ] ]