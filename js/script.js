/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
 ***/

const quotes = [
  {
    quote:
      "Quality is more important than quantity. One home run is much better than two doubles.",
    source: "Steve Jobs",
    citation: "Motivating Thoughts of Steve Jobs",
    year: "2009",
    occupation: "Entrepreneur",
  },
  {
    quote:
      "All our dreams can come true, if we have the courage to pursue them.",
    source: "Walt Disney",
    citation: "",
    year: "",
    occupation: "Entrepreneur",
  },
  {
    quote:
      "The man who will get up will be helped up; and the man who will not get up will be allowed to stay down.",
    source: "Frederick Douglass",
    citation: "Great Speeches by Frederick Douglass",
    year: "",
    occupation: "Abolitionist",
  },
  {
    quote: "Your most unhappy customers are your greatest source of learning.",
    source: "Bill Gates",
    citation: "Business @ The Speed of Thought",
    year: "1999",
    occupation: "Software Developer",
  },
  {
    quote: "There can be no deep disappointment where there is not deep love.",
    source: "Martin Luther King, Jr.",
    citation: "Letter from a Birmingham Jail",
    year: "1963",
    occupation: "Minister",
  },
];

/***
 * `getRandomQuote` function
 ***/

function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length); //Generate Random Number from the length of Array
  return quotes[randomNumber];
}

/***
 * `Color Change` function
 ***/

function colorChange() {
  const body = document.querySelector("body"); // Select Body Element
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random Color
  body.style.backgroundColor = randomColor; // Change Style
}

/***
 * `printQuote` function
 ***/

function printQuote() {
  //
  let randomQuote = getRandomQuote(); // Assign Random Quote
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}
  `;

  // Checks if Citation is empty string
  if (randomQuote.citation !== "") {
    html += `<span class="citation">${randomQuote.citation}</span>`;
  }

  // Checks if Year is empty String
  if (randomQuote.year !== "") {
    html += `<span class="year">${randomQuote.year}</span>`;
  }
  // Occupation Tag Inside Quote
  if (randomQuote.occupation !== "") {
    html += `<span class="occupation">| ${randomQuote.occupation}</span></p>`;
  }
  document.getElementById("quote-box").innerHTML = html;

  //Random Background Colors
  colorChange();
}

//Set Interval for Quote to Change Every 10 seconds
setInterval(() => {
  printQuote();
}, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/

document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false);
