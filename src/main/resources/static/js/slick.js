$(function(){
    $('#subImgArea').slick({
                dots: false,
                infinite: false,
                autoplay: false,
                // autoplaySpeed: 2000,
                slidesToShow: 3,
                arrows: true ,   // 화살표 표시
                slidesToScroll: 3,
                prevArrow: "<div style='line-height: 211px; position:relative; z-index: 1; float:left'><i class='xi-angle-left prevBtn fs-3 fw-bolder rounded-circle bg-gray'></i></div>",
                nextArrow:	"<i class='xi-angle-right nextBtn fs-3 fw-bolder' style='line-height: 211px'></i>"

            });
});