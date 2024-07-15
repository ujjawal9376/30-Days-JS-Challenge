// Control Structures
// Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

let checkNum = 5;
if (checkNum > 0) {
  console.log("Number is Positive");
} else if (checkNum < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is zero");
}

// Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

let voteAge = 18;
if (voteAge >= 18 && voteAge <= 100) {
  console.log("Person is eligible for vote ");
} else if (voteAge < 18) {
  console.log("Person is not eligible for vote");
} else {
  console.log("Wrong Age'May be you are not a human'");
}

// Task 3: Write a program to find the largest of three numbers using nested if-else statements

function findLargest(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    return num1;
  } else if (num2 >= num1 && num2 >= num3) {
    return num2;
  } else {
    return num3;
  }
}

let largestNumber = findLargest(10, 38, 86);
console.log("Largest number :", largestNumber);

// Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let Day = 5;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thrusday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Wrong Input");
    break;
}

// Task 5: Write a program that uses a switch case to assign a grade ('A','B','C','D','F')  based on a score  and log the grade to the console.
let score = 80;
let grade;
switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 65:
    grade = "C";
    break;
  case score >= 33:
    grade = "D";
    break;
  case score < 33:
    grade = "F";
    break;
  default:
    break;
}

console.log(`The grade is ${grade}`);

// Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number = 11;
let result = number % 2 == 0 ? "even" : "odd";
console.log(result);

// Task 7: Write a program to check if a year is a leap year using multiple consitions (divisible by 4, butnot 100 unless also divisible by 400) and log the result to the console.

let year = 2024;
if (year % 4 === 0) {
  console.log(`${year} is a leap year`);
} else if (year % 100 === 0) {
  console.log(`${year} is not a leap year`);
} else if (year % 400 === 0) {
  console.log(`${year} is  a leap year`);
} else {
  console.log(year + " is not a leap year.");
}
