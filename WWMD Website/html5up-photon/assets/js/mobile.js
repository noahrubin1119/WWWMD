// These are limits for at how many pixels changes to the site happen
const MOBILE_LIMIT = 950; // When the screen is this size or smaller, it switches to mobile
const MORE_LIMIT = 420; // When the screen is this size or smaller, tabs are moved into the "more" tab

var body = document.getElementsByTagName("body")[0];
var buttons = document.getElementsByClassName("button");
var expanded = false; // true when the "more" button is clicked

document.getElementsByClassName("navbar")[0].innerHTML =
  '<ul>' +
    
    '<a href="https://www.cancode.us/contribute" class="button left">Contribute</a>' +
    '<a class="button" id="burgerButton" onclick="expand()">' +
      '<img src="https://cancode.us/Images/menu_closed.png" id="burger_closed">' +
      '<img src="https://cancode.us/Images/menu_hover.png" id="burger_hover">' +
    '</a>' +
    '<a href="https://www.cancode.us/photos" class="button">Photos</a>' +
    '<a href="https://www.cancode.us/sites" class="button">Sites</a>' +
    '<a href="https://www.cancode.us/sponsors" class="button">Sponsors</a>' +
  '</ul>' +
  '<div id="hiddenNavbar"></div>';
document.getElementById("hiddenNavbar").innerHTML =
  '<a href="https://www.cancode.us/contribute" class="button">Contribute</a>' +
  '<a href="https://www.cancode.us/student" class="button">Student</a>' +
  '<a href="https://www.cancode.us/parent" class="button">Parent</a>' +
  '<a href="https://www.cancode.us/team" class="button">Team</a>' +
  '<a href="https://www.cancode.us/sponsors" class="button">Sponsors</a>' +
  '<a href="https://www.cancode.us/sites" class="button">Sites</a>';



function expand() {
  if (expanded) {
    expanded = false;
    buttons[2].innerHTML = '<img src="https://cancode.us/Images/menu_closed.png" id="burger_closed">' +
                           '<img src="https://cancode.us/Images/menu_hover.png" id="burger_hover">';
    document.getElementById("hiddenNavbar").style.display = "none";
  } else {
    expanded = true;
    buttons[2].innerHTML = '<img src="https://cancode.us/Images/menu_open.png" id="burger_closed">' +
                           '<img src="https://cancode.us/Images/menu_open_hover.png" id="burger_hover">';
    document.getElementById("hiddenNavbar").style.display = "flex";
  }
}

function mobileFormat(event) // Function that is run every time the site is resized to work with the limits explained above
{
  if (document.documentElement.clientWidth <= MOBILE_LIMIT) {
    body.className = "mobile";
  } else {
    body.className = '';
  }
  if (document.documentElement.clientWidth <= MORE_LIMIT) {
    buttons[4].style.display = "none";
    buttons[5].style.display = "none";
    buttons[10].style.display = "block";
    buttons[11].style.display = "block";
  } else {
    buttons[4].style.display = "block";
    buttons[5].style.display = "block";
    buttons[10].style.display = "none";
    buttons[11].style.display = "none";
  }
}
var i = 1;

mobileFormat(null); // Format the screen based on screen size immediately
window.addEventListener('resize', mobileFormat); // Then continue to format the screen on resize