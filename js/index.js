$(document).ready(function() {
    $(".select").niceSelect()
        // $('input[type="tel"]').mask('+7 (999) 999-9999', { placeholder: '+7 (   )    -    ' });

    if (window.innerWidth < 992) {
        $(".main__search input").attr("placeholder", "Название или CAS")
    }

    $(".header__burger").click(function() {
        $(this).toggleClass("header__burger--active")
        $("body").toggleClass("fixed-body")
        $(".header-top").toggleClass("header-top--active")
    })


    $(".footer__title").click(function() {
        $(this).toggleClass("footer__title--active")
        $(this).siblings(".footer__links").slideToggle()
    })


    $(".catalog-filter__mob").click(function() {
        $(".catalog-filter").show()
    })
    $(".catalog-filter__nav-btn").click(function() {
        $(".catalog-filter").hide()
    })

    $(document).mouseup(function(e) {
        var div = $('.catalog-filter');
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            if (window.innerWidth < 992) {
                div.hide();
            }
        }
    });

    $(".catalog__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".catalog__tab").removeClass("catalog__tab--active")
        $(this).addClass("objects__tab--active")
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
        $(this).parents(".actual-req__item-show").siblings(".actual-req__item-hidden").slideToggle()

        if (window.innerWidth < 992) {
            $(this).parents(".actual-req__item-show").siblings(".actual-req__item-hidden").css("display", "flex")
        } else {
            $(this).parents(".actual-req__item-show").siblings(".actual-req__item-hidden").css("display", "grid")
        }
    })

    function closeLotRequest() {
        $(".lots__right").removeClass("lots__right--active")
        $("body").removeClass("fixed-body")
    }



    $(".consult__map-btn").click(function() {
        $(".consult__map").toggleClass("consult__map--active")
        $(this).hide()
    })

    $(".objects__tab").click(function() {
        let path = $(this).attr("data-tab-path")
        $(".objects__tab").removeClass("objects__tab--active")
        $(this).addClass("objects__tab--active")
        $(".objects__content").removeClass("objects__content--active")
        $(`.objects__content[data-tab-path="${path}"]`).addClass("objects__content--active")
    })

    $(".objects__all").click(function() {
        $(this).hide()
        $(".objects__item").removeClass("objects__item--hidden")
    })

    let height = window.innerHeight
    $(".scroll-up").click(function() {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
    })
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $(".scroll-up").addClass("scroll-up--active")
        } else {
            $(".scroll-up").removeClass("scroll-up--active")
        }
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