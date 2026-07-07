$(function () {
    // ハンバーガーメニューをクリックした時
    $(".toggle_btn").on("click", function () {
        $("header").toggleClass("open");
        $("body").toggleClass("no_scroll");
    });
    // メニューの背景をクリックしたら閉じる
    $("nav").on("click", function () {
        $("header").removeClass("open");
        $("body").removeClass("no_scroll");
    });

    $(".slide-items").slick({
        mobileFirst: true,

        slidesToShow: 1,
        slidesToScroll: 1,

        arrows: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,

        prevArrow: `
        <button type="button" class="slick-prev">
            <img src="img/arrow-left.svg" alt="">
        </button>
    `,

        nextArrow: `
        <button type="button" class="slick-next">
            <img src="img/arrow-right.svg" alt="">
        </button>
    `,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    autoplay: false,
                    infinite: false
                }
            }
        ]
    });

    const targets = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-active');
            }
        });
    });

    targets.forEach(el => observer.observe(el));

});