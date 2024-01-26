const quotes = [
  {
    quote: "The first duty of love is to listen.",
    author: "Paul Tillich",
  },
  {
    quote: "Dream as if you'll live forever. Live as if you'll die today.",
    author: "James Dean",
  },
  {
    quote: "Education is a progressive discovery of our own ignorance.",
    author: "Will Durant",
  },
  {
    quote: "You create your opportunities by asking for them.",
    author: "Patty Hansen",
  },
  {
    quote: " Success isn't permanent, and failure isn't fatal.",
    author: "Mike Ditka",
  },
  {
    quote:
      "If we take care of the moments, the years will take care of themselves.",
    author: "Maria Edgeworth",
  },
  {
    quote: "Great deeds are usually wrought at great risks.",
    author: "Herodotus",
  },
  {
    quote: "The gratification comes in the doing, not in the results.",
    author: "James Dean",
  },
  {
    quote: " Respect yourself and others will respect you.",
    author: "Confucius",
  },
  {
    quote: "Genius is nothing but a great capacity for patience.",
    author: "Buffon",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
