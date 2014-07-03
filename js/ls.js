/**
 * Created by hasinhayder on 7/3/14.
 */
(function ($) {
    "use strict"
    $(document).ready(function () {

        var cw = $("#leanslider").width(); //container width
        var iw = 800; //image width
        var ns = cw - iw; //negative space
        var lm = ns / 2; //left margin
        var mr=100; //margin-right of each li


        $("#leanslider ul.ls").css({
            marginLeft: lm
        });


        $("#leanslider li>img").each(function (i) {
            $(this).data("index", i);
        })

        $("#leanslider li>img").bind("click", function () {
            var index = $(this).data("index");
            var newlm = lm - index * (iw+mr); //new left margin value

            $("#leanslider ul.ls").css({
                marginLeft: newlm
            });

            $("#leanslider li>img").css({
                opacity: "0.6"
            });

            $(this).css({
                opacity: "1"
            });
        })
    });
})(jQuery);