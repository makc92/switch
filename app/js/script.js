$('.navbar-toggler').on('click', function () {
    if ($(this).hasClass('collapsed')) {
        $('.searchbox').fadeIn();
    } else {
        $('.searchbox').removeAttr('style');
    }
});



var $grid = $('.wwrap').isotope({
    // options
    itemSelector: '.wbox',
    layoutMode: 'fitRows',
    percentPosition: true,
    fitRows: {
        gutter: '.gutter-sizer',
    }
});

$('.wlink').on('click', function () {
    $('.wlink').removeClass('active')
    $(this).addClass('active');
    var attr = $(this).attr('data-filter');
    $grid.isotope({
        filter: attr,
        transitionDuration: '1s',
    });

});




$(window).scroll(function () {
    if ($(window).scrollTop() >= ($('#team').offset().top - 250)) {
        setTimeout(() => {
            $('.profilewrap .profile .line').animate({
                height: '77px',
            }, 2000, function () {
                $('.profilewrap .profile .socialtext').animate({
                    opacity: 1
                }, 1000)
            });
        }, 4000);
    }
});





//Footer
$('.postbox .label').each(function () {
    var color = $(this).attr('data-color');
    $(this).css('background-color', color);
});



var links = ('.nav-link');

$(links).on('click', function (e) {
    e.preventDefault();

    $(links).parent().removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('href');
    var target = $(id).offset().top;


    $('html, body').animate({
        scrollTop: target,
    }, 1000);
});

$('.navbar-nav .nav-item').on('click', function () {
    if ($('.navbar-toggler').hasClass('collapsed')) {
        return;
    } else {
        $('.navbar-toggler').addClass('collapsed');
        $('.searchbox').slideUp();
        if ($('#navbarSupportedContent').hasClass('show')) {
            $('#navbarSupportedContent').slideUp(function () {
                $(this).removeClass('show');
                $(this).css('display', '');
            })
        };
    };
});

$('.up').click(function (e) { 
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0,
    }, 1000)
});


$(window).scroll(function () { 
    if ($(window).scrollTop() > $('#wedo').offset().top) {
        $('.up').fadeIn('1500');
    } else {
        $('.up').fadeOut();
    }
});





var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
var items = [{
        src: 'img/work1.png',
        w: 1200,
        h: 900,

    },
    {
        src: 'img/work2.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work3.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work4.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work5.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/headerbg.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work6.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work7.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work8.png',
        w: 1200,
        h: 900,
    },
    {
        src: 'img/work9.png',
        w: 1200,
        h: 900,
    },
];





// Initializes and opens PhotoSwipe
$('.wbox').on('click', function () {
    num = parseInt($(this).attr('data-number'));
    slide = num - 1;
    var options = {
        // optionName: 'option value'
        // for example:
        index: slide // start at first slide
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
});