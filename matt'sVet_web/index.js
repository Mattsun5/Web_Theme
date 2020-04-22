$(document).ready(function(){
    let scrollLink = $('.scroll, .scroll1');
    // smooth scroll
    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    })

    //active link
    $(window).scroll(function(){
        let scrollbarLocation = $(this).scrollTop();
        $('.scroll').each(function() {
            let sectionOffset = $(this.hash).offset().top - 50;
            if (sectionOffset <= scrollbarLocation){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })

    //toggle menu
    $('.menuIcon').click(function(){
        $('.nav').toggleClass('nav-open',1000);
    })
})