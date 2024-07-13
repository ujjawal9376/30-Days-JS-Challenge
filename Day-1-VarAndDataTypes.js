// Activity 1: variable Declaration
// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var num = 10;
console.log(num);

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let str = "Learning JavaScript";
console.log(str);

// Activity 2: Constant Declaration
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.

const bool = true;
console.log(bool);

// Activity 3: Data Types
// Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the "typeof" operator.

const num1 = 15;
console.log(typeof num1);

const str1 = "Hello World";
console.log(typeof str1);

const boole = false;
console.log(typeof boole);

const obj = { name: "Ujjawal", Address: "Jaipur" };
console.log(typeof obj);

const arr = [1, 2, 3, 4];
console.log(typeof arr);

// Activity 4: Reassigning Variables
// Task 5: Declare a variable using "let", assign it an initial value, reassign a new value , and log both values to the console.

let assignValue = "Ujjawal Sharma";
assignValue = "Ujjawal Kachawal";
console.log(assignValue);

// Activity 5: Understanding "const". 
// TAsk 6: Try reassigning a variable declared with const and observe the erroe.

const varDeclared = "Learn JS";
varDeclared = "Learn Javascript";  // In const we can't reassign a value. it shows the error (TypeError: Assignment to constant variable.)

// Question 1: Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

const numberValue = 150;
console.log(numberValue,typeof numberValue);
// console.log(typeof numberValue);

const stringValue = "Hello World";
console.log(stringValue, typeof stringValue);

const booleanValue = false;
console.log(booleanValue, typeof booleanValue);

const objectValue = { name: "Ujjawal", Address: "Jaipur" };
console.log(objectValue, typeof objectValue);

const arrayValue = [1, 2, 3, 4];
console.log(arrayValue, typeof arrayValue);

// Question 2: Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

let reassignValue = "I am learning JavaScript";
reassignValue = "I am learning reactjs";  // In let we can reassign a value
console.log(reassignValue);

const assign = "My name is Ujjawal Sharma";
assign = "My name is Ujjawal Kachawal";  //  In const we can't reassign a value. it shows the error (TypeError: Assignment to constant variable.)
console.log(assign);