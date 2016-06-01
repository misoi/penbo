$(document).foundation()


$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});



(function ($) {
    // variables
    elementWidth = $('ul').width(),
        containerWidth = $('nav').width(),
        difference = elementWidth - containerWidth,
        finalWidth = difference * 1.5,
        element = $('ul');

    // active on click
    $('li').on('click', function () {
        $('li').removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);
