const newButton = document.querySelector("#new-button");
const submitButton = document.querySelector("#submit-button");
const dialog = document.querySelector(".dialog");
const form = document.querySelector(".new-book-form");
const bookContainer = document.querySelector(".cards-container");

dialog.close();

let library = [];

submitButton.addEventListener("click", () => {
	if (validateForm()) {
		formData = new FormData(form);
		form.reset();
		dialog.close();
		addBook(formData);
	}
});

newButton.addEventListener("click", () => {
	dialog.showModal();
});

function validateForm() {
	var a = document.forms["Form"]["book-title"].value;
	var b = document.forms["Form"]["author-name"].value;
	var c = document.forms["Form"]["published-date"].value;
	var d = document.forms["Form"]["pages"].value;
	if (a == null || a == "" || b == null || b == "" || c == null || c == "" || d == null || d == "") {
		return false;
	} else {
		return true;
	}
}

function addBook(formData) {
	book = new Object();

	book.title = formData.get("book-title");
	book.author = formData.get("author-name");
	book.date = formData.get("published-date");
	book.pages = formData.get("pages");
	book.haveRead = formData.get("have-read");
	book.isFavorite = formData.get("favorite");

	library.push(book);
	buildCard(book);
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
	cardAuthor.textContent = `Author: ${book.author}`;
	cardDate.classList.add("card-text", "date-published");
	cardDate.textContent = `Date Published: ${book.date}`;
	cardPages.classList.add("card-text", "pages");
	cardPages.textContent = `Pages: ${book.pages}`;
	cardButtons.className = "card-buttons";

	const markReadButton = document.createElement("button");
	const markReadIcon = document.createElement("i");
	if (book.haveRead == "on") {
		markReadIcon.classList.add("fa-solid", "fa-square-check", "fa-xl");
	} else {
		markReadIcon.classList.add("fa-regular", "fa-square-check", "fa-xl");
	}
	markReadButton.addEventListener("click", () => {
		if (markReadIcon.classList.contains("fa-regular")) {
			markReadIcon.classList.replace("fa-regular", "fa-solid");
		} else {
			markReadIcon.classList.replace("fa-solid", "fa-regular");
		}
	});
	const markFavoriteButton = document.createElement("button");
	const markFavoriteIcon = document.createElement("i");
	if (book.isFavorite == "on") {
		markFavoriteIcon.classList.add("fa-solid", "fa-heart", "fa-xl");
	} else {
		markFavoriteIcon.classList.add("fa-regular", "fa-heart", "fa-xl");
	}
	markFavoriteButton.addEventListener("click", () => {
		if (markFavoriteIcon.classList.contains("fa-regular")) {
			markFavoriteIcon.classList.replace("fa-regular", "fa-solid");
		} else {
			markFavoriteIcon.classList.replace("fa-solid", "fa-regular");
		}
	});

	markReadButton.className = "mark-read";
	markFavoriteButton.className = "mark-favorite";

	card.appendChild(cardTitle);
	card.appendChild(cardAuthor);
	card.appendChild(cardDate);
	card.appendChild(cardPages);
	card.appendChild(cardButtons);

	cardButtons.appendChild(markReadButton);
	cardButtons.appendChild(markFavoriteButton);

	markReadButton.appendChild(markReadIcon);
	markFavoriteButton.appendChild(markFavoriteIcon);

	bookContainer.appendChild(card);
}
