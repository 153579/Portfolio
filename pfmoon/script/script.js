$(document).ready(function () {
    burger();
    lnb();
    backbt();
    Intro();
    hover();
});

function burger(){
    $("#burger").click(function(){
        if($(this).hasClass("on")) {
            $(this).removeClass("on");
            $("#allMenu").css("height",0);
            $("#cont1, cont2, cont3").removeClass("active");
            $("#year").slideDown(500)
            $("#moon2").hide().delay(1000).removeClass("Down").fadeIn();

        } else {
            $(this).addClass("on");
            $("html,body").css("overflow","hidden");
            $("#allMenu").css("height","100%");
            $("#cont1, cont2, cont3").addClass("active");
            $("#year").slideUp(500);
            $("#moon2").addClass("Down")
            // $("#cont1, #cont2, #cont3").fadeOut();
        } 
    });
}

function lnb() {
    $("#allMenu > ul > li:nth-child(1)").click(function () {
        // $("#slideWrap").fadeOut()
        $("#cont3").fadeOut()
        $("#cont1").delay(500).fadeIn()
        // $("#cont1_1").css("display","none")
        $("#cont1_2").css("display","none")
        $("#cont1_3").css("display","none")
        $("#cont1_4").css("display","none")
        // $("#name").slideUp(400)
    })
    $("#allMenu > ul > li:nth-child(2)").click(function () {
        $("#cont1").fadeOut()
        $("#cont1_1").fadeOut()
        $("#cont1_2").fadeOut()
        $("#cont1_3").fadeOut()
        $("#cont3").fadeOut()
        $("#slideWrap").delay(500).fadeIn()
        $(".slider-container").fadeIn()
        $("#backbt").fadeIn()
        // $("#name").slideUp(400)
    })
    $("#allMenu > ul > li:nth-child(3)").click(function () {
        $("#cont1").fadeOut()
        $("#slideWrap").fadeOut()
        $("#cont3").fadeIn()
        $("#backbt").fadeIn()
        $("#burger").css("display","none");
        // $("#name").slideUp(400)
    })
}

function backbt(){
    $("#backbt").click(function(){
        $(".slider-container").fadeOut()
        $("#cont3").fadeOut()
        $("#backbt").fadeOut()
        $("#burger").fadeIn()
    })
}


function Intro(){
    $("#cont1 > a").click(function(){
        $("#cont1").fadeOut(700)
        $("#cont1_2").delay(400).fadeIn(700)
    })
    $("#cont1_2 > a").click(function(){
        $("#cont1_2").fadeOut(700)
        $("#cont1_3").delay(400).fadeIn(700)
    })
    $("#cont1_3 > a").click(function(){
        $("#cont1_3").fadeOut(700)
        $("#cont1_4").delay(400).fadeIn(700)
    })
    $("#cont1_4 > a").click(function(){
        $("#cont1").fadeOut(700)
        $("#cont1_2").fadeOut(700)
        $("#cont1_3").fadeOut(700)
        $("#cont1_4").fadeOut(700)
    })
}

function hover(){
    $("#cont1 > img:nth-child(2)").mouseover(function(){
        $("#cont1_1").stop().delay(300).fadeIn()
        $("#moon").delay(300).fadeOut()
    })
    $("#cont1 > img:nth-child(2)").mouseout(function(){
        $("#cont1_1").delay(300).fadeOut()
        $("#moon").delay(300).fadeIn()
    })
}



