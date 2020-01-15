$(document).ready(function () {
    body();
    fade();
    hover();
})
//스타트가 끝나면 서서히 등장함
function body() {
    $("#start").delay(1000).fadeOut(function () {
        $("#header_nav").fadeIn(2500)
        $("#intro").fadeIn(500)
        $("#pen").fadeIn(6000)
    })
}


//스크롤 내릴시 이미지들 등장
function fade(){
    $(window).scroll( function(){
        /* 2 */
        $('#graphic_Img').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* 3 */
            if( bottom_of_window > bottom_of_object/2 ){
                $(this).animate({'opacity':'1'},2000);
            }
        }); 
    });
}

function hover(){
    $(".img1, .img2, .img3, .img4, .img5, .img6").hover(function(){
        $(this).children("div").stop().fadeIn()
    })
    $(".img1, .img2, .img3, .img4, .img5, .img6").mouseout(function(){
        $(this).children("div").stop().fadeOut()
    })
}