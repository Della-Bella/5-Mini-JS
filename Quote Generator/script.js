const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. - Benjamin Franklin",
    "It is during our darkest moments that we must focus to see the light. - Aristotle",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller",
    "Do not go where the path may lead, go instead where there is no path and leave a trail. - Ralph Waldo Emerson",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey"
];


const usedIndexes = new Set(); // create set for the quotes
const quoteElement = document.getElementById("quote");// get the p tag it will be the quotes

function generateQuote() {
    if (usedIndexes.size >= quotes.length) { 
        usedIndexes.clear();
    }

    while (true) { // not loop infinite
        const randomIdx = Math.floor(Math.random() * quotes.length); // generate a Random quote

        if (usedIndexes.has(randomIdx)) continue;  

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break; // not loop infinite
    }
}