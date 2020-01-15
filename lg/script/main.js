$(document).ready(function () {
    topNav();
    gnb();
});

function topNav() {
    $("#top_nav > ul > li").mouseover(function () {
        $(".lnb").stop().slideDown()
    });
    $("#top_nav > ul > li").mouseout(function () {
        $(".lnb").stop().slideUp()
    })
}

function gnb() {
    // 메인메뉴를 클릭하면 메인메뉴 애니메니이션 > 이미지슬라이드 영상슬라이드 진행
    $("#gnb li:nth-child(1)").click(function () {
        $("#gnb li").children("a").animate({
            top: 60
        }, function () {

        });
        slideImg(0);
        slideMov(0);

        $("#gnb li").children("a").delay(200).animate({
            top: 0
        }, function () {

        });
        lnb(1);
    });

    $("#gnb li:nth-child(2)").click(function () {
        $("#gnb li").children("a").animate({
            top: 60
        }, function () {

        })
        slideImg(1);
        slideMov(1);

        $("#gnb li").children("a").delay(200).animate({
            top: 0
        }, function () {

        });
        lnb(2);
    });
    $("#gnb li:nth-child(3)").click(function () {
        $("#gnb li").children("a").animate({
            top: 60
        }, function () {

        })
        slideImg(2);
        slideMov(2);

        $("#gnb li").children("a").delay(200).animate({
            top: 0
        }, function () {

        });
        lnb(3);
    });
    $("#gnb li:nth-child(4)").click(function () {
        $("#gnb li").children("a").animate({
            top: 60
        }, function () {
            // 각 버튼을 클릭시 해당 텍스트가 마지막으로~
            // 나머지 메뉴텍스트들을 재배치
        });
        slideImg(3);
        slideMov(3);

        $("#gnb li").children("a").delay(200).animate({
            top: 0
        }, function () {

        });
        lnb(4);
    });
}

function slideImg(num) {
    $("#slideList").children().eq(num).siblings().css("left","-100%");
    var tg=$("#slideList").children().eq(num);
    var tg2=$("#slideList").children().eq(num).siblings();
    // $("#slideList").children().eq(num).addClass("top").animate({
    //     left: 0
    // }, function () {
    //     $("#slideList").children().eq(num).siblings().removeClass("top").css("left", "-100%");
    // });
    gsap.to(tg, {rotation: 0, x: '100%', duration: 1,ease:"power4.out"});
    gsap.to(tg2, {rotation: 0, x: '-100%', duration: 1,ease:"power4.out"});
}

function slideMov(num) {
    $(".video").children().eq(num).siblings().removeClass("top");
    $(".video").children().eq(num).addClass("top").animate({
        left: 0
    }, function () {
        $(".video").children().eq(num).siblings().removeClass("top").css("left", "-100%");
    });
}

function lnb(num){
    var depth="#depth2_"+num;
    $(depth).delay(800).slideDown()
    $(depth).siblings().delay(400).slideUp()
}
