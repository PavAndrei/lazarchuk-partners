
function accordionFAQ() {

    const accordion = document.querySelector('.faq__list');
    const accordionItems = document.querySelectorAll('.faq__item');
    const accordionItemsTitle = document.querySelectorAll('.faq__item-question');
    const accordionItemsText = document.querySelectorAll('.faq__item-answer');
    const accordionItemsIcon = document.querySelectorAll('.faq__item-arrow');

    accordion.addEventListener('click', function (event) {
        event.preventDefault();

        accordionItems.forEach((item, i) => {

            if (event.target && event.target === item || event.target.parentNode === item) {

                if (accordionItemsText[i].matches('.faq__item-answer--open') && accordionItemsIcon[i].matches('.faq__item-arrow--rotated')) {
                    accordionItemsTitle[i].classList.remove('faq__item-question--colored');
                    accordionItemsText[i].classList.remove('faq__item-answer--open');
                    accordionItemsIcon[i].classList.remove('faq__item-arrow--rotated');
                } else {
                    accordionItemsTitle[i].classList.add('faq__item-question--colored');
                    accordionItemsText[i].classList.add('faq__item-answer--open');
                    accordionItemsIcon[i].classList.add('faq__item-arrow--rotated');
                }
            }
        })
    })
}

export default accordionFAQ;