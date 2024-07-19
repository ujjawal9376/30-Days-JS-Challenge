// Task 1: Create an object representing a book with properties like, title, author and year and log the object to the console.
const book = {
  title: "Thinking",
  author: "ujjawal",
  year: "2024",
};
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Task 3: Add a method to the book object that return a string with the book's title and author, and log the result of calling this method.
book.details = function () {
  console.log(`The book ${this.title} is written by ${this.author}`);
};
console.log(book.details());

// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.year = 2030;
console.log(book.year);

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
const library = {
  name: "Sharma Library",
  books: [
    {
      title: "Javascript",
      author: "ujjawal Sharma",
      year: "2023",
    },
    {
      title: "Html",
      author: "Ujjawal",
      year: "2024",
    },
  ],
};
console.log(library.books);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
// console.log("Library Name: ", library.name);

library.books.forEach((book) => {
    console.log("Book Title: ", book.title);
});

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
book.bookdata = function () {
  console.log(`${this.title} is published in ${this.year}`);
};
console.log(book.bookdata());

// Task 8: Use a for...in loop  iterate over the properties of the book object and log each property and its value.
for (property in book) {
  console.log(`${property} : ${book[property]}`); // print book object keys and values
}

// Task 9: Use Object.keys and object.values methods to log all the keys and values of the book object.
console.log("keys: ", Object.keys(book));
console.log("keys: ", Object.values(book));