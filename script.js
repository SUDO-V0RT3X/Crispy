//toggle hamburger in JS

var navLinks = document.getElementById("nav-links")

function hideMenu() {
    navLinks.style.right = "-200px"
}

function showMenu() {
    navLinks.style.right = "0px"
}

var slider_content = document.getElementById('box')

//array of images
var image = ['CheddaR', 'Cheese_Onion', 'Masala', 'Mexican Chilli', 'Roast Chicken', 'Salt_Vinegar', 'Smoked Beef', 'Sweet Chilli Chutney', 'Tomato Sauce']
var i = image.length

//next slide 
function nextImage(){
    if (i > image.length) {
        i = i +1
    }
    else {
        i = 1
    }
    slider_content.innerHTML = "<img src=images/" + image [i -1] + ".jpg>"
}
