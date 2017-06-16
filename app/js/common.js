jQuery(function() {
    initAnimationButton();
    initmobileMenu();
    initCarousel();
});

//  Mobile menu button animation
function initAnimationButton() {
    var anchor = document.querySelectorAll('button');

    [].forEach.call(anchor, function (anchor) {
        var open = false;
        anchor.onclick = function (event) {
            event.preventDefault();
            if (!open) {
                this.classList.add('close');
                open = true;
            } else {
                this.classList.remove('close');
                open = false;
            }
        }
    });
}

//  Drop-down mobile menu
function initmobileMenu() {
    $('.navToggle').on('click', function () {
        $('.navlist').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
}

//  Fixed header headhesive.js
// Options
var options = {
    offset: 300
}
// Create a new instance of Headhesive.js and pass in some options
var header = new Headhesive('.header', options);

//  Switching the active menu items on the scroll
jQuery(window).scroll(function () {
    var $sections = $('.section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 100;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');

        }
    })
});

jQuery("nav").on("click", "a", function (event) {
    //  Exclude the standard browser response
    event.preventDefault();

    //  Get the block identifier from the href attribute
    var id = $(this).attr('href'),

        //  Find the height on which the block is located
        top = $(id).offset().top;

    //  Animate the transition to the block, time: 1000 ms
    $('body,html').animate({
        scrollTop: top
    }, 1000);
});

//  Carousel unit vision Slick.js
function initCarousel() {
    $('.carousel').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: true,
        cssEase: 'linear',
        arrows: true,
        prevArrow:'<img class="arrow-left" src="img/left.png" alt="left">',
        nextArrow:'<img class="arrow-right" src="img/right.png" alt="right">'
    });
}