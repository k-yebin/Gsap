$(function () {
    Splitting(); //S는 꼭 대문자!!
    // 개발자 모드로 봤을 때 .word는 단어에 적용 , .char은 낱글자에 적용됨
})

/* 02. header영역 스크롤 방향 이벤트 */
$(function () {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function () {
        var nowScrollTop = $(window).scrollTop();

        if (nowScrollTop > prevScrollTop) {
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }

        prevScrollTop = nowScrollTop;
        //nowScrollTop값을 prevScrollTop에 저장하여라
    })
})

$(function () {
    $(".animate").scrolla({
        mobile: true,
        once: false, /* (반복사용) */
    })
})