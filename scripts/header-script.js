let hamburgerDisplay = false;

function revealHamburgerNav() {
    let hamNav = document.getElementById("hamburger-nav");
    if (!hamburgerDisplay) {
        hamNav.style.display = "unset"; 
    } else {
        hamNav.style.display = "none";
    }
    hamburgerDisplay = !hamburgerDisplay;
}

function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}