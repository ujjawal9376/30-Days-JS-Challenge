// Task 1: Write a program to add two numbers and log the result to the console.
let addNum1 = 50;
let addNum2 = 50;
let sum = addNum1 + addNum2;
console.log(`Sum of ${addNum1} and ${addNum2} is: `, sum); //Sum of 50 and 50 is:  100

// Task 2: Write a program to subtract two numbers and log the result to the console.

let subNum1 = 45;
let subNum2 = 35;
let sub = subNum1 - subNum2;
console.log(`Subtraction of ${subNum1} and ${subNum2} is: `, sub); //Subtraction of 45 and 35 is:  10

// Task 3: Write a program to multiply two numbers and log the result to the console.

let mulNum1 = 75;
let mulNum2 = 35;
let multiply = mulNum1 * mulNum2;
console.log(`Multiply of ${mulNum1} and ${mulNum2} is: `, multiply); //Multiply of 75 and 35 is:  2625

// Task 4: Write a program to divide two numbers and log the result to the console.

let divNum1 = 20;
let divNum2 = 2;
let divide = divNum1 / divNum2;
console.log(`Divide of ${divNum1} and ${divNum2} is: `, divide); //Divide of 20 and 2 is:  10

// Task 5: Write a program to find the reminder when one number is divided by another and log the result to the console.

let remNum1 = 45;
let remNum2 = 10;
let reminder = remNum1 % remNum2;
console.log("Remainder is:", reminder); //Remainder is: 5

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

let num1 = 15;
num1 += 10; // 10 will add in num1 by "+=" this operator
console.log(num1); // Result is 25

// Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.

let num2 = 15;
num2 -= 10; // 10 will subtract from num2 by "-=" this operator
console.log(num2); // Result is 5

// Task 8: Write a program to compare two numbers using > and < and log the result to the console.
let comNum1 = 10;
let comNum2 = 15;
console.log(`${comNum1} is less than ${comNum2}`, comNum1 < comNum2); //10 is less than 15 true
console.log(`${comNum1} is greater than ${comNum2}`, comNum1 > comNum2); //10 is greater than 15 false

// Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.

let cumNum3 = 10;
let cumNum4 = 15;
console.log("cumNum3 >= comNum4 is", cumNum3 >= cumNum4); //cumNum3 >= comNum4 false
console.log("cumNum3 <= comNum4 is", cumNum3 <= cumNum4); //cumNum3 <= comNum4 true

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.

let cumNum5 = 10;
let cumNum6 = 15;
console.log("cumNum5 == comNum6 is", cumNum5 == cumNum6); //cumNum5 == comNum6 false
console.log("cumNum5 === comNum6 is", cumNum5 === cumNum6); //cumNum5 === comNum6 false

// Task 11: write a program that uses the && operator to combine two conditions and log the result to the console.

let logNum1 = 8;
let logNum2 = 6;
console.log(logNum1 >= logNum2 && logNum1 == logNum2);
console.log(logNum1 >= logNum2 || logNum1 == logNum2); //Task 12
console.log(!true); // Task 13

// Task 14
let ternum1 = -8;
let ternum2 = ternum1 > 0 ? "The Number is positive" : "The number is negative";
console.log(ternum2);

// Feature Request

// Question 1

let arNum1 = 10;
let arNum2 = 5;
console.log("arNum1 + arNum2 is: ", arNum1 + arNum2);
console.log("arNum1 - arNum2 is: ", arNum1 - arNum2);
console.log("arNum1 * arNum2 is: ", arNum1 * arNum2);
console.log("arNum1 / arNum2 is: ", arNum1 / arNum2);
console.log("arNum1 % arNum2 is: ", arNum1 % arNum2);

// Question 2

let clNum1 = 25;
let clNum2 = 25;
console.log(
  "clNum1 <= clNum2 && clNum1 == clNum2: ",
  clNum1 <= clNum2 && clNum1 == clNum2
);
