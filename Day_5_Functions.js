// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkNumber(num) {
  if (num % 2 == 0) {
    console.log("Number is Even");
  } else {
    console.log("Number Is Odd");
  }
}
checkNumber(10);

// Task 2: Write a function to calculate the square of a number and return the result.
function square(num) {
 let result = num**2;
 return result;
}

let resultofsquare = square(10);
console.log("Square of number is: ",resultofsquare);

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function maxNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
console.log("max number is: ", maxNum(120, 66));

// Task 4: Write a function expression to concatenate two strings and return the result.
function conCat() {
  let str1 = "Ujjawal ";
  let str2 = "Sharma";
  return str1 + str2;
}
console.log(conCat());

// Task 5: Write an arrow function  to calculate the sum of two numbers  and return the result.
let sum = (num1, num2) => {
  return num1 + num2;
};
console.log("sum of two number is:" + sum(5, 100));

// Task 6: Write an arrow function  to check if a string contains a specific character and return a boolean value.
const containsChar = (str, char) => {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        return true;
      }
    }
    return false;
};

  console.log(containsChar("Ujjawal", "a")); // true
  console.log(containsChar("Hello", "r")); // false

// Task 7: Write an function that takes two parameters and returns their product. provide a default value for the second parameter.
function product(num1, num2 = 8) {
  return num1 * num2;
}
console.log(`product of two number is ${product(300, 4)}`);
console.log(`product of two number is ${product(4)}`);

// Task 8: Write an function that takes a person's name and age and returns a greeting message. provide a default value for the age.
function greet(name, age = 18) {
  return `Hello, ${name}! You are ${age} years old.`;
}
console.log(greet("Ujjawal", 19));

// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
function sayHello() {
  console.log("Hello! Ji");
}
function repeat(first, num) {
  for (let i = 1; i <= num; i++) {
    first();
  }
}
function sayHello() {
  console.log("Hello! ji");
}
repeat(sayHello, 5);

// Task 10: Write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second function to the result.
const applyFunctions = (fn1, fn2, value) => {
  let result1 = fn1(value);
  let result2 = fn2(result1);
  return result2;
};

let addOne = (x) => x + 1;
let sq = (y) => y * y;

const result = applyFunctions(addOne, sq, 10);
console.log(result);
