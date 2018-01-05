$(function(){
    var heightWindow    = $(window).height();
    var widthWindow     = $(window).width();

    if(widthWindow > 767) {
        $(window).on('resize', function(){
            $('.l-content').css({
                height: heightWindow
            });
        });

        $('.l-content').css({
            height: heightWindow,
            overflow: 'auto'
        });
    }

    /* MENU SETTING COLOR */
    $('#setting').on('click', function(e){
      e.preventDefault();
      var $right = $(this).css('right');

      if($right === '-210px') {
        $(this).animate({
          right: '0'
        }, 500);
      } else if ($right === '0px') {
        $(this).animate({
          right: '-210'
        }, 500);  
      }
      
    });

    $('#setting .setting-container').on('click', function(e){
      e.stopPropagation();
    });

    /* END MENU SETTING COLOR */

    $('.list-menu-opt').on('click', function(e){
        var indexClass = $('.list-menu-opt').index(this);
        var href = $(this).attr('href');

        $('.list-menu-opt').removeClass('active');
        $('.list-menu-opt:eq(' + indexClass + ')').addClass('active');
    });

    /* LOADER */
    $(window).on('load', function(){
        $('.l-loader').css('display', 'none');
    });

    $('#hamburger-menu').on('click', function(e){
        e.preventDefault();

        $('#menu-list-mobile').slideToggle('500');
    })

    $('#menu-list-mobile li a').on('click', function(){
        $('#menu-list-mobile').fadeOut('150')
    })

    $('.change-theme').on('click', function(){
        var theme = $(this).attr('href').substring(1);

    });

});

(function($) {
    'use strict'

    var $window = $(window)
    var HeightJsZzz = function() {
        var className = '.height-js'
        setheight(className)

        $window.on('resize', function() {
            setheight(className)
        })
    }

    HeightJsZzz.VERSION = '0.01'
    HeightJsZzz.AUTHOR = 'thofikwiranata15@gmail.com'

    function setheight(target) {
        var heightWindow = $window.height()

        $(target).css('minHeight', heightWindow)
    }

    function Plugin(option) {
      return this.each(function () {
        var $this = $(this)
        var data  = $this.data('zzz.heightJs')

        if (!data) $this.data('zzz.heightJs', (data = new HeightJsZzz()))
        if (typeof option == 'string') data[option].call($this)
      })
    }

    $.fn.heightjs               = Plugin
    $.fn.heightjs.Constructor   = HeightJsZzz

    $(window).on('load', function () {
      $('.height-js').each(function () {
        var $heightjs = $(this)
        Plugin.call($heightjs, $heightjs.data())
      })
    })
})(jQuery)