$('.menu-btn').on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('menu-btn_active');
    $('.nav-link').toggleClass('nav-link_active');
});
$('a').hover(function(){
    $(this).css("transition", "0.5s");
    $(this).css("transform", "scale(1.2)");}, function () {
    $(this).css("transform", "scale(1)");

});
$('.btn1').mouseenter(function () {
    $(this).css({"transition": "0.5s"});
    $(this).css({"transform": "scale(1.2)"})
}).mouseleave(function () {
    $(this).css("transform", "scale(1)")

});
$('.container-3__item_box').on('click', function(){
    $('.item1').toggleClass('item1-origin');
});
