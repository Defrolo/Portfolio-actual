// Basic script file for portfolio
console.log("Portfolio script loaded.");

// Example: Smooth scrolling for navigation links (optional)
document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add more interactive features here as needed.
// For example: dynamic project loading, form validation, animations, etc.
