$(document).ready(function(){

    
    

    // Sticky Nav Bar

    $(window).scroll(function(){

        var ScrollTop = $(window).scrollTop();

        if(ScrollTop > 50){

            $('.navbar').addClass('nav-sticky');
            $('.scroll-btn').addClass('scrolling');
        } else{

            $('.navbar').removeClass('nav-sticky');
            $('.scroll-btn').removeClass('scrolling');
        }

    });

    // Scrolling Button To Top

    $('.scroll-btn').click(function(){

        $('html, body').animate({

            scrollTop: '0'
        }, 1000);
    });

    // Scrolling Nav Bar

    $('.navbar-nav .nav-item .nav-link').click(function(e){
        
        e.preventDefault();
        
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top
        }, 500);
        
      //$(this).addClass('active').parent().siblings().find('a').removeClass('active'); 
    });

    $(window).scroll(function(){

        $('.sectionPadding').each(function(){

            var topScroll = $(window).scrollTop();

            if(topScroll >= $(this).offset().top - 1){
                $('.navbar-nav .nav-item .nav-link').removeClass('active');
                
                $('.navbar-nav .nav-item .nav-link[data-scroll="' + $(this).attr('id') + '"]').addClass('active');
                
            }
        });
    });

    // Scrolling To About Section

    $('.scroll').click(function(){

        $('html, body').animate({
            
            scrollTop: $('#about').offset().top
        }, 1000);        
    });



    // Height Of Header

    var headerHeight = $('.header');

    headerHeight.height($(window).height());

    $(window).resize(function(){

        headerHeight.height($(window).height());
    });


    // Typed JS

    var typed = new Typed(".type", {
        strings: ["Web Designer.",
                "Freelancer.",
                   "Front-end Developer."
                    ],
        typeSpeed: 60,
        backSpeed: 60,
        loop: true

    });

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items'
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'span', function() {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({
            filter: filterValue
        });

    });

    $('.filtering').on('click', 'span', function() {

        $(this).addClass('active').siblings().removeClass('active');

    });

    /* magnificPopup
    -------------------------------------------------------*/
    $('.img-pop').magnificPopup({

        type: 'image',
        gallery: {
            enabled: true
        }

    });

    $('.link').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // counterUp
    $('.number .num-box .counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Clients OWL Carousal

    $('.clients .owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        autoplay: true,
        smartSpeed: 500,
        stopOnHover: true,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            576: {
                items: 2,
                nav: false
            },
            767: {
                items: 3,
                nav: false
            },
            991: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    });

    // Testimonial OWL Carousal

    $('.teastimonial .owl-carousel').owlCarousel({
        items: 1,
        mouseDrag: true,
        autoplay: true,
        smartSpeed: 500,
        margin:10
    });

    // Video Tab

    var VID = $('.video-tab');

    $('.btn-vedio').click(function(){

        VID.fadeIn(500);
    });

    VID.click(function(){

        $(this).fadeOut(500);
    });

    $('video').click(function(e){
        
        e.stopPropagation();
    });

    $(document).keydown(function(e){
        
        if(e.keyCode == 27){
            
            VID.fadeOut(500);
        }
        
    });

    // WOW JS

    new WOW().init();

    // Skills Progress Bar

    $(window).scroll(function(){

        if($(window).scrollTop() >= $('#skills').offset().top - 1){

            $('.chart').easyPieChart({
                animate: 2000,
                barColor: '#07cb79'
                
            });

        }

    });

});




/////////// Form sent informaition ////////////////////


$('#contact_form').submit(function (e){
    var name = document.getElementById('form_name'),
    email = document.getElementById('form_email'),
    message = document.getElementById('form_message')
    if (!name.value || !email.value || !message.value){
        
      alertify.error( 'Please check your entries')
    }

    else{
      $.ajax({
         method: 'POST',
        url: '//formspree.io/m7mood.khaled.9@gmail.com',
        data: $('#contact_form'),
        datatype: 'json'
          
          
      });
        
      e.preventDefault()
      $(this).get(0).reset()
      alertify.success ('Message sent')
}
    
});
    







// Loader
$(document).ready(function () {
    setTimeout(function(){
      		$('body').addClass('loaded');
    	}, 1000);
});























