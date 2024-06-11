// Define Book constructor function
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// Add method to Book prototype
Book.prototype.getSummary = function() {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Define array of Book instances
const books = [
  new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949)
];

// Use map to create array of book summaries
const bookSummaries = books.map(book => book.getSummary());

// Log array of book summaries
console.log(bookSummaries);
