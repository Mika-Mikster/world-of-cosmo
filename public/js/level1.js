/**
 * Created by Michaëlya on 2016-08-09.
 */

// Initialize Variables
var closePopup = document.getElementById("popupclose");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var button = document.getElementById("button");
var displayA = document.getElementById("displayA");
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

// window.onload = function dialogThreeA() {
//     document.getElementById("typed-strings").innerHTML = "Paragraph changed 1.";
// };
//
// window.onload = function dialogThreeB() {
//     document.getElementById("changeable").innerHTML = "Paragraph changed 2.";
// };
//
// window.onload = function dialogThreeC() {
//     document.getElementById("changeable").innerHTML = "Paragraph changed 3.";
// };
//