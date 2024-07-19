(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.off()
            $dropdownToggle.off()
            $dropdown.hover(
                function() {
                    const $this = $(this);
                    $this.addClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "true");
                    $this.find($dropdownMenu).addClass(showClass);
                },
                function() {
                    const $this = $(this);
                    $this.removeClass(showClass);
                    $this.find($dropdownToggle).attr("aria-expanded", "false");
                    $this.find($dropdownMenu).removeClass(showClass);
                }
            );
            // multi level dropdown
            $('.dropdown-submenu').off()
            $('.dropdown-submenu').on("mouseenter", (e) => {
                console.log('hovered, toggling', $(this))
                $('.dropdown-submenu-menu').addClass(showClass)
            }).on("mouseleave", (e) => {
                console.log('hovered out')
                $('.dropdown-submenu-menu').removeClass(showClass)
            })
        } else {
            $dropdown.off("mouseenter mouseleave");
            $dropdownToggle.off()
            $dropdownToggle.on('click', function(event) {
                event.preventDefault()

                let dropdownMenu = $(this).next()

                if ($(this).attr('class').includes('show')) {
                    $(this).removeClass(showClass)
                    dropdownMenu.removeClass(showClass)
                    $('.dropdown-submenu-menu').removeClass(showClass)
                } else {
                    $(this).addClass(showClass)
                    dropdownMenu.addClass(showClass)
                }
            })

            $('.dropdown-item').on('click', (e) => {
                // console.log('[dropdown-item] event:', e.currentTarget.classList)
                if (!e.currentTarget.classList.value.includes('dropdown-item-leader')) {
                    e.stopPropagation()
                }
            })

            // multilevel dropdown
            $('.dropdown-submenu').off()
            $('.dropdown-submenu').on("click", (e) => {
                // console.log('[dropdown-submenu] event:', e.currentTarget.classList)
                // e.preventDefault()
                if (e.currentTarget.tagName.toLowerCase() !== "a") {
                    e.preventDefault()
                    console.log('click, toggling', $(this))
                    if ($('.dropdown-submenu-menu').attr('class').includes('show')) {
                        $('.dropdown-submenu-menu').removeClass(showClass)
                    } else {
                        $('.dropdown-submenu-menu').addClass(showClass)
                    }
                }
            })
        }
    });

    
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 200, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

