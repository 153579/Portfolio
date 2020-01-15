$(document).ready(function () {
    body();
})

function body() {
    $("#start").delay(1000).fadeOut(function () {
        $("#header_nav").fadeIn(2500)
        $("#intro").fadeIn(500)
        $("#img").fadeIn(6000)
        $("#section_cont").fadeIn(3500)
    })
}