// Parallax

// When window scrolls, call the function for the parallax
$(window).scroll(function() {
    parallax();
});

// Defining the function
function parallax() {
    var wScroll = $(window).scrollTop();

    $('.parallax--bg').css('background-position', 'center '+(wScroll*0.25)+'px');

    $('.parallax--box').css('top', -5+(wScroll*0.005)+'em');

}


var scrollLink = $('.scroll');

scrollLink.on('click', function(e){
    e.preventDefault();
    $('body, html').animate({
       scrollTop: $(this.hash).offset().top
    }, 750);

    $(window).scroll(function(){
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function(){

            var sectionOffset = $(this.hash).offset().top - 20;

            if(sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
});
