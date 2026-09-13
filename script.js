// =========================================
// MOBILE NAVIGATION
// =========================================

// Select the menu button
const menuButton = document.querySelector(".menu-button");

// Select the navigation links container
const navLinks = document.querySelector(".nav-links");


// Open and close the mobile menu
menuButton.addEventListener("click", () => {

    const menuIsOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute(
        "aria-expanded",
        menuIsOpen
    );
});


// Close the menu when a navigation link is clicked
const navigationItems = document.querySelectorAll(".nav-links a");

navigationItems.forEach((item) => {

    item.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );
    });
});


// =========================================
// AUTOMATIC FOOTER YEAR
// =========================================

// Get the current year
const currentYear = new Date().getFullYear();

// Display the year in the footer
document.getElementById("year").textContent = currentYear;