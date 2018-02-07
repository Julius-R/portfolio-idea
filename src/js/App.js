import $ from 'jQuery';

$('#home').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.home').offset().top
    }, 1000);
});

$('#about').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.about').offset().top
    }, 1000);
});

$('#portfolio').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.portfolio').offset().top
    }, 1000);
});
