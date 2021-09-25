let myLibrary = [
	{ title: "dharaaro xasuustood", author: "guuleed", pages: 412, read: true },
];

function book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary() {
	let book1 = new book("siinlay", "yuusuf", 243, true);
	let book2 = new book("hawaale waran", "hadraawi", 313, false);
	myLibrary.push(book1);
	myLibrary.push(book2);
}

addBookToLibrary();

// DOM
let container = document.querySelector(".container");
let bookbox = document.createElement("div");
let p = document.createElement("p");

container.append(bookbox);
bookbox.append(p);
