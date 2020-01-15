$(document).ready(function () {
    body();
    background();
})

function body() {
    $("#start").delay(1000).fadeOut(function () {
        $("#header_nav").fadeIn(2500)
        $("#intro").fadeIn(500)
        $("#pen").fadeIn(6000)
        $("#graphic_Img").fadeIn(3500)
    })
}
