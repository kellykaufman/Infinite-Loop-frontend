;(function ($) {
  'use strict';

  $(window).on('load', function() {
  $("#preloader").delay(2000).fadeOut("slow");
});


  //////////////////////////////////////////////////
  ///////////////// Helper variables
  // ///////////////////////////////////////////////
  var $window = $(window),
    $windowHeight = $(window).height(),
    $windowWidth = $(window).width(),
    $document = $(document);



  //////////////////////////////////////////////////
  /////////////////  Helper function 
  // ///////////////////////////////////////////////  

/////////////////////////////////////////////////
// Dynamic Script Loading  
// /////////////////////////////////////////////// 
  function loadScript(url, callback){
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState){  
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}
  

  // Check if dom element really exits before call
  $.fn.exists = function () {
    return this.length > 0;
  };




  // ////////////////////////////////////////////////
  //////// Fury helper functions 
  // ///////////////////////////////////////////////   
  var furyHelper = {

    // Accordion state
    accordionState: function () {
      $('.accordion__title').on('click', function () {
        $(this).parent().addClass('active');
        $(this).parent().siblings('.accordion__item.active').removeClass('active');


      });
    },

    // Header on scroll apperaance
    navOnScrollApperaance: function () {
      var $header = $('.site-header');
      if ($header.length) {
        $window.scroll(function () {
          ($window.scrollTop() > 50) ? $header.addClass('header-scrolling'): $header.removeClass('header-scrolling');
        });
      }

    },


    // Smooth scroll to target element

    scrollTo: function () {
      $('[data-scrollto]').on('click', function () {
        var id = '#' + $(this).data('scrollto');
        if ($(id).length > 0) {
          var offset = 0;
          if ($('.header').length) {
            offset = $('.header').height();
          }
          $('html').animate({
            scrollTop: $(id).offset().top
          }, 700);
        }
        return false;
      });
    },


    // Show nested dropdown 
    showNavbarDropdown: function () {
      $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        e.preventDefault();
        if (!$(this).next().hasClass('show')) {
          $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
        }
        var $subMenu = $(this).next('.dropdown-menu');
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
          $('.dropdown-submenu .show').removeClass('show');
        });


        return false;
      });
    },


    // Search form toggler
    searchFormToggle: function () {

      $('.site-search-toggler').on('click', function (e) {
        e.preventDefault();
        $('.site-search').addClass('open');
      });
      $('.site-search__close').on('click', function () {
        $('.site-search').removeClass('open');
      });

    },



    //input focus shadow
    inputGroupFocus: function () {
      $('.input-group--focus .form-control').on('focus', function () {
        $(this).parent('.input-group').addClass('state--focus');
      }).on('blur', function () {
        $(this).parent('.input-group').removeClass('state--focus');
      });
    },



    //input focus state
    inputFocus: function () {
      $('.input-group-focus .form-control').focus(function () {
        $('.input-group-focus.active').removeClass('active');
        $(this).parent('.input-group-focus').addClass('active');
      })
    },


    //touchSpin
    touchSpin: function () {
      $('.ec-touchspin').each(function () {
        var $this = $(this);
        var $plus = $this.find('.ec-touchspin__plus');
        var $minus = $this.find('.ec-touchspin__minus');
        var $input = $this.find('.ec-touchspin__result');
        var $inputVal = parseInt($input.val());

        $input.on('change', function () {
          $inputVal = parseInt($(this).val());
        });

        $plus.on('click', function () {
          $inputVal += 1;
          $input.val($inputVal);
        });

        $minus.on('click', function () {
          if ($inputVal > 0) {
            $inputVal -= 1;
            $input.val($inputVal);
          }
          return;
        });


      });


    }, // End touchSpin


    //ecRating
    ecRating: function () {
      if ($('.ec-rating').exists()) {

        $('.ec-rating').each(function () {
          var $this = $(this),
            $target = $this.find('> *'),
            stateClass = $this.data('state-class');

          $target.on('mouseenter', function () {
            $(this).addClass(stateClass);
            $(this).prevAll().addClass(stateClass);
            $(this).nextAll().not('.active').removeClass(stateClass);
          });

          $target.on('mouseleave', function () {
            $target.not('.active').removeClass(stateClass);
          });

          $target.on('click', function () {
            $(this).addClass('active ' + stateClass);
            $(this).prevAll().addClass('active ' + stateClass);
            $(this).nextAll().removeClass('active ' + stateClass);
          });
        });


      } else {
        return;
      } // End if

    }, // End ecRating


    /// Scroll to top
    scrollTop: function () {
      var documentOffsetHeight = document.body.offsetHeight;
      $(window).on('scroll', function () {
        if ($(this).scrollTop() > 600) {
          $('.scroll-top').addClass('active');
        } else {
          $('.scroll-top').removeClass('active');
        }
      });

      $('.scroll-top').on('click', function () {
        $("html, body").animate({
          scrollTop: 0
        }, 500);
        return false;
      });
    },

    // hamburger toggle 

    hamburgerToggle: function(){
      $('.hamburger').on('click', function(){
        $(this).toggleClass('is-active');
      });
    },
    



  }; // END furyHelper
  // ////////////////////////////////////////////////
  // init all furyHelper
  // ///////////////////////////////////////////////


  $(document).ready(function () {
    furyHelper.accordionState();
    furyHelper.navOnScrollApperaance();
    furyHelper.scrollTo();
    furyHelper.searchFormToggle();
    furyHelper.inputFocus();
    furyHelper.touchSpin();
    furyHelper.showNavbarDropdown()
    furyHelper.ecRating();
    furyHelper.scrollTop();
    furyHelper.hamburgerToggle();
  });






  // ////////////////////////////////////////////////
  //////// Components/furyComponents master object 
  // ///////////////////////////////////////////////  
  var furyComponents = {


    // ////////////////////////////////////////////////
    // typed js
    // ///////////////////////////////////////////////
    typedJs: function () {
      if ($('[data-typed-text]').exists()) {
        var typedTxt = $('[data-typed-text]').data('typed-text').split(',');
        var typed = new Typed('[data-typed-text]', {
          strings: typedTxt, // string need to type
          typeSpeed: 80, // type speed in milliseconds
          loop: true, // loop after last string is typed
          backSpeed: 80, // backspacing speed in milliseconds
          showCursor: false // show cursor
        });
      }
      return;
    },


    // ////////////////////////////////////////////////
    // Isotop
    // ///////////////////////////////////////////////
    isotop: function () {
      if ($('.isotop-filter').exists()) {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js', function () {
          // Init isotop. default layout mode is masonry
          var isotopEl = $('.isotop-filter');
          isotopEl.imagesLoaded(function () {
            isotopEl.isotope({
              percentPosition: true
            });
          });

          // Filter isotop
          var filterNav = $('.nav-isotop-filter');
          filterNav.on('click', 'a.nav-link', function (e) {
            e.preventDefault();
            var filterVal = $(this).data('filter');
            isotopEl.isotope({
              filter: filterVal,
            });
            filterNav.find('.active').removeClass('active');
            $(this).addClass('active');
          });

        });
      }
      return;
    },



    // ////////////////////////////////////////////////
    // masonry
    // ///////////////////////////////////////////////
    masonry: function () {
      if ($('.js-masonry').exists()) {
        loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js', function () {
          var isotopEl = $('.js-masonry');
          isotopEl.imagesLoaded(function () {
            isotopEl.masonry({
              // options
              itemSelector: '.masonry-item'
            });
          });

        });
      }
      return;
    },




    // ////////////////////////////////////////////////
    // Fancybox 
    // ///////////////////////////////////////////////
    fancyBox: function () {
      if ($('[data-fancybox]').exists()) {
        $("[data-fancybox]").fancybox({
          animationEffect: "zoom-in-out",
          buttons: [
            "fullScreen",
            "zoom",
            //"share",
            //"download",
            "thumbs",
            "close"
          ],
        });
      }
      return;
    },



    // ////////////////////////////////////////////////
    // Aos animation 
    // ///////////////////////////////////////////////
    AOS: function () {
      if ($('[data-aos]').exists()) {
        AOS.init({          
          easing: 'ease-out-back',
          duration: 1000,
          disable: function() {
              var maxWidth = 991;
              return window.innerWidth < maxWidth;
            }
        });
      }
      return;
    },



    // ////////////////////////////////////////////////
    // slick carousel 
    // ///////////////////////////////////////////////
    slickCarousel: function () {
      $('.slick-carousel').slick({
        arrows: false,
        accessibility: false,
        prevArrow: '<span class="slick-arrow slick-prev"> <i class="fas fa-arrow-left font-size-14"></i></span>',
        nextArrow: '<span class="slick-arrow slick-next"> <i class="fas fa-arrow-right font-size-14"></i></span>',
        customPaging: function () {
          return "<span class='slick-dot'></span>";
        }
      });
    },

    // ////////////////////////////////////////////////
    // slick margin 
    // ///////////////////////////////////////////////
    slickMargin: function () {
      $('[data-slick-margin]').each(function () {
        var margin = $(this).data('slick-margin');
        $(this).find('.slick-list').css({
          marginLeft: -margin,
          marginRight: -margin
        });

        $(this).find('.slick-slide').css({
          marginLeft: margin,
          marginRight: margin
        });

      });
    },

    // // ////////////////////////////////////////////////
    // // slick padding 
    // // ///////////////////////////////////////////////
    slickPadding: function () {
      $('[data-slick-padding]').each(function () {
        var slickPadding = $(this).data('slick-padding');
        $(this).find('.slick-list').css({
          paddingTop: slickPadding,
          paddingBottom: slickPadding,
        });
      });
    },

    // ////////////////////////////////////////////////
    // Parallax
    // ///////////////////////////////////////////////
    parallax: function () {
      $('.jarallax').exists() ? $('.jarallax').jarallax() : null;
    },



    // ////////////////////////////////////////////////
    // countDown
    // ///////////////////////////////////////////////
    countDown: function () {
      if ($('[data-countdown]').exists()) {
        $('[data-countdown]').each(function () {
          var $this = $(this),
            finalDate = $(this).data('countdown');
          $this.countdown(finalDate, function (event) {
            if ($this.find('.countdown-days').length > 0) {
              $this.find('.countdown-days').text(event.strftime('%D'));
            }
            if ($this.find('.countdown-hours').length > 0) {
              $this.find('.countdown-hours').text(event.strftime('%H'));
            }
            if ($this.find('.countdown-minutes').length > 0) {
              $this.find('.countdown-minutes').text(event.strftime('%M'));
            }
            if ($this.find('.countdown-seconds').length > 0) {
              $this.find('.countdown-seconds').text(event.strftime('%S'));
            }
          });
        });
      } // End if

    }, // END countDown



    // ////////////////////////////////////////////////
    // counterUp
    // ///////////////////////////////////////////////
    counterUp: function () {
      if ($('.counter').exists()) {
        var $elm = $('.counter');
        appear({
          elements: function elements() {
            return $elm;
          },
          appear: function appear(el) {
            $(el).countTo({
              speed: 3000
            });
          },

        });

      } // End if

    }

  } // END furyComponents obj  




  // ////////////////////////////////////////////////
  // init all furyComponents
  // ///////////////////////////////////////////////
  $(document).ready(function () {
    furyComponents.typedJs();
    furyComponents.isotop();
    furyComponents.masonry();
    furyComponents.slickCarousel();
    furyComponents.slickMargin();
    furyComponents.slickPadding();
    furyComponents.fancyBox();
    //furyComponents.dateTimePicker();
    furyComponents.parallax();
    furyComponents.countDown();
    furyComponents.counterUp();
  });

  $(window).on('load', function () {
    furyComponents.AOS();
  });

  

  // ////////////////////////////////////////////////
  // Init bootstrap tooltip and popover
  // ///////////////////////////////////////////////  
  $('[data-toggle="tooltip"]').each(function () {
    var $this = $(this);
    var skin_color = $this.data('skin');
    $this.tooltip({
      template: '<div class="tooltip' + " " + ((skin_color) ? 'tooltip-' + skin_color : " ") + '"' + ' role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'
    });
  });

  $('[data-toggle="tooltip"]').on('click', function () {
    $('[data-toggle="tooltip"]').not(this).tooltip('hide');
  });

  $('[data-toggle="popover"]').each(function () {
    var $this = $(this);
    var skin_color = $this.data('skin');
    $this.popover({
      template: '<div class="popover' + " " + ((skin_color) ? 'popover-' + skin_color : " ") + '"' + 'role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    });
  });

  $('[data-toggle="popover"]').on('click', function () {
    $('[data-toggle="popover"]').not(this).popover('hide');
  });


}(jQuery));