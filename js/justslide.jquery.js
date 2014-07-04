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
        gap: 100
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

        var ml = (cw - opts.imageWidth) / 2 ; //margin-left value for centering the first <li> item

        $(this).find("ul.js li").css({
            marginRight: opts.gap
        });

        $(this).find("ul.js").css({
            // marginLeft: ml
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

            $(container).find("ul.js").css({
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

    }

})(jQuery);