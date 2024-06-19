let myLibrary = [];


let quoteBank = [
  "“A reader lives a thousand lives before he dies . . . The man who never reads lives only one.” - George R.R. Martin",
  "“You can never get a cup of tea large enough or a book long enough to suit me.” - C.S. Lewis",
  "“You don’t have to burn books to destroy a culture. Just get people to stop reading them.” - Ray Bradbury",
  "“I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.” - Groucho Marx",
  "“I have always imagined that Paradise will be a kind of library.” - Jorge Luis Borges",
  "“Books are a uniquely portable magic.” - Stephen King",
  "“There is no friend as loyal as a book.” - Ernest Hemingway",
  "“So many books, so little time.” - Frank Zappa",
  "“A room without books is like a body without a soul.” - Marcus Tullius Cicero",
  "“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.” - Haruki Murakami",
  "“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.” - Jane Austen",
  "“Good friends, good books, and a sleepy conscience: this is the ideal life.” - Mark Twain",
  "“I cannot live without books.” - Thomas Jefferson",
  "“Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.” - Charles William Eliot",
  "“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” - Dr. Seuss",
  "“Books are the mirrors of the soul.” - Virginia Woolf",
  "“The world was hers for the reading.” - Betty Smith",
  "“I’ll be in the Library…” - Arnold Lobel"
]


document.querySelector('#quote').innerHTML = quoteBank[Math.floor(Math.random() * quoteBank.length)];


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = Math.random().toString(36);

}

function addBookToLibrary() {
  // do stuff here
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const book = new Book(title, author, pages, read);

  myLibrary.push(book);
  console.log(book);
}

function render() {
  const library = document.querySelector('#Library');
  library.innerHTML = '';
  for (let i=0; i<myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookDiv = document.createElement('div');
    if (book.read) {
    bookDiv.style.backgroundColor = 'lightgreen';
    bookDiv.innerHTML = `
    <p class="titleCard">${book.title}</p>
    <p class="authorCard"> by ${book.author}</p>

    <p class="pagesCard">${book.pages}</p>
    <p class="readCard">Read</p>
    <button class="deleteBookButton" id = '${book.id}'>Delete</button>
    
    `;
    } else {
    bookDiv.style.backgroundColor = '#ffcccc';
    bookDiv.innerHTML = `
    <p class="titleCard">${book.title}</p>
    <p class="authorCard"> by ${book.author}</p>

    <p class="pagesCard">${book.pages}</p>
    <p class="readCard">Not Read</p>
    <button class="deleteBookButton" id = '${book.id}'>Delete</button>
    
    `;
    }
    
    library.appendChild(bookDiv);
  }
  document.querySelectorAll('.deleteBookButton').forEach(button => {
    button.addEventListener('click', () => {
      const bookTitle = button.id;
      deleteBook(bookTitle);
      render();
    });
  });
  
  

  
}

function deleteBook(id) {
  myLibrary = myLibrary.filter(book => book.id !== id);
}

const dialog = document.querySelector("dialog");


const newBookButton = document.querySelector('#newBookButton');

newBookButton.addEventListener('click', () => {
  
  dialog.showModal();
  document.getElementById('newBookForm').reset();
});

document.querySelector('#newBookForm').addEventListener("submit", (e) => {
  e.preventDefault();
  addBookToLibrary();
  dialog.close();
  //document.querySelector('#newBookForm').style.display = 'none';
  render();


});

document.querySelector('#cancelButton').addEventListener('click', () => {
  dialog.close();
});



// polyfill





