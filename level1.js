/**
 * Created by Michaëlya on 2016-08-09.
 */
function enterCosmo() {
    swal( {
        title: "",
        text: 'The page starts rippling and fluorescent colors start spilling out as you are pulled into the flyer. You have entered the World of Cosmo...',
        type: "",
        confirmButtonText: "Continue"
    });
}

// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");
// Close Popup Event
closePopup.onclick = function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';

};
// Show Overlay and Popup
button.onclick = function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
}