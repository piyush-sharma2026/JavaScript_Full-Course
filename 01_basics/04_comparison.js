// Comparion in JavaScript...!

console.log(2>1); //true
console.log(2>=1); //true
console.log(2<1); //false
console.log(2<=1); //false


console.log("2">1); // true (Javascript directly converted "2" as a number)
console.log("02">1); // true

console.log(null>0); // false
console.log(null==0);// false
console.log(null>=0);// true

/*Note:- 
The reason is that an equality check == and comparisons 
          > < >= <= work differently
          Comparions convert null to a number , treating as O
          That's why null >= 0  is true and null > 0 is false 
*/


console.log(undefined ==0); //false
console.log(undefined > 0); //false
console.log(undefined >= 0);//false

/*

"==" and "==="

*/

// === (Checks value and datatypes also)

console.log("2" === 2); // false (conversion not allowed)
console.log("2"==2);    // true  (conversion allowed)






