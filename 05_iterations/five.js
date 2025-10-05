const coding = ["js", "ruby", "java", "python", "cpp"];

const value = coding.forEach((item) => {
    console.log(item);
})

console.log(value)// undefined

/*************************************************/
/*************(.filter)(Used when there is condition) ****************/


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((nums) => nums > 4); //
console.log(newNums);




const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum = myNum.filter((nums) => {
    return nums > 4
}); // If we use curly braces (scope) have to write return...
console.log(newNum);


// If we want to use it in forEach

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = []

numbers.forEach((num) => {
    if (num > 5) {
        newNumbers.push(num)
    }
})

console.log(newNumbers);








