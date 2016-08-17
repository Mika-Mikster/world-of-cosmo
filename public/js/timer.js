var timer = document.getElementsByClassName('timer');

function timed(){
    for (var i = 0; i < timer.length; i++) {
        setTimeout(function (timer2) {
            timer2.style.visibility = 'visible';
        }, 3000, timer[i]);
    }
}

window.onload = timed();