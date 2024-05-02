document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const hamburgerMenu = document.querySelector('.hamburger-menu');

    hamburgerMenu.addEventListener('click', function () {
        navbar.classList.toggle('active');
    });
});

// Add scroll event listener
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrolled = window.scrollY > 0; // Check if scrolled down

    // Add or remove 'scrolled' class based on scroll position
    if (scrolled) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    overviewTooltips.forEach(function(overviewTooltip) {
        overviewTooltip.addEventListener('click', function() {
            const productLink = overviewTooltip.closest('.product').querySelector('a').getAttribute('href');
            window.location.href = productLink;
        });
    });
});

function showPopup() {
    var popup = document.getElementById("thank-you-popup");
    popup.style.display = "block";
    setTimeout(function () {
        popup.style.display = "none";
    }, 5000); // Adjust the timeout value (in milliseconds) as needed
}