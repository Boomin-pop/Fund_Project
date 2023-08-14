$(function () {
    $(".content-02 .inner-wrap .event .slide").slick({
        infinite: true,      // 무한반복
        slidesToShow: 2.5,     // 보여지는 슬라이드 개수
        slidesToScroll: 1,   // 넘어가는 슬라이드 개수
        dots: false,         // 점 네비게이션 표시
        arrows: false,     // 화살표 표시
        fade: false,            // 페이드 효과
        vertical: false,         // 상하 슬라이드
        autoplay: true,       //자동스크롤
        autoplaySpeed: 2000,  //자동스크롤 속도
        pauseOnHover: true, // 마우스 호버하면 슬라이딩 멈춤
        // prevArrow: "<a>Prev</a>",
        // nextArrow: "<a>Next</a>"
        // prevArrow: "<i class='xi-angle-left prevBtn'></i>",
        // nextArrow: "<i class='xi-angle-right nextBtn'></i>"
        // centerMode: true,
    })
})