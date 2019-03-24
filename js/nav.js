var nav = document.getElementById("nav")
var header = document.getElementById("header")

nav.addEventListener("click", function(){
    nav.classList.toggle("open")
    header.classList.toggle("header-open")
});

$(".hometc").click(function(){
    $('html,body').animate({
        scrollTop: $(".profile").offset().top},
        'slow');
});
$(".aboutc").click(function(){
    $('html,body').animate({
        scrollTop: $(".details").offset().top},
        'slow');
});
$(".doggoc").click(function(){
    $('html,body').animate({
        scrollTop: $(".dogs").offset().top},
        'slow');
});
$(".dancec").click(function(){
    $('html,body').animate({
        scrollTop: $(".dance").offset().top},
        'slow');
});
$(".resumec").click(function(){
    $('html,body').animate({
        scrollTop: $(".resume").offset().top},
        'slow');
});