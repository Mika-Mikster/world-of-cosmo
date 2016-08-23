var dialog1 = document.getElementById('dialog1');
var dialog2 = document.getElementById('dialog2');
var dialog3 = document.getElementById('dialog3');
var dialog4 = document.getElementById('dialog4');
var timer = document.querySelectorAll(".timer");
var time;

dialog1.classList.add("fadeIn");

function timed () {setTimeout(function () {
    for (var i = 0; i < timer.length; i++) {
        timer[i].style.visibility = 'visible';
    }
}, time);
}

function dialogSwitch() {
    if (dialog2 != null) {
        console.log("Dialog 2 is present.");
        setTimeout(function () {
            dialog2.classList.add("fadeIn");
            dialog2.style.visibility = 'visible';
            dialog1.classList.add("fade");
        }, 10000);
        // second if
        if (dialog3 != null) {
            console.log("Dialog 3 is present.");
            setTimeout(function () {
                dialog3.classList.add("fadeIn");
                dialog3.style.visibility = 'visible';
                dialog2.classList.add("fade");
            }, 30000);
            // third if
            if (dialog4 != null) {
                console.log("Dialog 4 is present.");
                setTimeout(function () {
                    dialog4.classList.add("fadeIn");
                    dialog4.style.visibility = 'visible';
                    dialog3.classList.add("fade");
                }, 40000);
                //fourth if
                if (dialog5 != null) {
                    console.log("Dialog 5 is present.");
                    setTimeout(function () {
                        dialog5.classList.add("fadeIn");
                        dialog5.style.visibility = 'visible';
                        dialog4.classList.add("fade");
                    }, 50000);
                    // fourth else
                } else {
                    console.log("No dialog 4, loading buttons..");
                    time = 40000;
                    timed();
                }
            // third else
            } else {
                console.log("No dialog 4, loading buttons..");
                time = 30000;
                timed();
            }
            // second else
        } else {
            console.log("No dialog 3, loading buttons..");
            time = 20000;
            timed();
        }
        // first else
    } else {
        console.log("No dialog 2, loading buttons..");
        time = 10000;
        timed();
    }

}

window.onload = dialogSwitch();
