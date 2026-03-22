$(document).ready(function(){
    $("#button").click(function(){
        $("body").toggleClass("page1-dark");
        $(this).text($("body").hasClass("page1-dark") ? "Mode 1" : "Mode 2");
    });

    $("body.page2 .page2-input").on("focus", function(){
        $(this).css("background-color", "lightblue");
    });
    $("body.page2 .page2-input").on("blur", function(){
        $(this).css("background-color", "orange");
    });

    $("body.page3 .page3-title").on("click", function(){
        var $content = $(this).next(".page3-content");
        $content.slideToggle(300);
        $(this).attr("aria-expanded", $content.is(":visible"));
    });

    $("body.page3 .page3-title").on("keydown", function(e){
        if (e.key !== "Enter" && e.key !== " ") {
            return;
        }
        e.preventDefault();
        $(this).trigger("click");
    });

    $("body.page4 #page4-toggle").on("click", function(){
        var $cover = $("#page4-cover");
        var $btn = $("#page4-toggle");
        $cover.fadeToggle("normal", function(){
            $btn.text($cover.is(":visible") ? "How I feel atm" : "Cover me I guess..");
        });
    });
});
