const quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "A room without books is like a body without a soul.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on."
]
const authors = [
    "Oscar Wilde",
    "Marilyn Monroe",
    "Albert Einstein",
    "Marcus Tullius Cicero",
    "Bernard M. Baruch",
    "Mahatma Gandhi",
    "Robert Frost"
]
const qt = document.querySelector(".quoteText");
const at = document.querySelector(".authorText");
const gb = document.querySelector(".generatebtn");
function generateQuotes() {
    var randInd = Math.floor(Math.random() * quotes.length);
    var randQuote = quotes[randInd];
    let randAuthor = authors[randInd];
    qt.textContent = '"' + randQuote + '"';
    at.textContent = "- " + randAuthor;
}
