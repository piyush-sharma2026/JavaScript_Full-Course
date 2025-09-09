// While loop
let i = 0;
while(i<5){
    console.log("Hello World " + i);
    i++;
}
//Output:- Hello World 0
//        Hello World 1
//        Hello World 2
//        Hello World 3
//        Hello World 4

// i++ is same as i = i + 1

let j = 0;
while(j<=10){
    console.log(j);
    j++;
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

let k = 10;
while(k>=0){
    console.log(k);
    k--;
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

let m = 0;
while(m<=20){ // print even numbers from 0 to 20
    console.log(m);
    m = m + 2;
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

let n = 1;
while(n<=20){ // print odd numbers from 1 to 20
    console.log(n);
    n = n + 2;
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

// Do...while loop
let a = 0;
do{
    console.log("Hello World " + a);
    a++; 
}while(a<5);
//Output:- Hello World 0
//        Hello World 1
//        Hello World 2
//        Hello World 3
//        Hello World 4

// Methods to apply on while loop using an array

const myArray = [1,2,3,4,5];

let index = 0;
while(index < myArray.length){
    console.log(myArray[index]);
    index++;
}
//Output:- 1
//        2
//        3
//        4
//        5

