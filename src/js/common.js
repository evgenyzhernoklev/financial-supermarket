$(document).ready(function() {
    var $window = $(window),
        $body = $('body');
    
    
    
    
    
    //tabs
    var $tabLinks = $('.tabsLinks_link'),
        $tabsBlocks = $('.tabsContent');
    
    $tabLinks.on('click', function(e) {
        e.preventDefault();
        
        if ($(this).hasClass('is-active')) {
            return false;
        }
        
        var target = $(this).attr('href'),
            $target = $(target);
        
        $tabLinks.removeClass('is-active');
        $tabsBlocks.hide().removeClass('is-active');
        $(this).addClass('is-active');
        $target.fadeIn(300).addClass('is-active');
    });
    
    
    
    //slider in header
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        vertical: true
    });
});
