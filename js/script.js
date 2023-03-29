
$(document).ready(function() {

    setTimeout(function() {
        $('#ctn-preloader').addClass('loaded');
        $('body').removeClass('no-scroll-y');

    if ($('#ctn-preloader').hasClass('loaded')) {

        $('#preloader').delay(2000).queue(function() {
            $(this).remove();
        });
        }
    }, 3750);
    
});

// SWIPERJS 

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    mousewheel: true,
    loop: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    hashNavigation: {
        watchState: true,
    },
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

});

