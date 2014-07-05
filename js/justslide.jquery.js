/**
 * JustSlide by Hasin Hayder
 * Licensed under MIT License
 * Release Date: 3rd July, 2014
 * Version 0.1
 */
(function($) {
    "use strict";
    var container;
    var defaults = {
        fullWidth: "off",
        opacity: 0.6,
        imageWidth: 800,
        gap: 100,
        effect: "normal",
        easing: "linear",
        speed: "0.2s",
        delay: 0.2
    };

    $.fn.justSlide = function(options) {

        container = this;
        $(this).addClass("jscontainer");

        if ($(this).length <= 0) return false;
        var opts = $.extend(defaults, options);

        var cw = $(this).width();

        if (opts.fullWidth == "on") {
            opts.gap = Math.round(cw * 0.08); //10%
            opts.imageWidth = Math.round(cw * 0.55);
        }

        var ml = (cw - opts.imageWidth) / 2

        $(this).find("ul.js li").css({
            marginRight: opts.gap
        });


        $(this).find("ul.js li").css({
            // marginLeft: ml
            '-webkit-transition': 'all ' + opts.speed + ' ' + opts.easing,
            '-moz-transition': 'all ' + opts.speed + ' ' + opts.easing,
            'transition': 'all ' + opts.speed + ' ' + opts.easing,

            'transform': 'translate3D(' + ml + 'px,0,0)',
            '-webkit-transform': 'translate3D(' + ml + 'px,0,0)',
            '-moz-transform': 'translate3D(' + ml + 'px,0,0)'
        });


        $(this).find("li>img").each(function(i) {
            $(this).data("index", i);
            $(this).css({
                width: opts.imageWidth,
                height: "auto"
            });
        });


        $(this).find("li>img").on("click", function() {
            var index = $(this).data("index");
            var newlm = ml - index * (opts.imageWidth + opts.gap) - index * 3; //new left margin value

            if (opts.effect == "async") {
                add_delay(index);
            }

            $(container).find("ul.js li").css({
                // marginLeft: (newlm)
                'transform': 'translate3D(' + newlm + 'px,0,0)',
                '-webkit-transform': 'translate3D(' + newlm + 'px,0,0)',
                'moz-transform': 'translate3D(' + newlm + 'px,0,0)'
            });

            $(container).find("li>img").css({
                opacity: opts.opacity
            });

            $(this).css({
                opacity: "1"
            });

        });


        var slides_count = $(this).find('ul.js li').length;
        var previousIndex = 0;

        var add_delay = function(index) {
            var d = 0.0;
            if (index > previousIndex) {
                //for left to right
                for (var i = 0; i < slides_count; i++) {
                    $('ul.js :nth-child(' + (i + 1) + ')').filter('li').css({
                        'transition-delay': d + 's',
                        '-moz-transition-delay': d + 's',
                        '-webkit-transition-delay': d + 's'
                    });
                    d += opts.delay;
                }
            } else if (index < previousIndex) {
                //for right to left 
                for (var i = (slides_count - 1); i >= 0; i--) {
                    $('ul.js :nth-child(' + (i + 1) + ')').filter('li').css({
                        'transition-delay': d + 's',
                        '-moz-transition-delay': d + 's',
                        '-webkit-transition-delay': d + 's'
                    });
                    d += opts.delay;
                }
            }
            previousIndex = index;
        }

    }

})(jQuery);