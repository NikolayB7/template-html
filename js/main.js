$(function () {

    $('.accordion').accordion({

        collapsible: true,
        active: false,
        heightStyle: "content",
        header: ".accordion__title",
        classes: {
            "ui-accordion-header-active": "accordion__active"
        }

    });

    var $window = $(window);

    var head = $('header');

    $window.on('scroll', changeTop);

    function changeTop() {
        if ($window.scrollTop() >= 1) {
            head.addClass('header--white');
            $('.hero__button').css({
                'opacity': '0',
                'pointer-events': 'none'
            });
        } else {
            head.removeClass('header--white');
            $('.hero__button').css({
                'opacity': '1',
                'pointer-events': 'auto'
            });
        }

    }

    $('.slider').each(function (i, el) {
        var row = $(el).find('.slider__row'),
            nextBtn = $(el).find('.slider__btn-next'),
            prevBtn = $(el).find('.slider__btn-prev');
        row.slick({
            slidesToShow: 1,
            arrows: false
        });
        adaptiveHeight: true;
        nextBtn.on('click', function () {
            row.slick('slickNext');
        });
        prevBtn.on('click', function () {
            row.slick('slickPrev');
        })

    });


    $('.design__slider').slick({
        slidesToShow: 3,
        arrows: false,
        dots: true,
        dotsClass: 'design__slider-dots',
        adaptiveHeight: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    baguetteBox.run('#design__popup', {
        captions: false,
        overlayBackgroundColor: 'rgba(0,0,0,0.8)',
        animation: 'slideIn'
    })

    $('.customers__grid').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        // cssEase: 'linear',
        // adaptiveHeight: true,
        slidesToShow: 3,
        nextArrow: $('.customers__arrow--next'),
        prevArrow: $('.customers__arrow--prev'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".product__tabs").tabs({
        classes: {
            "ui-tabs-active": "product__inset--active",
        },
        hide: {effect: "fade", duration: 500},
        show: {effect: "fade", duration: 500}
    });

    $('.accordion--scroll').scrollbar();

    $('.specializations__slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        dotsClass: 'specializations__slider-dots'
    });

    $('.header__burger').click(function () {
        $(this).toggleClass('header__burger-active');
        $('.header__navigation-mobile').toggleClass('header__mobile-active');
        $('.header__logo').toggleClass('header__logo-m');
    })

    $('.header__item-m').on("click", function () {
        // $(this).find('.header__sublist-m').toggle('blind')
        $(this).find('.header__sublist-m').toggleClass('header__sublist-active')
    })

    $('.hero__btn').on('click', function () {
        var $heightBlock = $('.hero').outerHeight();

        var body = $("html,body");
        body.animate({scrollTop: $heightBlock}, 500);

    });

    // function isMobile() {
    //     return document.body.clientWidth <= 768;
    // }
    //
    // function TechnologyTab(el) {
    //     var self = this;
    //
    //     this.el = {
    //         root: $(el),
    //         top: $(el).find('.technology__top'),
    //         contentWrap: $(el).find('.technology__content-wrap'),
    //         content: $(el).find('.technology__content'),
    //         arrow: $(el).find('svg')
    //     };
    //
    //     this.toggle = function () {
    //         if (self.isShow()) {
    //             self.hide();
    //         } else {
    //             self.show();
    //         }
    //     };
    //
    //     this.show = function () {
    //         this.el.top.attr('data-show', '1');
    //         this.chekState();
    //     };
    //
    //     this.isShow = function () {
    //         return this.el.top.attr('data-show') === '1';
    //     };
    //
    //     this.hide = function () {
    //         this.el.top.attr('data-show', '0');
    //         this.chekState();
    //     };
    //
    //     this.performShow = function () {
    //         this.el.content.css({
    //             'height': this.el.contentWrap.outerHeight() + 'px',
    //             'opacity': '1'
    //         });
    //         this.el.arrow.css({
    //             'transform': 'rotateY(180deg)'
    //         })
    //     };
    //
    //     this.performHide = function () {
    //         this.el.content.css({
    //             'height': "0px",
    //             'opacity': "0"
    //         });
    //         this.el.arrow.css({
    //             'transform': 'rotateY(0deg)'
    //         })
    //     };
    //
    //     this.chekState = function () {
    //         if (!isMobile()) {
    //             return
    //         }
    //         if (self.isShow()) {
    //             self.performShow();
    //         } else {
    //             self.performHide();
    //         }
    //
    //     };
    //
    //     this.el.top.on('click', function () {
    //         if (isMobile()) {
    //             self.toggle();
    //         }
    //     });
    //
    //     this.chekState();
    // }
    //
    // // var tabs = [];
    // $('.technology__block').each(function (i, el) {
    //     // tabs.push(new TechnologyTab(el));
    //
    //     new TechnologyTab(el)
    // });

    // window.tabs = tabs;

    // function isMob() {
    //     return document.body.clientWidth <= 560;
    // }
    //
    // function ListTab(el) {
    //     var self = this;
    //
    //     this.el = {
    //         root: $(el),
    //         top: $(el).find('.numbers-list__title'),
    //         contentWrap: $(el).find('.numbers-list__content-wrap'),
    //         content: $(el).find('.numbers-list__content'),
    //         arrow: $(el).find('svg')
    //     };
    //
    //     this.toggle = function () {
    //         if (self.isShow()) {
    //             self.hide();
    //         } else {
    //             self.show();
    //         }
    //     };
    //
    //     this.show = function () {
    //         this.el.top.attr('data-show', '1');
    //         this.chekState();
    //     };
    //
    //     this.isShow = function () {
    //         return this.el.top.attr('data-show') === '1';
    //     };
    //
    //     this.hide = function () {
    //         this.el.top.attr('data-show', '0');
    //         this.chekState();
    //     };
    //
    //     this.performShow = function () {
    //         this.el.content.css({
    //             'height': this.el.contentWrap.outerHeight() + 'px',
    //             'opacity': '1'
    //         });
    //         this.el.arrow.css({
    //             'transform': 'rotateY(180deg)'
    //         })
    //     };
    //
    //     this.performHide = function () {
    //         this.el.content.css({
    //             'height': "0px",
    //             'opacity': "0"
    //         });
    //         this.el.arrow.css({
    //             'transform': 'rotateY(0deg)'
    //         })
    //     };
    //
    //     this.chekState = function () {
    //         if (!isMob()) {
    //             return
    //         }
    //         if (self.isShow()) {
    //             self.performShow();
    //         } else {
    //             self.performHide();
    //         }
    //
    //     };
    //
    //     this.el.top.on('click', function () {
    //         if (isMob()) {
    //             self.toggle();
    //         }
    //     });
    //
    //     this.chekState();
    // }
    //
    // $('.numbers-list__item').each(function (i, el) {
    //     new ListTab(el);
    // })


    function Filter(el) {

        var self = this;

        this.el = {
            block: $(el).find('[data-filter-el]'),
            link: $(el).find('[data-filter-button]')

        };

        $(this.el.link[0]).attr("data-active","");

        this.el.link.on('click', function (e) {
            e.preventDefault();

            // Добавление и удаление data-active к ссылке

            self.el.link.removeAttr('data-active');
            $(this).attr('data-active', '');

            // data-filter-button текущей ссылки
            var dataBtn = $(this).data("filterButton") + "";

            if (dataBtn.length === 0) {
                self.show(self.el.block);
            } else {
                // Переборка все блоков
                self.el.block.each(function (i, el) {

                    // Создание массива
                    var valAttr = $(el).attr('data-filter-el').split(',');


                    // Перебор элементов массива

                    var elem = valAttr.find(function (el) {
                        return el === dataBtn;
                    });

                    // console.log(a);

                    if (elem !== undefined) {
                        self.show($(el));
                    } else {
                        self.hide($(el));
                    }


                })
            }


        });

        // Поиск всех элементов сотрировки


        this.show = function (el) {
            el.css('display', 'block');

        }


        this.hide = function (el) {
            el.css('display', 'none');
        }


    }

    $('[data-filter]').each(function (i, el) {
        new Filter(el);
    });

    function changeImg(el) {
        var self = this;

        this.el = {
            block: $(el).find('[data-filter-el]'),
            link: $(el).find('[data-filter-button]')

        };


        this.el.link.on('click', function (e) {
            e.preventDefault();

            // Добавление и удаление data-active к ссылке

            self.el.link.removeAttr('data-active');
            $(this).attr('data-active', '');

            // data-filter-button текущей ссылки
            var dataBtn = $(this).data("filterButton") + "";

            if (dataBtn.length === 0) {
                self.show(self.el.block);
            } else {
                // Переборка все блоков
                self.el.block.each(function (i, el) {

                    // Создание массива
                    var valAttr = $(el).attr('data-filter-el').split(',');


                    // Перебор элементов массива

                    var elem = valAttr.find(function (el) {
                        return el === dataBtn;
                    });

                    // console.log(a);

                    if (elem !== undefined) {
                        self.show($(el));
                    } else {
                        self.hide($(el));
                    }


                })
            }


        });

        // Поиск всех элементов сотрировки


        this.show = function (el) {
            console.log(el.children());

            el.css('opacity', '1');

        }


        this.hide = function (el) {

            el.css('opacity', '0');
        }

    }

    $('[data-filter-img]').each(function (i, el) {
        new changeImg(el);
    });

    $('.hero__slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 2000,
        fade: true,
        cssEase: 'linear'
    });

    new WOW().init();
    function parallax() {
        var rellax = new Rellax('.overlay__img', {
            spped: 2,
            center: true,

        });
    }
    setTimeout(parallax,3000);

    // const element =  document.querySelector('.overlay__img');
    // element.classList.add('animated', 'bounceOutLeft');

    // var wow = new WOW(
    //     {
    //         boxClass: 'overlay__img',
    //         animateClass: 'animated',
    //         offset:       0,          // distance to the element when triggering the animation (default is 0)
    //         mobile:       true,       // trigger animations on mobile devices (default is true)
    //         live:         true,       // act on asynchronously loaded content (default is true)
    //         callback:     function(box) {
    //             const element =  document.querySelector('.overlay__img');
    //             element.classList.add('animated', 'slideInUp');
    //             // the callback is fired every time an animation is started
    //             // the argument that is passed in is the DOM node being animated
    //         },
    //         scrollContainer: null,    // optional scroll container selector, otherwise use window,
    //         resetAnimation: true,     // reset animation on end (default is true)
    //     }
    // )
    // wow.init();

});




