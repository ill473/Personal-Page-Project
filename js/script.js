window.onscroll = function() {myFunction()};
//Get the navbar element
var navbar = document.getElementById("navbar");

//Get the offset position of the navabar -  when it's scrolled
var sticky = navbar.offsetTop;

//Add sticky class to navbar when it's scrolled. Remove it once user leaves scroll position

function myFunction() {
    if(window.pageYOffset >= sticky){
       navbar.classList.add("sticky") 
    } else {
        navbar.classList.remove("sticky");
    }
}