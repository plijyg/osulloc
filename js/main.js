$(document).ready(function () {

    $(".gotop").hide();
    // 스크롤을 100이상이 되었을 때 
    // 맨위로가기 버튼이 fadeIn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $(".gotop").fadeIn();
        }
        else {
            $(".gotop").fadeOut();
        }
    });

    // gotop 버튼 클릭시 맨위로 이동
    $(".gotop").click(function () {
        $("html").animate({
            scrollTop: 0
        }, 1000);
    });

    // 화면 1900 도달시 배경 검정, 3000 도달시 배경 해채
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1900 && $(this).scrollTop() < 3000) {
            $("body").addClass("on");
        } else {
            $("body").removeClass("on");
        }
    });


    const mb = new Swiper('.mb', {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction", //버튼 종류 설정
        },
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        loop: true,
        speed: 1000,
    });


    $(".play").hide();
    // .pause를 클릭했을때 
    // mb슬라이드의 자동재생(autoplay)을 멈춰라(stop)
    $(".pause").click(function () {
        mb.autoplay.stop();
        $(".pause").hide();
        $(".play").show();
    });
    $(".play").click(function () {
        mb.autoplay.start();
        $(".pause").show();
        $(".play").hide();
    });

    // news
    const news = new Swiper('.news', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },
        loop: true,
        speed: 1000,
        direction: "vertical",
    });

    // prd
    const prd_list = new Swiper('.prd_list', {
        autoplay: {
            delay: 3000, //슬라이드 대기시간 2500 -> 2.5초
            disableOnInteraction: false, //마우스로 제어한 후 자동여부(false=자동)
        },

        speed: 1000,
        loop: true,
        slidesPerView: 1.5, // 한줄에 보이는 갯수
        spaceBetween: 20, // 슬라이드 사이의 간격
        breakpoints: {
            768: {
                // 가로해상도가 768px 이상일 경우
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1400: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
        },

        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false, // 슬라이드를 드래그 했을때 나타남
            dragSize: 200, // 드래그 사이즈 크기
        },
    });

    $(".prd_list li a img:nth-child(2)").hide();
    $(".prd_list li").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });

    //tab_btn li 1,2,3,4를 클릭했을 때
    //tab_img li 1,2,3,4를 보여라(형제들은 숨겨라)

    // $(".tab_img li:not(:first-child)").hide();
    // $(".tab_btn li:nth-child(1)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on");
    //     $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
    // });
    // $(".tab_btn li:nth-child(2)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on");
    //     $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
    // });
    // $(".tab_btn li:nth-child(3)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on");
    //     $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
    // });
    // $(".tab_btn li:nth-child(4)").click(function () {
    //     $(this).addClass("on").siblings().removeClass("on");
    //     $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
    // });


    $(".tab_btn li").click(function () {
        let idx = $(this).index(); // .tab_btn li 클릭한 요소 번호 찾기
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
        $(this).addClass("on").siblings().removeClass("on");
    });

    $(".museum_list li:nth-child(1)").addClass("active");
    $(".museum_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });


});