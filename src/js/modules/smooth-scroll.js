import ScrollReveal from 'scrollreveal';

function showElementsSmoothly() {

    ScrollReveal({
        distance: '50px',
        duration: 2400
    })

    ScrollReveal().reveal('.header__adress, .steps__list, .promo__title, .why-us__title, .benefits__title, .consultancy__title, .plan__title, .business__title, .experts__title, .experts__slider, .start__title, .citizenship__title, .offers__title, .tools__title, .comments__col-ratings, .comments-horizontal__slider, .faq__title, .footer__logo, .footer__info', {
        origin: 'top',
    });

    ScrollReveal().reveal('.header__phone, .hero__picture, .problems__info, .benefits__list, .consultancy__registration-form, .plan__picture, .business__list, .experts__director, .start__row, .start__registration, .citizenship__picture, .offers__content, .payment__list, .comments__swiper, .contacts__map, .footer__contacts', {
        origin: 'right',
    });

    ScrollReveal().reveal('.promo__popup, .why-us__box, .consultancy__promo-picture, .consultancy__employees, .plan__btn, .citizenship__info-text, .tools__grid, .comments__reviews, .faq__list, .footer, .footer__terms, .footer__copyright, .footer__woriking-hours', {
        origin: 'bottom',
    });

    ScrollReveal().reveal('.header__logo, .hero__content, .problems__picture, .why-us__text, .consultancy__promo-content, .plan__list, .business__picture, .experts__portfolio-list, .start__subtitle, .start__list, .citizenship__subtitle, .citizenship__form, .offers__subtitle, .payment__title, .tools__subtitle, .comments__title, .contacts__info', {
        origin: 'left',
    });
}

export default showElementsSmoothly;