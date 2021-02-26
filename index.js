$(function() {
    $(".preload").fadeOut(600, function() {
        $(".main_section").fadeIn(700);

        AOS.init({
            easing: 'ease',
            duration: 700,
            once: false,
        });

        // testimonial slick function
        $(document).ready(function() {
            $('.testimonial,.product_carousel').slick({
                speed: 500,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                arrows: true,
                dots: true,
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,

                    }

                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true,
                        infinite: true,

                    }
                }]
            });
        });



    });
});