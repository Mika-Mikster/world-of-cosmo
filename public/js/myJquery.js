/** typed.js with thanks to Matt Boldt www.mattboldt.com**/
$(function(){
    $(".element").typed({
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 0
    });
});
$(function(){

    $("#typed").typed({
        // strings: ["Typed.js is a <strong>jQuery</strong> plugin.", "It <em>types</em> out sentences.", "And then deletes them.", "Try it out!"],
        stringsElement: $('#typed-strings'),
        typeSpeed: 30,
        backDelay: 1000,
        backSpeed: 0,

        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,
        callback: function(){ foo(); },
        resetCallback: function() { newTyped(); }
    });

    $(".reset").click(function(){
        $("#typed").typed('reset');
    });

});

function newTyped(){ /* A new typed object */ }

function foo(){
    var elems = document.getElementsByClassName('choices');
    for (var i=0; i<elems.length; i++) {
        if (elems[i].style.visibility == 'hidden') {
            console.log("Elems visible");
            elems[i].style.visibility = 'visible';
        }
        else {
            console.log("Elems cannot be checked");
        }
    }
};