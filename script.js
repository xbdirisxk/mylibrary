let myLibrary = [
	{ title: "dharaaro xasuustood", author: "guuleed", pages: 412, read: true },
	{ title: "book2", author: "jama geele", pages: 112, read: false },
	{ title: "halhays", author: "warfaa", pages: 520, read: true },
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
	/* myLibrary.push(book1);
	myLibrary.push(book2); */
}

// addBookToLibrary();

// DOM
const container = document.querySelector(".container");

function createNewBox() {
	for (let key in myLibrary) {
		let bookbox = document.createElement("div");
		let book = myLibrary[key];

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

createNewBox();
