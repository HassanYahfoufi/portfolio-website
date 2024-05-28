// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log("Document loaded and script running");

    // Example: Adding a click event to the header to change its color
    const header = document.querySelector('header');
    header.addEventListener('click', function() {
        header.style.backgroundColor = header.style.backgroundColor === 'blue' ? '#333' : 'blue';
    });

    // Example: Adding a form submission handler
    const contactForm = document.querySelector('form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });
});

