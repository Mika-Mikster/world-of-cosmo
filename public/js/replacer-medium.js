var textPart1 = document.getElementsByClassName("part1");
var textPart2 = document.getElementsByClassName("part2");
var textPart3 = document.getElementsByClassName("part3");
var textPart4 = document.getElementsByClassName("part4");

function showText() {
    for (var a = 0; a < textPart1.length; a++) {
        setTimeout(function (hideText1) {
            console.log("hide text part 1");
            hideText1.style.visibility = 'hidden';
        }, 3000, textPart1[a]);
    }
    for (var b = 0; b < textPart2.length; b++) {
        setTimeout(function (showText2) {
            console.log("show text part 2");
            showText2.style.visibility = 'visible';
        }, 3000, textPart2[b]);
    }
    for (var c = 0; c < textPart2.length; c++) {
        setTimeout(function (hideText2) {
            console.log("hide text part 2");
            hideText2.style.visibility = 'hidden';
        }, 7000, textPart2[c]);
    }
    for (var d = 0; d < textPart3.length; d++) {
        setTimeout(function (showText3) {
            console.log("show text part 3");
            showText3.style.visibility = 'visible';
        }, 7000, textPart3[d]);
    }
    for (var e = 0; e < textPart3.length; e++) {
        setTimeout(function (hideText3) {
            console.log("hide text part 3");
            hideText3.style.visibility = 'hidden';
        }, 10000, textPart3[e]);
    }
    for (var f = 0; f < textPart4.length; f++) {
        setTimeout(function (showText4) {
            console.log("show text part 2");
            showText4.style.visibility = 'visible';
        }, 10000, textPart4[f]);
    }
    for (var g = 0; g < textPart4.length; e++) {
        setTimeout(function (hideText4) {
            console.log("hide text part 4");
            hideText4.style.visibility = 'hidden';
        }, 13000, textPart4[g]);
    }
}
window.onload = showText();

var timer = document.getElementsByClassName('timer');

function timed1(){
    for (var i = 0; i < timer.length; i++) {
        setTimeout(function (timer2) {
            timer2.style.visibility = 'visible';
        }, 13000, timer[i]);
    }
}
window.onload = timed1();