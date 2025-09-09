// filter map and reduce in JavaScript

// const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

// console.log(values); 




// USING FILTER

// const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter((num)=> num>4 ) // call back function
// console.log(newNums);


// USING FOREACH

const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = [];
myNums.forEach((num) =>{
    if(num>4){
        newNums.push(num)
    }

})
console.log(newNums);



