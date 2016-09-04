/**
 * Created by reiko on 23-8-2016.
 */
var dialog1 = document.getElementById('dialog1');
var dialog2 = document.getElementById('dialog2');
var dialog3 = document.getElementById('dialog3');
var dialog4 = document.getElementById('dialog4');
var timer = document.querySelectorAll('.timer');
var time;
var dialogs = [dialog1, dialog2, dialog3, dialog4];
//
//
// dialog1.classList.add('fadeIn');

// POPUP BUTTON TIMER \\
function timed () {setTimeout(function () {
    for (var i = 0; i < timer.length; i++) {
        timer[i].style.visibility = 'visible';
    }
}, time);
}

function listen() {
    for (var i = 0; i < dialogs.length; i++) {
        // dialogs.addEventListener('mouseover', lightUp, false);
        // dialogs.addEventListener('mouseout', lightOff, false);
    }
}

//MOUSEOVER DIALOG \\
function lightUp(){
    console.log("LightUp!");
    // IF "name".classList.fade === true
    // "name".classlist.remove('fade')
    // ELSE console.log("Too soon.");
    dialog1.classList.remove('fade');
}

function lightOff(){

    console.log("LightOff!");
    dialog1.classList.add('fade');
}

// DIALOG TWO CHECK \\
function dialogTwo() {
    console.log("Dialog 2 is present.");
    setTimeout(function () {
        dialog2.classList.add('fadeIn');
        dialog2.style.visibility = 'visible';
        dialog1.classList.add('fade');
        dialog1.classList.remove('fadeIn');
    }, 15000);
}

// DIALOG THREE CHECK \\
function dialogThree() {
    console.log("Dialog 3 is present.");
    setTimeout(function () {
        dialog3.classList.add("fadeIn");
        dialog3.style.visibility = 'visible';
        dialog2.classList.add("fade");
    }, 25000);
}

// DIALOG FOUR CHECK \\
function dialogFour() {
    console.log("Dialog 4 is present.");
    setTimeout(function () {
        dialog4.classList.add("fadeIn");
        dialog4.style.visibility = 'visible';
        dialog3.classList.add("fade");
    }, 35000);
}

//

function dialogSwitch(){
    if (dialog4 != null && dialog3 != null && dialog2 != null){
        time = 4500;
        timed();
        dialogFour();
        dialogThree();
        dialogTwo();
    } else if(dialog4 == null && dialog3 != null && dialog2 != null){
        time = 3500;
        timed();
        dialogThree();
        dialogTwo();
    }else if(dialog4 == null && dialog3 == null && dialog2 != null){
        time = 2500;
        timed();
        dialogTwo();
    }else if(dialog4 == null && dialog3 == null && dialog2 == null){
        time = 1500;
        timed();
    }else{
        console.log("Dialogs not found!");
    }
}

window.onload = dialogSwitch(), listen();
