/**
 * Created by Michaëlya on 2016-08-09.
 */
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
    document.getElementById("laterView").style.visibility = "visible";
    console.log("Callback"); }
