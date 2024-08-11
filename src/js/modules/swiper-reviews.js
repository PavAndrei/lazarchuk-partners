
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';


function getSwiperReviews() {

    const swiperStories = new Swiper('#swiperStories', {

        loop: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,

        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },

        navigation: {
            nextEl: '.comments-button-next',
            prevEl: '.comments-button-prev',
        },
        breakpoints: {
            426: {
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 10,
            },
            661: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 20,
            },
            1141: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 30,
            },
        },

    });

};

export default getSwiperReviews;