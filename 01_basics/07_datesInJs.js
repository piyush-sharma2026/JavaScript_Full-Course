// DATES

let myDate = new Date();
console.log(myDate); // current date and time
console.log(typeof myDate); // object
console.log(myDate.toString()); // it converts date object to string
console.log(myDate.toDateString()); // it shows only date part
console.log(myDate.toTimeString()); // it shows only time part
console.log(myDate.toISOString()); // it shows date and time in ISO format




let specificDate = new Date("2020-01-01");
console.log(specificDate); // Wed Jan 01 2020 00:00:00 GMT+0000 (Coordinated Universal Time)
console.log(specificDate.toDateString()); // Wed Jan 01 2020
console.log(specificDate.toISOString()); // 2020-01-01T00:00:00.000Z
console.log(specificDate.toTimeString()); // 00:00:00 GMT+0000 (Coordinated Universal Time)




let specificDateTime = new Date("2020-01-01T10:30:00");
console.log(specificDateTime); // Wed Jan 01 2020 10:30:00 GMT+0000 (Coordinated Universal Time)
console.log(specificDateTime.toLocaleString()); // 1/1/2020, 10:30:00 AM
console.log(specificDateTime.toLocaleDateString()); // 1/1/2020
console.log(specificDateTime.toLocaleTimeString()); // 10:30:00 AM
// Get components of the date
console.log(specificDateTime.getFullYear()); // 2020
console.log(specificDateTime.getMonth()); // 0 --> month starts from 0 (0 - January, 1 - February, ..., 11 - December)
console.log(specificDateTime.getDate()); // 1 --> day of the month
console.log(specificDateTime.getDay()); // 3 --> day of the week (0 - Sunday, 1 - Monday, ..., 6 - Saturday)
console.log(specificDateTime.getHours()); // 10
console.log(specificDateTime.getMinutes()); // 30
console.log(specificDateTime.getSeconds()); // 0
console.log(specificDateTime.getMilliseconds()); // 0
console.log(specificDateTime.getTime()); // 1577877000000 --> milliseconds since January 1, 1970


let myTimestamp = Date.now();
console.log(myTimestamp); // current timestamp in milliseconds since January 1, 1970

console.log(Math.floor(myTimestamp / 1000)); // current timestamp in seconds since January 1, 1970

// Create date using components
let anotherDate = new Date(2020, 0, 1, 10, 30, 0); // year, month (0-11), day, hours, minutes, seconds
console.log(anotherDate); // Wed Jan 01 2020 10:30:00 GMT+0000 (Coordinated Universal Time)
console.log(anotherDate.toString()); // Wed Jan 01 2020 10:30:00 GMT+0000 (Coordinated Universal Time)
console.log(anotherDate.toISOString()); // 2020-01-01T10:30:00.000Z
console.log(anotherDate.toLocaleString()); // 1/1/2020, 10:30:00 AM
console.log(anotherDate.toLocaleDateString()); // 1/1/2020
console.log(anotherDate.toLocaleTimeString()); // 10:30:00 AM

console.log(anotherDate.getFullYear()); // 2020
console.log(anotherDate.getMonth()); // 0
console.log(anotherDate.getDate()); // 1
console.log(anotherDate.getDay()); // 3
console.log(anotherDate.getHours()); // 10
console.log(anotherDate.getMinutes()); // 30
console.log(anotherDate.getSeconds()); // 0
console.log(anotherDate.getMilliseconds()); // 0
console.log(anotherDate.getTime()); // 1577877000000

// Set components of the date
anotherDate.setFullYear(2021);
console.log(anotherDate.getFullYear()); // 2021

anotherDate.setMonth(11); // December
console.log(anotherDate.getMonth()); // 11

anotherDate.setDate(25);
console.log(anotherDate.getDate()); // 25

anotherDate.setHours(15);
console.log(anotherDate.getHours()); // 15

anotherDate.setMinutes(45);
console.log(anotherDate.getMinutes()); // 45

anotherDate.setSeconds(30);
console.log(anotherDate.getSeconds()); // 30

anotherDate.setMilliseconds(500);
console.log(anotherDate.getMilliseconds()); // 500

console.log(anotherDate.toString()); // Sat Dec 25 2021 15:45:30 GMT+0000 (Coordinated Universal Time)
console.log(anotherDate.toISOString()); // 2021-12-25T15:45:30.500Z
console.log(anotherDate.toLocaleString()); // 12/25/2021, 3:45:30 PM
console.log(anotherDate.toLocaleDateString()); // 12/25/2021
console.log(anotherDate.toLocaleTimeString()); // 3:45:30 PM

// Date arithmetic
let date1 = new Date("2020-01-01");
let date2 = new Date("2021-01-01");

let diffInMs = date2 - date1; // difference in milliseconds
console.log(diffInMs); // 31622400000

let diffInDays = diffInMs / (1000 * 60 * 60 * 24); // difference in days
console.log(diffInDays); // 366 (2020 is a leap year)

let newDate = new Date(date1.getTime() + 10 * (1000 * 60 * 60 * 24)); // add 10 days to date1
console.log(newDate.toDateString()); // Thu Jan 11 2020