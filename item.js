// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var scrollmenu = document.getElementById("scrollmenu");

// Get the offset position of the navbar
var sticky = scrollmenu.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    scrollmenu.classList.add("sticky")
  } else {
    scrollmenu.classList.remove("sticky");
  }
}