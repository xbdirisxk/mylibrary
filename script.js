let myLibrary = [
	{
		title: "Siinlay",
		author: "yuusuf shaacir",
		pages: 412,
	},
	{
		title: "How to win friends and influence people",
		author: "del carnigue",
		pages: 512,
	},
];

function book(title, author, pages) {
	return { title, author, pages };
}

function addBookToLibrary() {
	let newBook = book(inputTitle.value, inputAuthor.value, inputPages.value);
	myLibrary.push(newBook);
	displayNewBook();

	// clear input fields after submit
	inputTitle.value = null;
	inputAuthor.value = null;
	inputPages.value = null;
}

// UI (DOM)

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
		if (errorMessage.firstChild) fields.removeChild(errorMessage);
	}
});

// create book display elements
let bookbox;
function createNewBox() {
	for (let key in myLibrary) {
		let book = myLibrary[key];
		bookbox = document.createElement("div");

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
		p.textContent = "Pages: " + book.pages;
		bookbox.append(p);

		bookInfo();
		// bookbox.addEventListener(data-index, )

		libraryDisplay.append(bookbox);
	}
}
let removeButtons; // remove button variable
function displayNewBook() {
	let lastBook = myLibrary[myLibrary.length - 1];
	bookbox = document.createElement("div");

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
	p.textContent = "Pages: " + lastBook.pages;
	bookbox.append(p);

	bookInfo();

	libraryDisplay.append(bookbox);
}

function bookInfo() {
	let div = document.createElement("div");
	div.classList.add("book-info");

	let button = document.createElement("button");
	button.textContent = "remove";
	div.append(button);

	let insideDiv = document.createElement("div");
	insideDiv.classList.add("readed");
	div.append(insideDiv);

	let read = document.createElement("span");
	read.textContent = "read";
	insideDiv.append(read);

	let label = document.createElement("label");
	label.classList.add("switch");
	insideDiv.append(label);

	let input = document.createElement("input");
	input.setAttribute("type", "checkbox");
	label.append(input);

	let round = document.createElement("span");
	round.classList.add("slider", "round");
	label.append(round);

	bookbox.append(div);
	////////////////////////////////
	removeButtons = document.querySelectorAll(".book-info>button");
}

createNewBox(); // display books in the my library array
// trigger submit on Enter key
title.addEventListener("keyup", enterKey);
author.addEventListener("keyup", enterKey);
pages.addEventListener("keyup", enterKey);
function enterKey(event) {
	if (event.keyCode == 13) submit.click();
}

// remove book from library -- in development...
removeButtons = document.querySelectorAll(".book-info>button");
removeButtons.forEach(removeBook);
function removeBook(book) {
	book.addEventListener("click", () => {
		let title = book.parentElement.parentElement.childNodes[0];
		console.log(title);
	});
}

// local storage

function saveInLocal() {
	localStorage.setItem("library", myLibrary);
}
