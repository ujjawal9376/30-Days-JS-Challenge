// Task 1: Write a program to print numbers from 1 to 10 using a for loop.
for (let index = 1; index <= 10; index++) {
    const element = index;
    console.log(element);
}

// Task 2: Write a program to print the multiplication table of 5 using a for loop.
let n = 5;
for(let i = 1;i <=10; i++){
console.log(n + "*" + i + "=" + n*i);
}

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
let sum = 0;
let k = 1;
while(k <= 10){
    sum += k;
    k++;
}
console.log("sum of 1 to 10 is " + sum);

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.
let l = 10;
while (l > 0) {
  console.log(l);
  l--;
}

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
let number = 1;
do{
    console.log(number);
    number++;
}while(number <= 5);

// Task 6: Write a program to calculate the factorial of a number using a do...while loop.
let num = 5;
let result = 1
let i = num;

do {
  result *= i;
  i--;
} while (i > 0);
console.log(`factorial of ${num} is ${result}`);

// task 7: write a program to print a pattern using nested for loops.
let rows = 5;
for(let i =1; i<= rows; i++){
    let pattern = '';
    for(let j = 1; j<=i; j++){
        pattern += '*';
    }
    console.log(pattern);
}

// task 8: write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement..
for (let index = 1; index <= 10; index++) {
  if (index == 5) {
    // console.log("5 is Skipped");
    continue;
  }
  console.log(index);
}

// task 9: write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
for (let index = 1; index <= 10; index++) {
  if (index == 7) {
    // console.log("7 is Detected");
    break;
  }
  console.log(index);
}
