
// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
// var popupAnimation = document.getElementById("popup-animation");
var button = document.getElementById("popupbutton");

// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
};

// Show Overlay and Popup
button.onclick = function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
};