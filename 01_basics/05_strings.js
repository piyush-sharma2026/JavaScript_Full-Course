// Strings in javaScript...!

const name = "Piyush";
const repoCount = 50;
// console.log(name + repoCount + "Value"); // Old version

//  use (``) (backticks)

console.log(`Hello my name is ${name} and my repo count is ${repoCount} `);

// Output : Hello my name is Piyush and my repo count is 50


//Way to declare a string
const gameName = new String('piyushsharma');

console.log(gameName[0]); // p
console.log(gameName.__proto__); // {}
console.log(gameName.length); //12
console.log(gameName.toUpperCase()); // PIYUSHSHARMA
console.log(gameName.trimEnd()); // piyushsharma
console.log(gameName.trimStart()); // piyushsharma
console.log(gameName.charAt(3)); // u
console.log(gameName.indexOf('s')); // 4


const gameName2 = new String('computerScience');

const newString = gameName2.substring(0,4);
console.log(newString); // comp (start index included but end index not included)

// const anotherString = gameName2.slice(0,4);
// console.log(anotherString); // comp

const anotherString = gameName2.slice(-8,4);
console.log(anotherString); // comp


const trimingString = "    Piyush    ";
console.log(trimingString.trim()); // removes white spaces

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', "_")); // replaces %20 with _

console.log(url.includes('hitesh')); // true --> hitesh is in url or not it checks
