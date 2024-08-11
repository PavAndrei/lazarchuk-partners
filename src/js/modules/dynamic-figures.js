function makeFiguresSpin() {

    const expertsParent = document.querySelector('.experts__portfolio-list');
    const expertsScroll = document.querySelector('.experts__portfolio').scrollHeight;
    let isAnimationDone = false;

    window.addEventListener('scroll', function () {

        if (isAnimationDone === true) return false;

        let windowTopScroll = window.scrollY;
        const distanceToTop = expertsParent.getBoundingClientRect().top + window.scrollY;

        if (windowTopScroll + expertsScroll >= distanceToTop) {

            outNum(2700, 'experts__list-text--helps', 100, '+');
            outNum(14, 'experts__list-text--years', 1, '+');
            outNum(94, 'experts__list-text--clients', 1, '%');
            outNum(96, 'experts__list-text--accounts', 1, '%');


            isAnimationDone = true;
        }
    });


    function outNum(num, el, step, type) {
        const time = 2200;

        let l = document.querySelector('.' + el);
        let n = 0;
        let t = Math.round(time / (num / step));
        let Interval = setInterval(() => {

            n = n + step;

            if (n >= num) {
                clearInterval(Interval);
            }

            l.innerHTML = n + type;

        }, t);
    };
};

export default makeFiguresSpin;

