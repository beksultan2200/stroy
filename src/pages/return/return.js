$(document).ready(function () {
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

    $(window).on('scroll', function(){
        if($(window).scrollTop() > 500){
            $('.to-top-btn').fadeIn()
            $('.to-top-btn').css({'display': 'flex'})
        } else {
            $('.to-top-btn').fadeOut()
        }
        if($(window).scrollTop() > 40){
            $('.header-middle').addClass('fixed')
        } else {
            $('.header-middle').removeClass('fixed')
        }
    });
}); 