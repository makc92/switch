Pace.on('done', function () {
    $('.loader').fadeOut(1500);
    new WOW().init();


    $('.carousel').owlCarousel({
        items: 1,
        navSpeed: 1000,
        nav: true,
        navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
        dots: false,
        loop: true,
    });

    $('.headerSlider').owlCarousel({
        items: 1,
        navSpeed: 1000,
        dots: true,
        loop: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    
    $('.seenSlider').owlCarousel({
        navSpeed: 1000,
        dots: false,
        loop: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: {
            0: {
                items: 1,
            },
            // breakpoint from 480 up
            480: {
                items: 2
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            }
        }
    });

    var owl1 = $('.headerSlider');
    owl1.owlCarousel();

$('.headerSlider').hover(function () {
        owl1.trigger('stop.owl.autoplay');
            
        }, function () {
            owl1.trigger('play.owl.autoplay');
        }
);


    if ($(window).width() > 992) {

        //header h1
        $(".owl-item .tbox h1").css('opacity', '0');
        $(".active .tbox h1").addClass('wow bounceInLeft animated').css('opacity', '1');

        //header .gbtn
        var delay = parseInt($(".owl-item .tbox .gbtn").attr('data-delay'));
        $(".owl-item .tbox .gbtn").css('opacity', '0');
        $(".owl-item.active .tbox .gbtn").css('opacity', '1').addClass('wow fadeInUp animated');
        
        owl1.on('translated.owl.carousel', function (event) {
            //header h1
            $(".owl-item .tbox h1").removeClass('wow bounceInLeft animated').removeAttr('style').css('opacity', '0');
            $(".owl-item.active .tbox h1").animate({
                opacity: 1,
            }).addClass('wow bounceInLeft animated');

            //header .gbtn
            $(".owl-item:not(.active) .tbox .gbtn").removeClass('wow  fadeInUp animated').removeAttr('style').animate({
                opacity: 0,
            });
            setTimeout(() => {
                $(".active .tbox .gbtn").animate({
                    opacity: 1,
                }).addClass('wow fadeInUp animated');
            }, delay)
        });
    } else {
        $(".active .tbox h1").addClass('wow bounceInLeft animated');
        $(".owl-item.active .tbox .gbtn").css('opacity', '1').addClass('wow fadeInUp animated');
    }








})