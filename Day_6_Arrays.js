// Task 1: Create an array of numbers from 1 to 5 and log the array to the console. 
const NumArray = [1, 2, 3, 4, 5];
console.log(`Array : ${NumArray}`);

// Task 2: Access the first and last elements of the array and log them to the console.
const FirstElement = NumArray[0];
const LastElement = NumArray[NumArray.length - 1];
console.log(`First Element : ${FirstElement}
Last Element : ${LastElement}`);

// Task 3: Use the push method to add a new number to the end of the array and log the updated array.  
NumArray.push(6);
console.log(`Updated Array [push] : ${NumArray}`);

// Task 4: Use the pop method to remove the last element from the array and log the updated array.  
NumArray.pop();
console.log(`Updated Array [pop] : ${NumArray}`);

// Task 5: Use the shift method to remove the first element from the array and log the updated array.  
NumArray.shift();
console.log(`Updated Array [shift] : ${NumArray}`);

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.  
NumArray.unshift(0);
console.log(`Updated Array [unshift] : ${NumArray}`);

// Task 7: Use the map method to create a new array where each number is doubled and log the new array. 
const doubledArray = NumArray.map((number) => number * 2);
console.log(`Doubled Array < Map > : ${doubledArray}`);

// Task 8: Use the filter method to create a new array with only even numbers and log the new array. 
const EvenArray = NumArray.filter((number) => number % 2 === 0);
console.log(`Even Array < Filter > : ${EvenArray}`);

// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result. 
const SumArray = NumArray.reduce(
  (PreviousValue, CurrentValue) => PreviousValue + CurrentValue,
  0
);
console.log(`Sum Array < Reduce > : ${SumArray}`);

// Task 10: Use a for loop to iterate over the array and log each element to the console.
for (let index = 0; index < NumArray.length; index++)
  console.log(` Index : ${index} | Value : ${NumArray[index]}`);

// Task 11: Use the forEach method to iterate over the array and log each element to the console.
NumArray.forEach((number) => {
  console.log(`Number : ${number}`);
});

// Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`Matrix : ${matrix}`);

// Task 13: Access and log a specific element from the two-dimensional array.
const specificElementFromMatrix = matrix[2][1];
console.log(`Specific Element : ${specificElementFromMatrix}`);

