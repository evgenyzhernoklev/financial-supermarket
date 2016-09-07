$(document).ready(function() {
    var $window = $(window),
        $body = $('body');
    
    
    
    //tabs
    var $tabsWrapper = $('.tabs');
    
    $tabsWrapper.each(function(index, element) {
        var $tabLinks = $(element).find('.tabsLinks_link'),
            $tabBlocks = $(element).find('.tabsContent');
        
        $tabLinks.on('click', function(e) {
            e.preventDefault();
            
            if ($(this).hasClass('is-active')) {
                return false;
            }
            
            var target = $(this).attr('href'),
                $target = $(target);
                
            $tabLinks.removeClass('is-active');
            $tabBlocks.hide().removeClass('is-active');
            $(this).addClass('is-active');
            $target.fadeIn(300).addClass('is-active');
        });
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
