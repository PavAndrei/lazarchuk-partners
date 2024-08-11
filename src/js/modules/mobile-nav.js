function mobileNav() {

	const mobileMenuBtn = document.querySelector('.header__mobile-btn'),
		mobileMenu = document.querySelector('.header__mobile-menu');

	mobileMenuBtn.addEventListener('click', function () {

		mobileMenuBtn.classList.toggle('header__mobile-btn--open');
		mobileMenu.classList.toggle('header__mobile-menu--open');
		document.body.classList.toggle('no-scroll');

	})

}

export default mobileNav;