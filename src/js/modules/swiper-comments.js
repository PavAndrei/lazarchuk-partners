
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiperComments() {

    let swiper, swiper2, swiper3, swiperHorizontal;


    // function swiperFunc() {

    const config = {
        direction: 'vertical',
        slidesPerView: 'auto',
        spaceBetween: 0,
        grabCursor: true,
        a11y: false,
        freeMode: true,
        speed: 10000,
        loop: true,
        autoplay: {
            delay: 0.0,
            disableOnInteraction: false,
        },
    };

    const configHorizontal = {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 32,
        grabCursor: true,
        a11y: false,
        freeMode: true,
        speed: 5000,
        loop: true,
        autoplay: {
            delay: 0.0,
            disableOnInteraction: false,
        }, breakpoints: {
            768: {
                slidesPerView: 2,
            }
        }
    }

    const breakpoint = window.matchMedia('(max-width:1261px)');


    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            swiperHorizontal = new Swiper('#comments-horizontal', configHorizontal);
            if (swiper !== undefined) swiper.destroy(true, true);
            if (swiper2 !== undefined) swiper2.destroy(true, true);
            if (swiper3 !== undefined) swiper3.destroy(true, true);
            return;
        } else if (breakpoint.matches === false) {
            swiper = new Swiper('#comments__col-1', config);
            swiper2 = new Swiper('#comments__col-2', config);
            swiper3 = new Swiper('#comments__col-3', config);
            if (swiperHorizontal !== undefined) swiperHorizontal.destroy(true, true);
            return;
        }
    };

    breakpoint.addListener(breakpointChecker)
    breakpointChecker();

}

export default getSwiperComments;
