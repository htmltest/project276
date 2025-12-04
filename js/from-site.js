$(window).on('load', function() {

    window.setInterval(function() {
        var curImg = $('.checkoldlogo');
        if (curImg.attr('src') != curImg.attr('data-src')) {
            curImg.attr('src', curImg.attr('data-src'));
        }
    }, 500);
});