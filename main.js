
  function about() {
    var aboutText = "As part of my learning journey with The Odin Project, I decided to create a library website. Following the step-by-step instructions and guidelines provided by The Odin Project, I embarked on this project to apply and enhance my understanding of various programming concepts and functions." +

      "Throughout the process, I learned how to structure a web page using HTML and style it using CSS. I created a basic navbar to enable easy navigation between different sections of the website. By using HTML lists and anchor tags, I implemented the navigation links for the home, about, services, and contact pages." +

      "To make the website more interactive, I delved into JavaScript and incorporated various functions. For instance, I developed functionality to display books in the library. By utilizing JavaScript arrays and objects, I stored book information such as title, author, and status. Using JavaScript DOM manipulation, I dynamically generated HTML elements to showcase the books on the website." +

      "Furthermore, I implemented functions to add new books to the library and update their status (whether they are read or not). I also integrated event listeners to handle user interactions, such as clicking on a book to toggle its status or removing a book from the library." +

      "By following The Odin Project's curriculum and working on this library website, I gained a deeper understanding of HTML, CSS, and JavaScript. I honed my skills in structuring web pages, styling them, and implementing interactive features using JavaScript functions. This project provided a hands-on experience that allowed me to apply the knowledge I acquired and solidify my understanding of web development concepts.";
    alert(aboutText);
  

  function viewBooks() {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    let bookList = "";
    for (let i = 0; i < library.length; i++) {
      bookList += library[i].info() + "\n";
    }
    alert("The Available Books are:\n" + bookList);
  }

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  
    this.info = function() {
      const readStatus = this.read ? "read" : "not read yet";
      return `"${this.title}" by "${this.author}" of ${this.pages} pages and status = ${readStatus}`;
    };
  }

  function addBookToLibrary(b) {
    let library = JSON.parse(localStorage.getItem("library")) || [];
    library.push(b);
    localStorage.setItem("library", JSON.stringify(library));
  }

  const book1 = new Book("Title 1", "Author 1", 200, true);
  const book2 = new Book("Title 2", "Author 2", 300, false);
  addBookToLibrary(book1);
  addBookToLibrary(book2);

  let form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let name1 = document.getElementById("nameofbook").value;
      let author1 = document.getElementById("nameofauthor").value;
      let pages = document.getElementById("noofpages").value;
      let reads = document.getElementById("readstatus").value;

      addBookToLibrary(new Book(name1, author1, pages, reads));

      alert("Book Added");
      form.reset();
    });
  }

  let library = JSON.parse(localStorage.getItem("library")) || [];
  let showcase = document.getElementById("show");
  if (showcase) {
    let bookList = "";
    for (let i = 0; i < library.length; i++) {
      bookList += library[i].info() + "<br>";
    }
    showcase.innerHTML = bookList;
  }
};


function displayBooks() {
  let library = JSON.parse(localStorage.getItem("library")) || [];
  let bookList = "";
  
  for (let i = 0; i < library.length; i++) {
    let book = library[i];
    bookList += book.info() + "<br>";
  }
  
  let showcase = document.getElementById("show");
  if (showcase) {
    showcase.innerHTML = bookList;
  }
}

displayBooks();
