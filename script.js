const newButton = document.querySelector("#new-button");
const submitButton = document.querySelector("#submit-button");
const dialog = document.querySelector(".dialog");
const form = document.querySelector(".new-book-form");
const bookContainer = document.querySelector(".cards-container");

let library = [];

submitButton.addEventListener("click", () => {
	formData = new FormData(form);

	addBook(formData);
});

newButton.addEventListener("click", () => {
	dialog.showModal();
});

function addBook(formData) {
	book = new Object();

	book.title = formData.get("book-title");
	book.author = formData.get("author-name");
	book.date = formData.get("published-date");
	book.pages = formData.get("pages");
	book.haveRead = formData.get("have-read");
	book.isFavorite = formData.get("favorite");

	library.push(book);
}

function buildCard(book) {
	const card = document.createElement("div");
	card.className = "card";

	const cardTitle = document.createElement("div");
	const cardAuthor = document.createElement("div");
	const cardDate = document.createElement("div");
	const cardPages = document.createElement("div");
	const cardButtons = document.createElement("div");

	cardTitle.classList.add("card-text", "title");
	cardTitle.textContent = `Title: ${book.title}`;
	cardAuthor.classList.add("card-text", "author");
	cardDate.classList.add("card-text", "date-published");
	cardPages.classList.add("card-text", "pages");
	cardButtons.className = "card-buttons";

	const markReadButton = document.createElement("button");
	const markFavoriteButton = document.createElement("button");

	markReadButton.className = "mark-read";
	markFavoriteButton.className = "mark-favorite";

	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	card.appendChild(cardDate);
	card.appendChild(cardPages);
	card.appendChild(cardButtons);

	cardButtons.appendChild(markReadButton);
	cardButtons.appendChild(markFavoriteButton);

	bookContainer.appendChild(card);
}
