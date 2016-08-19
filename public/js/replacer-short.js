var textPart1 = document.getElementsByClassName("part1");
var textPart2 = document.getElementsByClassName("part2");
var textPart3 = document.getElementsByClassName("part3");

function showText() {
    for (var a = 0; a < textPart1.length; a++) {
        setTimeout(function (hideText2) {
            console.log("hide text part 1");
            hideText2.style.visibility = 'hidden';
        }, 3000, textPart1[a]);
    }
    for (var b = 0; b < textPart2.length; b++) {
        setTimeout(function (showText2) {
            console.log("show text part 2");
            showText2.style.visibility = 'visible';
        }, 3000, textPart2[b]);
    }
    for (var c = 0; c < textPart2.length; c++) {
        setTimeout(function (hideText3) {
            console.log("hide text part 1");
            hideText3.style.visibility = 'hidden';
        }, 7000, textPart2[c]);
    }
    for (var d = 0; d < textPart3.length; d++) {
        setTimeout(function (showText3) {
            console.log("show text part 3");
            showText3.style.visibility = 'visible';
        }, 7000, textPart3[d]);
    }
}
window.onload = showText();

var timer = document.getElementsByClassName('timer');

function timed1(){
    for (var i = 0; i < timer.length; i++) {
        setTimeout(function (timer2) {
            timer2.style.visibility = 'visible';
        }, 7000, timer[i]);
    }
}
window.onload = timed1();
