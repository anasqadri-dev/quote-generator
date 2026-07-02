# Quote Generator

> A vanilla JavaScript application that fetches random inspirational quotes from a public API and lets users instantly share them on X (formerly Twitter).

---

## Demo

---

## Tech Stack

| Technology       | Purpose                   |
| ---------------- | ------------------------- |
| HTML5            | Page structure            |
| CSS3             | Responsive UI and styling |
| JavaScript (ES6) | Application logic         |
| Fetch API        | HTTP requests             |
| async/await      | Asynchronous programming  |
| API Ninjas       | Random Quotes API         |
| Font Awesome     | Icons                     |

---

## Features

* Fetches a random quote from an external API
* Displays the quote and its author
* Generates a new quote with one click
* Share the current quote directly to X
* Responsive design for desktop and mobile
* Modern glassmorphism-inspired interface

---

## Project Structure

```text
quote-generator/
├── index.html
├── style.css
└── script.js
```

---

## How It Works

1. The application loads and immediately requests a random quote.
2. `fetch()` sends an HTTP GET request to the Quotes API.
3. The API key is included in the request headers.
4. `await response.json()` converts the server response into a JavaScript object.
5. The quote and author are rendered into the DOM.
6. Clicking **Post** opens X with the current quote pre-filled.

---

## Key JavaScript Concepts

* Async/Await
* Fetch API
* Working with JSON responses
* HTTP request headers
* DOM manipulation
* Template literals
* URL encoding with `encodeURIComponent()`
* Opening browser windows using `window.open()`

---

## What I Learned

* JavaScript handles API requests asynchronously.
* `await` makes asynchronous code easier to read than chained promises.
* APIs often require authentication through request headers.
* `encodeURIComponent()` prevents special characters from breaking URLs.
* Separating presentation (HTML/CSS) from logic (JavaScript) makes projects easier to maintain.

---

## Future Improvements

* Add loading animations while fetching data.
* Display error messages if the API request fails.
* Copy quote to clipboard.
* Save favorite quotes using Local Storage.
* Add category or author filtering.

---

## License

MIT
