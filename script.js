function hideAllSections() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('business-section').style.display = 'none';
    document.getElementById('merchants-section').style.display = 'none';
    document.getElementById('career-section').style.display = 'none';
    document.getElementById('download-section').style.display = 'none';
}

// JavaScript to toggle the Home section
document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    hideAllSections();
    document.getElementById('home-section').style.display = 'block'; // Show the section
});

// JavaScript to toggle the About Us section
document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    hideAllSections();
    document.getElementById('about-section').style.display = 'block'; // Show the section
});

// JavaScript to toggle the Business section
document.getElementById('business-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    hideAllSections();
    document.getElementById('business-section').style.display = 'block'; // Show the section
});

// JavaScript to toggle the Merchants section
document.getElementById('merchants-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    hideAllSections();
    document.getElementById('merchants-section').style.display = 'block'; // Show the section
});

// JavaScript to toggle the Career section
document.getElementById('career-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    hideAllSections();
    document.getElementById('career-section').style.display = 'block'; // Show the section
});

// JavaScript to toggle the Download App section
document.getElementById('download-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor click behavior
    hideAllSections();
    document.getElementById('download-section').style.display = 'block'; // Show the section
});

// Footer Links Functionality
document.getElementById('footer-home-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('home-section').style.display = 'block'; // Show the section
});

document.getElementById('footer-business-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('business-section').style.display = 'block'; // Show the section
});

document.getElementById('footer-merchants-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('merchants-section').style.display = 'block'; // Show the section
});

document.getElementById('footer-career-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('career-section').style.display = 'block'; // Show the section
});

document.getElementById('footer-download-link').addEventListener('click', function(event) {
    event.preventDefault();
    hideAllSections();
    document.getElementById('download-section').style.display = 'block'; // Show the section
});
