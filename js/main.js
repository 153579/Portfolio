$(document).ready(function () {
    background();
    ftnav();
    loading();
})

function background() {
    $("#span1 > p").mouseover(function () {
        $("body").stop().animate({
            backgroundColor: "#000"
        })
        $("#span > p #span1 > p, p, a").css("color", "#fff")
        $("#footer").stop().fadeOut(300)
        $("#header p:nth-child(1)").stop().fadeOut(function () {
            $("#header p:nth-child(2)").stop().fadeIn()
        })
        $(".contbar").stop().animate({
            width: 21.5 + "%"
        }, 1000)
    })
    $("#span2 > p").mouseover(function () {
        $("body").stop().animate({
            backgroundColor: "#000"
        })
        $("#span > p #span2 > p, p, a").css("color", "#fff")
        $("#footer").stop().fadeOut(300)
        $("#header p:nth-child(1)").stop().fadeOut(function () {
            $("#header p:nth-child(2)").stop().fadeIn()
        })
        $(".contbar1").stop().animate({
            width: 27 + "%"
        }, 1000)
    })
    $("#span1 > p").mouseout(function () {
        $("body").stop().animate({
            backgroundColor: "#fff"
        })
        $("#span > p, #span1 > p, p, a").css("color", "#464646")
        $("#footer").stop().fadeIn(300)
        $("#header p:nth-child(2)").stop().fadeOut(function () {
            $("#header p:nth-child(1)").stop().fadeIn()
        })
        $(".contbar").stop().animate({
            width: 0 + "%"
        }, 700)
    })
    $("#span2 > p").mouseout(function () {
        $("body").stop().animate({
            backgroundColor: "#fff"
        })
        $("#span > p, #span2 > p, p, a").css("color", "#464646")
        $("#footer").stop().fadeIn(300)
        $("#header p:nth-child(2)").stop().fadeOut(function () {
            $("#header p:nth-child(1)").stop().fadeIn()
        })
        $(".contbar1").stop().animate({
            width: 0 + "%"
        }, 700)
    })
}


function ftnav() {
    $(".ftcont").hover(function () {
        $(this).children("div").stop().animate({
            width: 10 + "%"
        })
    })
    $(".ftcont").mouseout(function () {
        $(this).children("div").stop().animate({
            width: 0 + "%"
        })
    })
}


function loading() {
    $("#start img").fadeOut(1500)
    $("#start").fadeOut(4000)
}