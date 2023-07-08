// function Player(name , age ) {
//     this.name=name;
//     this.age=age;    
// }
// const Player1 = new Player("Sumit",20);
// console.log(Player1.name);

// const Player2 = new Player("Shubham" , 19);
// console.log(Player2.age);


function book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    
    this.info = () => {
         const readstat = this.read ? "read" : "not read yet";
         return `"${this.title}" by "${this.author}" of ${this.pages} pages and status = ${readstat} . `;
    }
}

const Book1= new book("This is not your story", "Miraya", "200", "Not read yet");
// console.log(Book1.info());
// console.log(Book1.info());

book.prototype.greet = () => {
    console.log(`Hello i am book ... " ${this.book} "`);
}

// console.log(Book1.greet());

let library = ["MonkWhoSoldHisFerrari","TheSubtleArt"];
console.log(library);
function addBookToLibrary(b){
    library.push(b)
}


function about(){
    var About = "As part of my learning journey with The Odin Project, I decided to create a library website. Following the step-by-step instructions and guidelines provided by The Odin Project, I embarked on this project to apply and enhance my understanding of various programming concepts and  functions." +

    "Throughout the process, I learned how to structure a web page using HTML and style it using CSS. I created a basic navbar to enable easy navigation between different sections of the website. By using HTML lists and anchor tags, I implemented the navigation links for the home, about, services, and contact pages." + 
    
    "To make the website more interactive, I delved into JavaScript and incorporated various functions. For instance, I developed a functionality to display books in the library. By utilizing JavaScript arrays and objects, I stored book information such as title, author, and status. Using JavaScript DOM manipulation, I dynamically generated HTML elements to showcase the books on the website." +
    
    "Furthermore, I implemented functions to add new books to the library and update their status (whether they are read or not). I also integrated event listeners to handle user interactions, such as clicking on a book to toggle its status or removing a book from the library."+
    
    "By following The Odin Project's curriculum and working on this library website, I gained a deeper understanding of HTML, CSS, and JavaScript. I honed my skills in structuring web pages, styling them, and implementing interactive features using JavaScript functions. This project provided a hands-on experience that allowed me to apply the knowledge I acquired and solidify my understanding of web development concepts."
    alert(About);
}

function viewBooks(){
    alert(`The Availiable Books are ${Book1.info()}`);
}