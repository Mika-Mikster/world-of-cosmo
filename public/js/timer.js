var dialogs = ['dialog1', 'dialog2', 'dialog3', 'dialog4'];


function listen() {
    for (var i = 0; i < array.length; i++){
        dialogs[i].addEventListener('mouseover', lightUp, false);
        dialogs[i].addEventListener('mouseout', lightOff, false);
    }

// MOUSEOVER DIALOG \\
function lightUp(){
    console.log("LightUp!");
    // IF "name".classList.fade === true
    // "name".classlist.remove('fade')
    // "name".classlist.add('check')
    // ELSE console.log("Too soon.");
    dialog1.classList.remove('fade');
}

function lightOff(){
    // IF "name".classList.check === true
    // "name".classlist.remove('check')
    // "name".classlist.add('fade')
    // ELSE console.log("Too soon.");
    console.log("LightOff!");
    dialog1.classList.add('fade');
}