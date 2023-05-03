$(document).ready(function () {
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