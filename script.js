let myLibrary = [
	{ title: "dharaaro xasuustood", author: "guuleed", pages: 412 },
];

function book(title, author, pages) {
	this.title = title;
	this.author = author;
	this.pages = pages;
}

function addBookToLibrary() {
	let newBook = new book(inputTitle.value, inputAuthor.value, inputPages.value);
	myLibrary.push(newBook);
	displayNewBook();

	// clear input fields after submit
	inputTitle.value = null;
	inputAuthor.value = null;
	inputPages.value = null;
}

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const submit = document.querySelector("#submit");

const libraryDisplay = document.querySelector(".library");

let errorMessage = document.createElement("span");
let fields = document.querySelector("#input-fields");

submit.addEventListener("click", () => {
	if (
		inputTitle.value.length == 0 ||
		inputAuthor.value.length == 0 ||
		inputPages.value.length == 0
	) {
		errorMessage.textContent = "all fields are required";
		fields.insertBefore(errorMessage, submit);
	} else {
		addBookToLibrary();
		fields.removeChild(errorMessage);
	}
});

function createNewBox() {
	for (let key in myLibrary) {
		let book = myLibrary[key];
		let bookbox = document.createElement("div");

		let p = document.createElement("p");
		p.classList.add("title");
		p.textContent = book.title;
		bookbox.append(p);

		let span = document.createElement("span");
		span.textContent = "by";
		bookbox.append(span);

		p = document.createElement("p");
		p.classList.add("author");
		p.textContent = book.author;
		bookbox.append(p);

		p = document.createElement("p");
		p.classList.add("pages");
		p.textContent = book.pages;
		bookbox.append(p);

		libraryDisplay.append(bookbox);
	}
}

function displayNewBook() {
	let lastBook = myLibrary[myLibrary.length - 1];
	let bookbox = document.createElement("div");

	let p = document.createElement("p");
	p.classList.add("title");
	p.textContent = lastBook.title;
	bookbox.append(p);

	let span = document.createElement("span");
	span.textContent = "by";
	bookbox.append(span);

	p = document.createElement("p");
	p.classList.add("author");
	p.textContent = lastBook.author;
	bookbox.append(p);

	p = document.createElement("p");
	p.classList.add("pages");
	p.textContent = lastBook.pages;
	bookbox.append(p);

	libraryDisplay.append(bookbox);
}

// trigger submit on Enter key
title.addEventListener("keyup", enterKey);
author.addEventListener("keyup", enterKey);
pages.addEventListener("keyup", enterKey);
function enterKey(event) {
	if (event.keyCode == 13) submit.click();
}

createNewBox();
