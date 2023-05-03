$(document).ready(function () {
    var homeSlider = $('#home-slider');
    homeSlider.owlCarousel({
        items: 1,
        loop:true,
        dots:false,
    });
    // Go to the next item
    $('.home__next').click(function () {
        homeSlider.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.home__prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        homeSlider.trigger('prev.owl.carousel', [300]);
    });

    
    var feedbackSlider = $('#feedback-slider');
    feedbackSlider.owlCarousel({
        items: 3,
        dots:false,
        margin: 16
    });
    // Go to the next item  
    $('.feedback__next').click(function () {
        feedbackSlider.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.feedback__prev').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        feedbackSlider.trigger('prev.owl.carousel', [300]);
    });


    //Инструция выведение всплывающего окна для входа
    $('#open-login-popup').click(function(event){
        event.preventDefault()
        $('.overlay').fadeIn(1000)
        $('.login-popup').fadeIn(1000)
    });
    //Инструция закрытия окон
    $('.popup-close-btn').click(function(){
        $('.overlay').fadeOut(1000)
        $('.login-popup').fadeOut(1000)
        $('.reg-popup').fadeOut(1000)
        $('.city-popup').fadeOut(1000)
        $('.cart-alert').fadeOut(1000)
        $('.error-popup').fadeOut(1000)
        $('.order-alert').fadeOut(1000)
    });

    
    $('#cart-alert__close').click(function(){
        $('.overlay').fadeOut(1000);
        $('.cart-alert').fadeOut(1000);
    });
    $('#error-popup__close').click(function(){
        $('.overlay').fadeOut(1000);
        $('.error-popup').fadeOut(1000);
    });

    $('#order-alert__close').click(function(){
        $('.overlay').fadeOut(1000);
        $('.order-alert').fadeOut(1000);
    });
    //Инструция выведение всплывающего окна для регистрации
    $('.login-popup__reg').click(function(){
        $('.reg-popup').fadeIn(1000)
        $('.login-popup').fadeOut(1000)
    });
    //Инструкция выведения всплывающего окна для выбора города
    $('#open-city-popup').click(function(event){
        event.preventDefault()
        $('.overlay').fadeIn(1000)
        $('.city-popup').fadeIn(1000)
    });
    $('#open-cart-alert').click(function(event){
        event.preventDefault()
        $('.overlay').fadeIn(1000)
        $('.cart-alert').fadeIn(1000)
    });

    // $(window).on('scroll', function(){
    //     if($(window).scrollTop() > 500){
    //         $('.to-top-btn').fadeIn()
    //         $('.to-top-btn').css({'display': 'flex'})
    //     } else {
    //         $('.to-top-btn').fadeOut()
    //     }
    //     if($(window).scrollTop() > 40){
    //         $('.header-middle').addClass('fixed')
    //     } else {
    //         $('.header-middle').removeClass('fixed')
    //     }
    // });
}); 