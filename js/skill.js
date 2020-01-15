$(document).ready(function () {
    body();
})

function body() {
    $("#start").delay(1000).fadeOut(function () {
        $("#header_nav").fadeIn(2500)
        $("#intro").fadeIn(500)
        $("#cont1").fadeIn(3000)
    })
}