function aboutSlider() {
    var swiper = new Swiper('.about-top .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        speed: 3000,
        navigation: {
            nextEl: ' .about-top .swiper-button-next',
            prevEl: ' .about-top .swiper-button-prev',
        }
    })
}

function aboutMissionSlider() {
    var swiper = new Swiper('.about-mission .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        autoplay: true,
        speed: 3000,
        navigation: {
            nextEl: ' .about-mission .swiper-button-next',
            prevEl: ' .about-mission .swiper-button-prev',
        }
    })
}

function aboutPartnerSlider() {
    var swiper = new Swiper('.about-partner .swiper-container', {
        spaceBetween: 15,
        autoplay: true,
        speed: 3000,
        navigation: {
            nextEl: '.about-partner .swiper-button-next',
            prevEl: '.about-partner .swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
            1300: {
                slidesPerView: 6
            },
        }
    })
}

$(document).ready(function() {
    aboutSlider()
    aboutMissionSlider()
    if (window.innerWidth > 768) {
        aboutPartnerSlider()
    }
    $(".select").niceSelect()

    // $.fn.setCursorPosition = function(pos) {
    //     this.each(function(index, elem) {
    //         if (elem.setSelectionRange) {
    //             elem.setSelectionRange(pos, pos);
    //         } else if (elem.createTextRange) {
    //             var range = elem.createTextRange();
    //             range.collapse(true);
    //             range.moveEnd('character', pos);
    //             range.moveStart('character', pos);
    //             range.select();
    //         }
    //     });
    //     return this;
    // };
    // $('input[type="tel"]').click(function() {
    //     $('input[type="tel"]').setCursorPosition(3)
    // }).mask('+7 999 999 9999', { placeholder: '+7             ' });

    $.fn.setCursorPosition = function(pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $('input[type="tel"]').click(function() {
        $(this).setCursorPosition(3); // set position number
    });


    $('input[type="tel"]').mask('+7 999 999 9999', { placeholder: '+7             ' });
    $('input[data-input="card"]').mask('9999 9999 9999 9999', { placeholder: '                   ' });

    $(".chat__area").mCustomScrollbar()
    if (window.innerWidth < 992) {
        $(".main__search input").attr("placeholder", "Название или CAS")
    }

    if (window.innerWidth > 992) {
        $(".consult__items").mCustomScrollbar()
    }

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $("body").toggleClass("fixed-body")
        $(".header-top").toggleClass("header-top--active")
    })

    // $(".header__search-btn-open").click(function() {


    //     $(this).parent(".header__search-btn").addClass("header__search-btn--active")
    //     $(this).parent(".header__search-btn").siblings("input").slideDown(1)
    //         // $(this).siblings("input").slideDown(1)
    //     if ($(this).parent(".header__search-btn").siblings('input').val()) {
    //         $(this).parent(".header__search-btn").siblings("input").slideDown(1)
    //         $(".header__search-result").addClass("header__search-result--active")
    //         $("body").addClass("body-before")
    //     }

    //     // if ($(this).hasClass("header__search-btn--active")) {


    //     // } else {
    //     //     $(this).addClass("header__search-btn--active")
    //     //     $(this).siblings("input").slideDown(1)
    //     //     if ($(this).siblings('input').val()) {
    //     //         $(this).siblings("input").slideDown(1)
    //     //         $(".header__search-result").addClass("header__search-result--active")
    //     //         $("body").addClass("body-before")
    //     //     }
    //     // }

    // })

    // $(".header__search-btn-close").click(function() {
    //     $(".header__search-btn").removeClass("header__search-btn--active")
    //     $(".header__search-btn").siblings("input").slideUp(1)
    //     $(".header__search-result").removeClass("header__search-result--active")
    //     $("body").removeClass("body-before")
    //     if ($(this).parent(".header__search-btn").siblings('input').val()) {
    //         $(this).parent(".header__search-btn").siblings("input").slideUp(1)
    //         $(".header__search-result").removeClass("header__search-result--active")
    //         $("body").removeClass("body-before")
    //     }
    // })

    // $(".header__search input").keydown(function() {
    //     $(".header__search-result").addClass("header__search-result--active")
    //     $("body").addClass("body-before")
    // })

    // $(".header__search input").click(function() {
    //     if ($(this).val()) {
    //         if ($(this).siblings(".header__search-btn").hasClass("header__search-btn--active")) {
    //             $(".header__search-result").addClass("header__search-result--active")
    //             $("body").addClass("body-before")
    //         }

    //     }
    // })



    // $(".search-field input").keydown(function() {
    //     $(this).siblings(".search-field__result").addClass("search-field__result--active")
    //     $(".wrapper").addClass("body-before")

    // })

    // $(".search-field input").click(function() {
    //     if ($(this).val()) {
    //         $(".search-field__result").addClass("search-field__result--active")
    //         $(".wrapper").addClass("body-before")
    //     }
    // })




    $(document).mouseup(function(e) {
        var div = $('.header__search-result');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header__search-result").hasClass("header__search-result--active")) {
                $(".header__search-result").removeClass("header__search-result--active")
                $("body").removeClass("body-before")
                $(".header__search-btn").removeClass("header__search-btn--active")
            }
        }
    });

    $(document).mouseup(function(e) {
        var div = $('.search-field__result');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".search-field__result").hasClass("search-field__result--active")) {
                $(".search-field__result").removeClass("search-field__result--active")
                $(".wrapper").removeClass("body-before")
            }
        }
    });


    $(".footer__title").click(function() {
        $(this).toggleClass("footer__title--active")
        $(this).siblings(".footer__links").slideToggle()

    })


    $(".catalog-filter__mob").click(function() {
        $(".catalog-filter").show()
        $("body").addClass("body-before2")
    })
    $(".catalog-filter__nav-btn").click(function() {
        $(".catalog-filter").hide()
        $("body").removeClass("body-before2")
    })

    $(document).mouseup(function(e) {
        var div = $('.catalog-filter');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (window.innerWidth < 992) {
                div.hide();
                $("body").removeClass("body-before2")
            }
        }
    });

    $(".catalog__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".catalog__tab").removeClass("catalog__tab--active")
        $(this).addClass("catalog__tab--active")
        $(".catalog__content").removeClass("catalog__content--active")
        $(`.catalog__content[data-tab-path="${path}"]`).addClass("catalog__content--active")
    })


    $(".catalog__items-filter-group").click(function() {
        $(this).toggleClass("catalog__items-filter-group--active")
    })
    $(".guide__filter-group").click(function() {
        $(this).toggleClass("guide__filter-group--active")
    })


    $(".catalog-card__favourite").click(function() {
        $(this).toggleClass("catalog-card__favourite--active")
    })

    $(".guide__item-favourite").click(function() {
        $(this).toggleClass("guide__item-favourite--active")
    })

    $(".favourite__item-favourite").click(function() {
        $(this).toggleClass("favourite__item-favourite--active")
    })


    $(".lots__btn").click(function() {
        $(".lots__right").addClass("lots__right--active")
        $("body").addClass("fixed-body")
    })


    $(".lots__back").click(function() {
        closeLotRequest()
    })
    $(".lots__request-btn").click(function() {
        closeLotRequest()
    })

    $(".actual-req__item-more").click(function() {
        $(".adv-detail").addClass("adv-detail--active")

        if (window.innerWidth < 992) {
            $('body,html').animate({
                scrollTop: 0
            }, 0);
            $("body").addClass("fixed-body")
        }
    })

    $(document).mouseup(function(e) {
        var div = $('.adv-detail__inner');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (window.innerWidth > 992) {
                $(".adv-detail").removeClass("adv-detail--active")
            }
        }
    });

    $(".adv-detail__back").click(function() {
        $(".adv-detail").removeClass("adv-detail--active")
        $("body").removeClass("fixed-body")
    })

    $(".adv-detail__close").click(function() {
        $(".adv-detail").removeClass("adv-detail--active")
        $("body").removeClass("fixed-body")
    })

    function closeLotRequest() {
        $(".lots__right").removeClass("lots__right--active")
        $("body").removeClass("fixed-body")
    }

    $(".lots__request-group-title").click(function() {
        $(this).toggleClass("lots__request-group-title--active")
    })

    $(".header__btn-cabinet").click(function() {
        $(".header-lk").toggleClass("header-lk--active")
    })

    $(document).mouseup(function(e) {
        var div = $('.header-lk');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if ($(".header-lk").hasClass("header-lk--active")) {
                $(".header-lk").removeClass("header-lk--active")
            }

        }
    });

    $(".about-partner__all").click(function() {
        $(".about-partner__item").removeClass("about-partner__item--hidden")
        $(this).hide()
    })


    $(".news__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".news__tab").removeClass("news__tab--active")
        $(this).addClass("news__tab--active")
        $(".news__content").removeClass("news__content--active")
        $(`.news__content[data-tab-path="${path}"]`).addClass("news__content--active")
    })

    $(".qa__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".qa__tab").removeClass("qa__tab--active")
        $(this).addClass("qa__tab--active")
        $(".qa__content").removeClass("qa__content--active")
        $(`.qa__content[data-tab-path="${path}"]`).addClass("qa__content--active")
    })

    $(".qa__item-show").click(function() {
        $(this).toggleClass("qa__item-show--active")
        $(this).siblings(".qa__item-hidden").slideToggle(300)
    })

    $(".lk__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".lk__tab").removeClass("lk__tab--active")
        $(this).addClass("lk__tab--active")
        $(".lk__content").removeClass("lk__content--active")
        $(`.lk__content[data-tab-path="${path}"]`).addClass("lk__content--active")
    })


    $(".create-adv__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".create-adv__tab").removeClass("create-adv__tab--active")
        $(this).addClass("create-adv__tab--active")
        $(".create-adv__content").removeClass("create-adv__content--active")
        $(`.create-adv__content[data-tab-path="${path}"]`).addClass("create-adv__content--active")
    })

    $(".deal-step__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".deal-step__tab").removeClass("deal-step__tab--active")
        $(this).addClass("deal-step__tab--active")
        $(".deal-step__content").removeClass("deal-step__content--active")
        $(`.deal-step__content[data-tab-path="${path}"]`).addClass("deal-step__content--active")
    })


    $(".rating-item").click(function() {
        let ratingItem = parseInt($(this).attr("data-rating-value"))
        $(this).parent(".rating").attr("data-total-rating", ratingItem)
    })

    $(".order-group__doc-delete").click(function() {
        $(this).parents(".doc-upload").removeClass("doc-upload--uploaded")
    })

    $(".modal-not-finish__close").click(function() {
        $(".modal-not-finish").hide()
    })

    $("#sendReferal").click(function(e) {
        e.preventDefault()
        $('#refModal1').modal('hide');
        $('#refModal2').modal('show');
    })

    $("#sendPay").click(function(e) {
        e.preventDefault()
        $('#refModal3').modal('hide');
        $('#refModal4').modal('show');
    })


    $("#newDeal").click(function() {
        $(".adv-detail").removeClass("adv-detail--active")
        $("body").removeClass("fixed-body")
        $('#lotModal3').modal('show');
    })



})


function onIn() {
    if (window.innerWidth > 992) {
        let el = $(this)
        setTimeout(function() {
            if (el.is(':hover')) {
                console.log(el)
                el.children(".nav__item-show").addClass("nav__item-show--active")
            }
        }, 200);
    }
}

function onOut() {
    if (window.innerWidth > 992) {
        $(this).children(".nav__item-show").removeClass("nav__item-show--active")
    }
}