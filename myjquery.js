$(window).scroll(function () {
    const Wscroll = $(this).scrollTop();
    if (Wscroll > 70) {
        $('.navbar').addClass('animasiturun');
    }
    if (Wscroll == 0) {
        $('.navbar').removeClass('animasiturun');
    }
});


$('.page-scroll').on('click', function (e) {

    var tujuan = $(this).attr('href');

    var elemenTujuan = $(tujuan);

    $('html , body').animate({
        scrollTop: elemenTujuan.offset().top - 100
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});

$(window).on('load', function () {
    $('.container').addClass('animasi');
});

$(document).ready(function () {
    $(".preloader").fadeOut(9000);
});