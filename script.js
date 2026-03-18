$(document).ready(function(){
    $("#button").click(function(){
        $("#container1").toggleClass("color");
        $(this).text("Hello");
        $(this).toggleClass("clicked");
    });
});