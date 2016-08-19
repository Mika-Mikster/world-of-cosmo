$(window).load(function(){
    setTimeout(
        function(){

            $('.part1').replaceWith($('.part2'));
            $('.part2').show();

        }, 3000
    );
    setTimeout(
        function () {
            $('.part2').replaceWith($('.part3'));
            $('.part3').show();
        }, 7000
    );
    setTimeout(
        function () {
            $('.part3').replaceWith($('.part4'));
            $('.part4').show();
        }, 10000
    );
    setTimeout(
        function () {
            $('.part4').replaceWith($('.part5'));
            $('.part5').show();
        }, 14000
    );
});
