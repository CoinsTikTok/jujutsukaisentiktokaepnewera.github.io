// side-menu

$(document).ready(function() {
    $(".sknav").click(function() {
        $(".sticky-side-menu").toggle();
    });

});

$(document).mouseup(function(e) {
    var container = $(".sticky-side-menu");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $(".vis_toc").removeClass("vis_toc_after");
    }
});

$(document).ready(function() {
    $(".closeThes").click(function() {
        $(".sticky-side-menu").hide();
        $(".vis_toc").removeClass("vis_toc_after");
    });

    $('#bg_filter').click(function(e) {
        e.preventDefault();
        console.log('clicked');
        $(".vis_toc").addClass("vis_toc_after");
        // $(".vis_toc").addClass(".cs-vis");
    });

    // click
    $('.front-ButtonContainer').click(function() {
        $('.front-ButtonContainer').removeClass('m-active');
        $('#recharge-btn').addClass('active');
        $(this).addClass('m-active');

    });
});


$('.responsive').slick({
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    infinite: true,
    speed: 300,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }
    ]
});

$(window).scroll(function() {
    if ($(window).scrollTop() > 100) {
        $('.front_header_box').addClass('sticky');
    } else {
        $('.front_header_box  ').removeClass('sticky');
    }
});