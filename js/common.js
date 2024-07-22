$(document).ready(function () {

    //depth2
    $(".depth2,.depth2_bg").hide();
    $(".gnb > li").mouseenter(function () {
        $(this).find(".depth2").stop().fadeIn();
        $(".depth2_bg").stop().fadeIn();
    });
    $(".gnb > li").mouseleave(function () {
        $(this).find(".depth2").stop().fadeOut();
        $(".depth2_bg").stop().fadeOut();
    });

    // search
    $(".search").hide();
    $(".btn_search").click(function () {
        $(".search").fadeIn();
    });
    $(".search_close").click(function () {
        $(".search").fadeOut();
    });

    // all_wrap
    $(".all_wrap").hide();
    $(".btn_sitemap").click(function () {
        $(".all_wrap").fadeIn();
    });
    $(".all_close").click(function () {
        $(".all_wrap").fadeOut();
    });

    $(".language ul").hide();
    $(".language").click(function () {
        $(".language i").toggleClass("active");
        $(".language ul").slideToggle();
    });

    $(".popup i").click(function () {
        $(".popup").slideUp();
    });

    $(".mdepth2").hide();
    $(".mgnb > li").click(function () {
        $(this).find(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });

    $(".mgnb_wrap").hide();
    $(".btn_mgnb").click(function () {
        $(".mgnb_wrap").fadeIn();
    });
    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
    });

});