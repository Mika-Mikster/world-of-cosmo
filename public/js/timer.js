var timer = document.getElementsByClassName('timer');

function timed(){
    for (var i = 0; i < timer.length; i++) {
        setTimeout(function (timer2) {
            timer2.style.visibility = 'visible';
        }, 3000, timer[i]);
    }
}
window.onload = timed();

var part1 = document.getElementById("part1");
var part2 = document.getElementById("part2");
var part3 = document.getElementById("part3");

// function dialogSwitch() {
//     var check = 1;
//     setTimeout(function(){
//         //hide dialog1
//         part1.style.visibility = 'hidden';
//         //show dialog2
//         part2.style.visibility = 'visible';
//         check = 2;
//         if(check == 2) {
//             console.log("Check is 2");
//             setTimeout(function () {
//                 //hide 1dialog2
//                 part2.style.visibility = 'hidden';
//                 //show dialog3
//                 part3.style.visibility = 'visible';
//                 check = 3;
//                 if (check == 3 && part3 == 3){
//                     console.log("Check is 3 && dialog3 is found");
//                     setTimeout(function () {
//                         //hide part3
//                         part2.style.visibility = 'hidden';
//                         //show dialog4
//                         part3.style.visibility = 'visible';
//                     }, 3000);
//                 }
//             }, 2000);
//         }
//     }, 1000);
// }

// window.onload = dialogSwitch();
//
// function showing () {
//     var bag = document.getElementsByClassName(".bag");
//
//     bag.style.visibility = 'visible';
// }

