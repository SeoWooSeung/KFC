$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        // dots: true,
    });

    $('.main_visual .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.visual_slide').slick('slickNext')
    });


    $('.main_visual .menu li').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.visual_slide').slick('slickGoTo', idx);
    });

});