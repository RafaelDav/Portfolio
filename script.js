// script.js

document.addEventListener("DOMContentLoaded", function() {
  // Select all navigation links
  const navLinks = document.querySelectorAll('nav a');

  // Add event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      // Optional: Add a confirmation dialog before navigation
      const userConfirmed = confirm("Are you sure you want to navigate to this page?");
      if (!userConfirmed) {
        event.preventDefault(); // Prevent the default navigation
      }
    });
  });
});
