const responsive = {
    0: {
        items:1
    },
    296: {
        items:1
    },
    500: {
        items:2
    },
    950: {
        items:3
    }
}



$(document).ready(function(){
    $nav=$('.nav');
    $togglecollapse=$('.toggle-collapse');

    /*click event on toggle menu*/
    $togglecollapse.click(function(){
         $nav.toggleClass('collapse');
    })
 
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:3000,
        dots: false,
       nav: true,
       navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
       responsive: responsive

    });

    AOS.init();
    
})