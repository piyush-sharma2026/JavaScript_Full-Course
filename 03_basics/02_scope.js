// Scope in JavaScript...!

let a = 5;  // global scope

if(true){  // block scope
    let a = 10;
    const b = 20;
    //var c = 30;
    // console.log("Inner :" , a);
}
  



console.log(a);
// console.log(b);
// console.log(c);