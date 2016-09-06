$(document).ready(function() {
    var $window = $(window),
        $body = $('body');
        
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        vertical: true
    });
});
