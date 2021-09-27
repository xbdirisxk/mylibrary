let myLibrary = [
	{ title: "dharaaro xasuustood", author: "guuleed", pages: 412 },
];

function book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibrary() {
	let book1 = new book(inputTitle, inputAuthor, inputPages);
	myLibrary.push(book1);
	addLastBook();
}

const inputTitle = document.querySelector("#title").value;
const inputAuthor = document.querySelector("#author").value;
const inputPages = document.querySelector("#pages").value;
const submit = document.querySelector("#submit");

const container = document.querySelector(".container");

submit.addEventListener("click", addBookToLibrary);

function createNewBox() {
	for (let key in myLibrary) {
		let book = myLibrary[key];
		let bookbox = document.createElement("div");

		let p = document.createElement("p");
		p.textContent = book.title;
		bookbox.append(p);

		p = document.createElement("p");
		p.textContent = book.author;
		bookbox.append(p);

		p = document.createElement("p");
		p.textContent = book.pages;
		bookbox.append(p);

		container.append(bookbox);
	}
}

function addLastBook() {
	let lastBook = myLibrary[myLibrary.length - 1];
	let bookbox = document.createElement("div");

	for (let key in lastBook) {
		let p = document.createElement("p");
		p.textContent = lastBook[key];
		bookbox.append(p);
	}
	container.append(bookbox);
}

createNewBox();
