$(document).ready(function() {
    var $window = $(window),
        $body = $('body'),
        windowScrollTop = $window.scrollTop();



    //scroll to block
    function scrollToBlock(e) {
        e.preventDefault();

        var targetBlock = $(this).attr('href'),
            scrollTarget = $(targetBlock).offset().top;

        $("html, body").stop().animate({scrollTop: scrollTarget}, '700', 'linear');
    }

    $('.scroll-link').on('click', scrollToBlock);



    //link to follow
    $('.is-link').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('href');
        window.location.href = target;
    });



    //sidebar menu position
    var $sidebarMenu = $('.menu__sidebar');

    if ($sidebarMenu.length) {
        var sidebarMenuPosition = $sidebarMenu.offset().top,
            sidebarMenuHeight = $sidebarMenu.height();

        function checkMenuPosition() {
            var endPosition = $('.position-stop').offset().top - sidebarMenuHeight - 70;
            windowScrollTop = $window.scrollTop();

            if (sidebarMenuPosition < windowScrollTop) {
                $sidebarMenu.addClass('is-fixed');
            } else {
                $sidebarMenu.removeClass('is-fixed');
            }

            if (windowScrollTop >= endPosition) {
                $sidebarMenu.addClass('is-fixed-bottom');
                $sidebarMenu.css('top', endPosition);
            } else {
                $sidebarMenu.removeClass('is-fixed-bottom');
                $sidebarMenu.css('top', '0px');
            }
        }

        checkMenuPosition();

        $window.on('scroll', function() {
            checkMenuPosition();
        });
    }



    //sidebar catalog
    var $catalogLinks = $('.menu__sidebar_link'),
        checkingElementsYPositions = [];

    if ($catalogLinks.length) {
        $catalogLinks.each(function(index, element) {
            var targetBlock = $(element).attr('href'),
                $targetBlock = $(targetBlock),
                startPosition = $targetBlock.offset().top - 21,
                stopPosition = startPosition + $targetBlock.height(),
                $targetBlockPosition = [startPosition, stopPosition];

            checkingElementsYPositions.push($targetBlockPosition);
        });

        checkPosition(checkingElementsYPositions);

        $window.on('scroll', function() {
            windowScrollTop = $window.scrollTop();
            checkPosition(checkingElementsYPositions);
        });
    }

    $catalogLinks.on('click', function(e) {
        e.preventDefault();
        var targetBlock = $(this).attr('href'),
            scrollTarget = $(targetBlock).offset().top - 20;

        $("html, body").stop().animate({scrollTop: scrollTarget}, '700', 'linear');
    });

    function checkPosition(positions) {
        for (var i = 0; i < positions.length; i++) {
            if ((windowScrollTop > positions[i][0]) && (windowScrollTop < positions[i][1])) {
                $catalogLinks.eq(i).addClass('is-active');
            } else {
                $catalogLinks.eq(i).removeClass('is-active');
            }
        }
    }



    //tabs
    function TabsSwitching(container, links, content) {
        var $tabsWrapper = $(container);

        $tabsWrapper.each(function(index, element) {
            var $tabLinks = $(element).find(links),
                $tabBlocks = $(element).find(content);

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
    }

    TabsSwitching('.tabs', '.tabsLinks_link', '.tabsContent');
    TabsSwitching('.tabs--sub', '.tabsLinks_link--sub', '.tabsContent--sub');



    //slider in header
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        vertical: true,
        dots: true
    });



    //custom select
    $('.is-select').select2();
});
