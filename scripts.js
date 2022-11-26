//toggle hamburger in JS

var navLinks = document.getElementById("nav-links")

function hideMenu() {
    navLinks.style.right = "-60vw"
}

function showMenu() {
    navLinks.style.right = "0px"
}