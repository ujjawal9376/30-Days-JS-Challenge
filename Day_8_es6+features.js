// Task 1: Use template literals to create a string that includes variables for  a person's name and age, and log the string to the console.
let personName = "Ujjawal Sharma";
let personAge = 19;

console.log(`Hi, My name is ${personName} and I am ${personAge} year old`);

// Task 2: Create a multi-line string using template literals and log it to the console.
console.log(`This is String One, This is String Two`);

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let arrOne = [1, 2, 3, 4, 5];

let [arrTwo, arrThree] = arrOne;

console.log(`This is arrOne: ${arrOne}`);
console.log(`This is arrTwo: ${arrTwo}`);
console.log(`This is arrThree: ${arrThree}`);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
  title: "Day-8",
  author: "Arjun",
};

const { title, author } = book;
console.log(title);
console.log(author);

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
const spreadArrayOne = [1, 2, 3, 4];
const spreadArrayTwo = [5, 6, 7, 8];

const newArray = [...spreadArrayOne, ...spreadArrayTwo, 9, 10];
// console.log(`Using Spread Operator to combine two Arrays: ${newArray}`)
console.log("Using Spread Operator to combine two Arrays:", newArray);

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sumRestParameter(...num) {
  let sum = 0;
  for (values of num) {
    sum += values;
  }
  return console.log(`Rest Parameter sum values are: ${sum}`);
}

sumRestParameter(...spreadArrayTwo);

// Task 7: Write a function that takes parameters and returns their product, with the second parameter having a default value of 1. log the result of calling this function with and without the second parameter.
function defaultParameter(paraOne, paraTwo = 1) {
  return paraOne * paraTwo;
}

console.log(
  `default Parameter with calling function is: ${defaultParameter(2, 3)}`
);
console.log(
  `default Parameter without the second parameter is: ${defaultParameter(2)}`
);

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let channelName = "Chai aur Code";
let createName = "Hitesh Chaudhary Sir";
let channelSubscriber = "1000 Million One day";

const enhancedObject = {
  channelName,
  createName,
  channelSubscriber,
  greeting: function () {
    return this.createName;
  },
};

console.log(enhancedObject);
console.log(enhancedObject.greeting());

// Task 9: Create an object with computed property names based on variables and log the object to the console.

const computedValues = {
  channelName,
  createName,
  channelSubscriber,
};

console.log(computedValues);
