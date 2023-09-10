(function ($) {
    "use strict";

    $(window).on('load', function() {
        $("#preloader").fadeOut();     
    });

    var kuching_park_hotel = {

        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var fixed_top = $("header");
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > 30) {
                    fixed_top.addClass("sticky");
                } else {
                    fixed_top.removeClass("sticky");
                }
            });
        },

        /* ============================================================ */
        /* Jquery Plugins Calling
        /* ============================================================ */
        onePageFunction: function(){
            $('.page_banner .scroll_to_down a[href*="#"]:not([href="#"])').on('click', function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html,body').animate({
                          scrollTop: target.offset().top - 140,
                        }, 100);
                        return false;
                    }
                }
            });
        },

        /* ============================================================ */
        /* Mobile Menu Integration
        /* ============================================================ */
        mobile_menu: function() {
            //Clone Mobile Menu
            function cloneMobileMenu($cloneItem, $mobileLoc) {
                var $combinedmenu = $($cloneItem).clone();
                $combinedmenu.appendTo($mobileLoc);                
            }
            cloneMobileMenu("header .nav-menu a", ".sidebar-mobile .menu");

            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('is-menu-open');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('is-menu-open');
                });
        
                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("is-menu-open");
                        $(selector).removeClass("is-menu-open");
                    }          
                });
            
            };
            mobile_menu('.sidebar-toggler', '.sidebar-mobile');  	
        
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {
            var hero_slider = new Swiper('.hero-slider', {
                slidesPerView: 1,
                loop: true,
                autoplay: {
                    delay: 8000,
                },
                speed: 1000,
                pagination: {
                    el: ".hero-slider .pagination",
                    type: "fraction",
                    renderCustom: function (hero_slider, current, total) {
                        function numberAppend(d) {
                            return (d < 10) ? '0' + d.toString() : d.toString();
                        }
                        return numberAppend(current) + ' / ' + numberAppend(total); 
                    }
                },
                navigation: {
                    nextEl: '.hero-slider .slider_next',
                    prevEl: '.hero-slider .slider_prev',
                },
            });   
            var home_experience_slider = new Swiper('.home-experience-slider', {
                slidesPerView: 1,
                loop: true,    
                autoplay: {
                    delay: 5000,
                }, 
                speed: 1000,
                navigation: {
                    nextEl: '.home-experience-slider .slider_next',
                    prevEl: '.home-experience-slider .slider_prev',
                },           
            });
            var home_room_slider = new Swiper('.home_room_slider', {
                slidesPerView: 1,
                loop: false,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                }, 
                speed: 1000,
                navigation: {
                    nextEl: '.home-rooms .slider_next',
                    prevEl: '.home-rooms .slider_prev',
                },
                breakpoints: {   
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    1200: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                    1760: {
                        spaceBetween: 60,
                        slidesPerView: 3,
                    },
                }
            });
            var home_room_slider = new Swiper('.room-slider', {
                slidesPerView: 1,
                autoplay: {
                    delay: 8000,
                },
                speed: 1000,
                navigation: {
                    nextEl: '.slider-navigation .slider_next',
                    prevEl: '.slider-navigation .slider_prev',
                },
            });
            
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append(
                "<a href='#top' id='scroll-top' class='topbutton btn-hide'><i class='fal fa-chevron-double-up'></i></a>"
            );
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $("a[href='#top']").on('click', function () {
                $('html, body').animate(
                    {
                        scrollTop: 0,
                    },
                    'normal'
                );
                return false;
            });
        },

        /* ============================================================ */
        /* Magnific Popup
        /* ============================================================ */
        magnificPopup: function () {
            $('.popup-youtube').each(function() { 
                $(this).magnificPopup({
                    // disableOn: 375,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: false
                });
            }); 
            $('.popup-image').each(function() {
                $(this).magnificPopup({
                    delegate: 'a',
                    type: 'image',
                    tLoading: 'Loading image #%curr%...',
                    mainClass: 'mfp-img-mobile',
                    gallery: {
                        enabled: true,
                        navigateByImgClick: true,
                        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
                    },
                    image: {
                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                        titleSrc: function(item) {
                            return item.el.attr('title') + '<small>Photo captured by Kuching Park Hotel</small>';
                        }
                    }
                });
            }); 
        },
        
        /* ============================================================ */
        /* Custom Cursor
        /* ============================================================ */
        custom_cursor: function() {
            if( $(".custom__cursor").length ) {
                var cursor = document.querySelector('.custom__cursor-one');
                var cursorinner = document.querySelector('.custom__cursor-two');
                var a = document.querySelectorAll('a, button');
                document.addEventListener('mousemove', function(e) {
                    var x = e.clientX;
                    var y = e.clientY;
                    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
                });
                document.addEventListener('mousemove', function(e) {
                    var x = e.clientX;
                    var y = e.clientY;
                    cursorinner.style.left = x + 'px';
                    cursorinner.style.top = y + 'px';
                });
                document.addEventListener('mousedown', function() {
                    cursor.classList.add('click');
                    cursorinner.classList.add('custom__cursor-hover')
                });
                document.addEventListener('mouseup', function() {
                    cursor.classList.remove('click')
                    cursorinner.classList.remove('custom__cursor-hover')
                });
                a.forEach(item => {
                    item.addEventListener('mouseover', () => {
                        cursor.classList.add('custom__cursor__hover');
                    });
                    item.addEventListener('mouseleave', () => {
                        cursor.classList.remove('custom__cursor__hover');
                    });
                })
            }
        },

        /* ============================================================ */
        /* Background Image
        /* ============================================================ */
        background_image: function() {
            $("[data-bg-color], [data-bg-image], [data-color]").each(function() {
                var $this = $(this);

                if( $this.attr("data-bg-image") !== undefined ){
                    $this.css("background-image", "url("+ $this.attr("data-bg-image") +")");    
                    $this.css("background-size", $this.attr("data-bg-size"));
                    $this.css("background-repeat", $this.attr("data-bg-repeat"));
                    $this.css("background-position", $this.attr("data-bg-position"));
                    $this.css("background-blend-mode", $this.attr("data-bg-blend-mode"));
                }
                // Background Color    
                if( $("[data-bg-color]") ){
                    $this.css("background-color", $this.attr("data-bg-color") );
                }
                // Background Color   
                if( $("[data-color]") ){
                    $this.css("color", $this.attr("data-color") );
                }
            });
        },

        /* ============================================================ */
        /* JQUERY WOW ANIMATION
        /* ============================================================ */
        wowJs: function(){
            var wow = new WOW({
                animateClass: 'animate__animated',
                offset: 100,
                mobile: false,
                duration: 1000,
            });
            wow.init();
        }, 


        initialize: function() {
			kuching_park_hotel.custom_cursor();
			kuching_park_hotel.onePageFunction();
			kuching_park_hotel.mobile_menu();
			kuching_park_hotel.scroll_to_top();
			kuching_park_hotel.sticky_header();
			kuching_park_hotel.swiperCarousel();
			kuching_park_hotel.magnificPopup();
			kuching_park_hotel.background_image();
			kuching_park_hotel.wowJs();
		}
    };
    $(function() {
		kuching_park_hotel.initialize();

        
        $('select').niceSelect();

        $('.datepicker').datepicker();


	});


})(jQuery);