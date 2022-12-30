// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav");
// const navLink = document.querySelectorAll(".nav-link");

let hamburgerDisplay = false;

// hamburger.addEventListener("click", mobileMenu);
// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }

function revealHamburgerNav() {
    let hamNav = document.getElementById("hamburger-nav");
    if (!hamburgerDisplay) {
        hamNav.style.display = "unset"; 
    } else {
        hamNav.style.display = "none";
    }
    hamburgerDisplay = !hamburgerDisplay;
}