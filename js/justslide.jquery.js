/**
 * Created by storyteller on 7/3/14.
 */
(function($){
    "just strict";
    var container;
    var defaults = {
        fullWidth:"off",
        animationDuration:"1s",
        opacity:0.6,
        imageWidth:800,
        gap:100
    };


    $.fn.justSlide = function(options){

        container = this;

        if($(this).length<=0) return false;
        var opts = $.extend(defaults,options);

        var cw = $(this).width();

        if (opts.fullWidth=="on"){
            opts.gap = Math.round(cw*0.08); //10%
            opts.imageWidth=Math.round(cw*0.55);
        }

        var ml = (cw-opts.imageWidth)/2

        $(this).find("ul li").css({
            marginRight:opts.gap
        });

        $(this).find("ul").css({
            marginLeft:ml
        });

        $(this).find("li>img").each(function (i) {
            $(this).data("index", i);
            $(this).css({
                width:opts.imageWidth,
                height:"auto"
            })
        })

        $(this).find("li>img").on("click",function () {
            var index = $(this).data("index");
            var newlm = ml - index * (opts.imageWidth+opts.gap) - index*3; //new left margin value

            $(container).find("ul.ls").css({
                marginLeft: (newlm)
            });

            $(container).find("li>img").css({
                opacity: opts.opacity
            });

            $(this).css({
                opacity: "1"
            });
        });

    }

    $.fn.clickHandler = function(){

    }

})(jQuery);