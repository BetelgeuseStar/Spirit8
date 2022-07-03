if (document.querySelector('.burger-icon')) {
	const burgerIcon = document.querySelector('.burger-icon');
	const inner = document.querySelector('.header__inner');
	const list = document.querySelector('.nav__list');
	burgerIcon.addEventListener('click', function (e) {
		document.querySelector('body').classList.toggle('lock');
		burgerIcon.classList.toggle('active');
		inner.classList.toggle('active');
		list.classList.toggle('active');
	})
};