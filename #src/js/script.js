"use strict";

@@include('swiper-bundle.min.js')
@@include('swiper.js')
@@include('form.js')
@@include('sticky-header.js')
@@include('animate.js')
@@include('hystmodal.js')
@@include('webpTest.js')

// ---------------------------------------------- модалка ------------------------------------------------------

window.onload = function () {
	const myModal = new HystModal({
		linkAttributeName: "data-hystmodal",
		// настройки (не обязательно), см. API
	});
}
function loadModalContent(link) {
	if (link.classList.contains('grid-works__item')) {
		const parent = link;
		const modalWindow = document.getElementById('img').querySelector('.hystmodal__window');
		const clone = parent.cloneNode(true);
		clone.className = 'grid-works__item_modal';
		clone.removeAttribute('data-hystmodal');
		const title = clone.querySelector('.grid-works__title');
		const type = clone.querySelector('.grid-works__type');
		const descr = clone.querySelector('.grid-works__descr');
		const img = clone.querySelector('.grid-works__img');
		const icon = clone.querySelector('.grid-works__icon')
		const imgModal = clone.querySelector('.grid-works__img-modal');
		const layer = clone.querySelector('.grid-works__layer');
		const wrapper = document.createElement("div");
		wrapper.className = 'grid-works__img-wrapper_modal';
		title.className = 'grid-works__title_modal';
		type.className = 'grid-works__type_modal';
		descr.className = 'grid-works__descr_modal';
		imgModal.className = 'grid-works__img-modal_modal';
		layer.className = 'grid-works__layer_modal';
		imgModal.remove();
		img.remove();
		icon.remove();
		wrapper.prepend(imgModal);
		clone.style.display = 'flex';
		clone.prepend(wrapper);
		modalWindow.prepend(clone);
	}
}

function deleteModalContent() {
	const modalWindow = document.getElementById('img').querySelector('.hystmodal__window');
	modalWindow.childNodes.forEach(e => {
		if (e.classList === undefined) { return; }
		if (!e.classList.contains('hystmodal__close')) {
			e.remove();
		}

	});
}



// ------------------------------------------------ бургер ---------------------------------------------------------

if (document.querySelector('.burger-icon')) {
	const burgerIcon = document.querySelector('.burger-icon');
	const inner = document.querySelector('.header__inner');
	const list = document.querySelector('.header__nav');
	burgerIcon.addEventListener('click', function (e) {
		// document.querySelector('body').classList.toggle('lock');
		burgerIcon.classList.toggle('active');
		inner.classList.toggle('active');
		list.classList.toggle('active');
	})
};

// ----------------------------------------------- ползунок ---------------------------------------------------------
const nav = document.querySelector('.header__nav');
const links = nav.querySelectorAll('.nav__link');
const MenuIcon = document.querySelector('.menu-icon');
const sections = document.querySelectorAll('section');
const windowThird = window.innerHeight / 3;
document.addEventListener('scroll', function (e) {
	let yOffset = window.pageYOffset;
	let array = [];
	let sectionId
	sections.forEach(e => {
		let sectionOffset = e.getBoundingClientRect().top + yOffset - windowThird;
		if (sectionOffset < yOffset) {
			array.push(sectionOffset);
		}
	});
	let currentSection = Math.max.apply(null, array);
	sections.forEach(e => {
		let sectionOffset = e.getBoundingClientRect().top + yOffset - windowThird;
		if (sectionOffset == currentSection) {
			sectionId = e.id;
		}
	});
	links.forEach(e => {
		if (e.href.slice(e.href.indexOf('#') + 1) == sectionId) {
			links.forEach(e => {
				if (e.classList.contains('active')) {
					e.classList.remove('active');
				}
			})
			e.classList.add('active');
			moveIcon();
		}
	})
});

window.addEventListener('resize', function (event) {
	MenuIcon.style.transition = '';
	moveIcon();
	MenuIcon.style.transition = 'all 0.5s ease 0s';
});

function moveIcon() {
	let activeLink = document.querySelector('.nav__link.active')
	let linkParams = activeLink.getBoundingClientRect();
	let width = linkParams.width;
	let left = linkParams.left;
	MenuIcon.style.transition = 'all 0.5s ease 0s';
	MenuIcon.style.width = width + 'px';
	MenuIcon.style.left = left + 'px';
	MenuIcon.style.opacity = '1'
};

//------------------------------------------ анимация для портфолио --------------------------------------------------

const filterBody = document.querySelector('.filter-work');
const filterItems = filterBody.querySelectorAll('.filter-work__item');
const worksBody = document.querySelector('.grid-works');
const worksTypes = worksBody.querySelectorAll('.grid-works__type');
const worksItems = worksBody.querySelectorAll('.grid-works__item');
const arrItems = Array.from(worksItems);
const arrTypes = Array.from(worksTypes);
let animationInProgress = false;

filterBody.addEventListener('click', function (e) {
	if (animationInProgress == false) {
		if (e.target.classList.contains('filter-work__item')) {
			if (e.target.classList.contains('active')) {
				return;
			}
			animationInProgress = true;
			filterItems.forEach(e => {
				e.classList.remove('active');
			})
			e.target.classList.add('active');
			let type = e.target.innerHTML;
			let visibleItems = [];
			for (let i = 0; i < arrItems.length; i++) {
				if (arrItems[i].style.display !== 'none') {
					visibleItems.push(arrItems[i]);
				}
			}
			let animationPromise = new Promise((resolve, rejects) => {
				for (let i = 0; i < visibleItems.length; i++) {
					let item = visibleItems[i].closest('.grid-works__item');
					let delay = (100 * (visibleItems.length - i)) - 100;
					setTimeout(
						function () {
							animate({
								duration: 400,
								timing(timeFraction) {
									return quad(timeFraction);
								},
								draw(progress) {
									item.style.transform = 'translate(' + progress * 50 + 'vw, 0px)';
									item.style.opacity = (1 - progress);
									if (progress == 1) {
										item.style.display = 'none';
										if (i == 0) {
											resolve(true);
										}
									}
								}
							});
						}, delay);
				}
			});
			animationPromise.then((resolve) => {
				let visibleItems = [];
				for (let i = 0; i < arrTypes.length; i++) {
					if (arrTypes[i].innerHTML == type) {
						visibleItems.push(arrTypes[i].closest('.grid-works__item'));
					}
				}
				if (type == 'All') {
					visibleItems = arrItems;
				}
				visibleItems.forEach(e => {
					e.style.display = 'block';
					e.style.transform = 'translate(-100vw, 0px)'
				})
				for (let i = 0; i < visibleItems.length; i++) {
					let item = visibleItems[i].closest('.grid-works__item');
					let delay = (100 * (visibleItems.length - i)) - 100;
					setTimeout(
						function () {
							animate({
								duration: 400,
								timing(timeFraction) {
									return 1 - quad(1 - timeFraction);
								},
								draw(progress) {
									item.style.transform = 'translate(-' + (50 - (progress * 50)) + 'vw, 0px)';
									item.style.opacity = progress;
									if (progress == 1) {
										if (i == (visibleItems.length - 1)) {
											animationInProgress = false;
										}
									}
								}
							});
						}, delay);
				}
			});
		}
	}
});

function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}

function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}

function displayAnimation(target) {
	target.style.display = 'block';
	target.style.transform = 'translate(-100vw, 0px)'
	animate({
		duration: 500,
		timing(timeFraction) {
			return 1 - quad(1 - timeFraction);
		},
		draw(progress) {
			target.style.transform = 'translate(-' + (50 - (progress * 50)) + 'vw, 0px)';
			target.style.opacity = progress;
		}
	});
}

