document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const slide = document.getElementById('slide');
    const body = document.body;
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️ Light Mode'
    }

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        const isDark = body.classList.contains('dark-theme');

        themeToggle.textContent = isDark ? '☀️ Light Mode' : '🌙 Dark Mode'

        localStorage.setItem('theme', isDark ? 'dark' : 'light');

    });

    let slides_array = ["images/slide1.png", "images/slide2.png", "images/slide3.png", "images/slide4.png", "images/slide5.png"]

    const myInterval = setInterval(slideshowTimer, 4000);

    let slideIndex = 0;
    function slideshowTimer() {
        if (slideIndex < slides_array.length-1) {
            slideIndex ++;
        } else {
            slideIndex = 0;
        }
        slide.src = slides_array[slideIndex];


    }


    fetch("https://dummyjson.com/quotes/random")
    .then((results) => results.json())
    .then((data) => {
        quoteText.innerHTML = "\"" + data.quote + "\"";
        quoteAuthor.innerHTML = " - " + data.author;
    ;
    })
    .catch((error) => {
        console.error("Quote load failed:", error);
        document.getElementById("quote").innerText = "Could not load quote.";
    });


});


