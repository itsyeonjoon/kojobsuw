let hamburgerDisplay = false;

/* 
* When in mobile mode, reveals nav items for the website if 
* its display is none, and vice versa.
* 
* parameters: none
* return value: none
*/
function revealHamburgerNav() {
    let hamNav = document.getElementById("hamburger-nav");
    if (!hamburgerDisplay) {
        hamNav.style.display = "unset"; 
    } else {
        hamNav.style.display = "none";
    }
    hamburgerDisplay = !hamburgerDisplay;
}


/* 
* Scrolls the page to the bottom when clicked
* 
* parameters: none
* return value: none
*/
function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}