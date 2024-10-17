$(document).ready(function() {
    // Sample quotes
    const quotes = [
        {
            quote: "The best way to predict the future is to invent it.",
            author: "Alan Kay"
        },
        {
            quote: "Life is 10% what happens to us and 90% how we react to it.",
            author: "Charles R. Swindoll"
        },
        {
            quote: "Your time is limited, so don't waste it living someone else's life.",
            author: "Steve Jobs"
        },
        {
            quote: "You miss 100% of the shots you don’t take.",
            author: "Wayne Gretzky"
        },
        {
            quote: "Whether you think you can or you think you can’t, you’re right.",
            author: "Henry Ford"
        },
        {
            quote: "Strive not to be a success, but rather to be of value.",
            author: "Albert Einstein"
        }
    ];

    // Function to get a random quote
    function getRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    }

    // Event listener for new quote button
    $('#new-quote').click(function() {
        const randomQuote = getRandomQuote();
        
        // Update the DOM with the new quote
        $('#quote-text').fadeOut(300, function() {
            $(this).text(`"${randomQuote.quote}"`).fadeIn(300);
        });

        $('#quote-author').fadeOut(300, function() {
            $(this).text(`- ${randomQuote.author}`).fadeIn(300);
        });

        // Update tweet link
        const tweetUrl = `https://twitter.com/intent/tweet?text="${randomQuote.quote}" - ${randomQuote.author}`;
        $('#tweet-quote').attr('href', tweetUrl);
    });

    // Load the first quote when the page loads
    $('#new-quote').click();
});
