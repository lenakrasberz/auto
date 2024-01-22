$(function () {
 
    $(".rateYo").rateYo({
        rating: 3.6
    });
})
   $(function () {
    var hover = $(".offer__items");
    hover.mouseover(function(){
        $(this).addClass("color_white", 3000);
    })
    var hover = $(".offer__items");
    hover.mouseout(function(){
       $(this).removeClass("color_white");
    })
    $('.customers__slider').slick({
        arrows: false,
        slidesToShow: 2,
        infinite: true,
        dots: true,
        appendDots: $('.customers__dots'),
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                slidesToShow:1,    
            }
            },
        ]
        
    })

    $('.arrows-prev').on("click", function (e) {
        e.preventDefault()
    $('.customers__slider').slick("slickPrev")
    })
    $('.arrows-next').on("click", function (e) {
        e.preventDefault()
    $('.customers__slider').slick("slickNext")
    });
    
    // $('.questions__acc-item').on('click', function (e) {
    //     e.preventDefault()
    //     $(this).toggleClass('questions__acc-item--active')
    //     $(this).children('.questions__acc-text').slideToggle()
    // });/*код для аккордеона, где открыты все вкладки)*/
    $('.questions__acc-item').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('questions__acc-item--active')) {
        $(this).removeClass('questions__acc-item--active')
        $(this).children('.questions__acc-text').slideUp()
     }else {
        $('.questions__acc-item').removeClass('questions__acc-item--active')
        $('.questions__acc-text').slideUp()
        $(this).addClass('questions__acc-item--active')
        $(this).children('.questions__acc-text').slideDown()
    }
     
     });
     $(".header__nav-list a, .footer__buttom-link").on("click", function (e) {
        e.preventDefault()
        var id  = $(this).attr('href'),
        top = $(id).offset().top
        $('body,html').animate({scrollTop: top}, 1500)

        });

            $(window).on("scroll", function() {
                if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
                $('.burger').addClass('burger--follow')
            } else {
                $('.burger').removeClass('burger--follow')
            }

            });
       
        $('.burger, .overlay').on("click", function (e) {
            e.preventDefault()
            $('.header__top').toggleClass('header__top--open')
            $('.overlay').toggleClass('overlay--show')
        });
        $('.burger').click(function(){
            $('.burger span:nth-child(1)').toggleClass('first');
            $('.burger span:nth-child(2)').toggleClass('second');
            $('.burger span:nth-child(3)').toggleClass('third');
        });
        $('.overlay').click(function(){
            $('.burger span:nth-child(1)').removeClass('first');
            $('.burger span:nth-child(2)').removeClass('second');
            $('.burger span:nth-child(3)').removeClass('third');
        });
        // $('.footer__buttom-list--home').on('click', function(){
        // $(this).next().slideToggle()
        // });

})
    
