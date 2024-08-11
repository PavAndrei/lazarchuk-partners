
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiperExperts() {
    const swiper1 = new Swiper('.swiper-experts', {
        loop: false,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.experts-button-next',
            prevEl: '.experts-button-prev',
        },
        breakpoints: {
            661: {
                slidesPerView: 2,
            },
            821: {
                slidesPerView: 3,
            },
            1141: {
                slidesPerView: 4,
            },
        },
    });
}

export default getSwiperExperts;