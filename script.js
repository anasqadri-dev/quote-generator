const api_url = "https://api.api-ninjas.com/v2/randomquotes";
const header = {
    "key" : "X-Api-Key",
    "value" : "8pf9S9oBAYEX8ZUFBRhVoqxOlqUqlXXODTzfscbe"
};
const quote = document.getElementById("quote");
const author = document.getElementById("author");
async function getQuote(api_url, header){
    const response = await fetch(api_url, {
        method: "GET",
        headers: {
            [header.key]: header.value
        }
    });
    const data = await response.json();
    quote.innerHTML = data[0].quote;
    author.innerHTML = data[0].author;
} 
getQuote(api_url, header);

function tweetQuote() {
    const currentQuote = document.getElementById("quote").innerText;
    const currentAuthor = document.getElementById("author").innerText;
    
    const tweetText = `"${currentQuote}" — ${currentAuthor}`;
    
    const url = `https://x.com/intent/post?text=${encodeURIComponent(tweetText)}`;
    
    window.open(url, "_blank", "width=600,height=500");
}