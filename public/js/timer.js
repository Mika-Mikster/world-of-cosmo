var timer = document.getElementsByClassName('timer');
// var deleteTimer = document.getElementsByClassName('deleteTimer');

function timed(){
    for (var i = 0; i < timer.length; i++) {
        setTimeout(function (timer2) {
            timer2.style.visibility = 'visible';
        }, 3000, timer[i]);
    }
}

// function timedDelete() {
//     for (var j = 0; j < deleteTimer.length; j++) {
//         setTimeout(function (delete2) {
//             delete2.style.visibility = 'visible';
//         }, 1000, deleteTimer[j]);
//     }
// }

window.onload = timed();
// window.onload = timedDelete();