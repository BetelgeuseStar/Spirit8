if (document.querySelector('.team__slider')) {
	new Swiper('.team__slider', {
		autoHeight: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		preloadImages: false,
		parallax: true,
		pagination: {
			el: '.controls-team__dotts',
			clickable: true,
			type: 'bullets',
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			991: {
				slidesPerView: 3,
			},
			767: {
				slidesPerView: 2,
			}
		}
	});
}

if (document.querySelector('.clients__slider')) {
	new Swiper('.clients__slider', {
		autoHeight: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		watchOverflow: true,
		speed: 800,
		preloadImages: false,
		parallax: true,
		pagination: {
			el: '.controls-clients__dotts',
			clickable: true,
			type: 'bullets',
		},
		breakpoints: {
			1200: {
				slidesPerView: 5,
			},
			991: {
				slidesPerView: 4,
			},
			767: {
				slidesPerView: 3,
			},
			600: {
				slidesPerView: 2,
			}
		}
	});
}

if (document.querySelector('.testimonials__slider')) {
	new Swiper('.testimonials__slider', {
		autoHeight: false,
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 400,
		watchOverflow: true,
		speed: 800,
		preloadImages: false,
		parallax: true,
		pagination: {
			el: '.controls-testimonials__dotts',
			clickable: true,
			type: 'bullets',
		},
	});
}


// if (document.querySelector('.news__content')) {
// 	new Swiper('.news__content', {
// 		autoHeight: true,
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		watchOverflow: true,
// 		speed: 800,
// 		preloadImages: false,
// 		parallax: true,
// 		pagination: {
// 			el: '.controls-news__dotts',
// 			clickable: true,
// 			type: 'bullets',
// 		},
// 		navigation: {
// 			nextEl: '.news__content .controls-news__next',
// 			prevEl: '.news__content .controls-news__prev',
// 		},
// 		breakpoints: {
// 			992: {
// 				slidesPerView: 2,
// 				pagination: {
// 					type: 'fraction',
// 				},
// 			}
// 		}
// 	});
// }

// if (document.querySelector('.shares__content')) {
// 	new Swiper('.shares__content', {
// 		autoHeight: true,
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		watchOverflow: true,
// 		speed: 800,
// 		preloadImages: false,
// 		parallax: true,
// 		pagination: {
// 			el: '.controls-shares__dotts',
// 			clickable: true,
// 			type: 'bullets',
// 		},
// 		navigation: {
// 			nextEl: '.shares__content .controls-shares__next',
// 			prevEl: '.shares__content .controls-shares__prev',
// 		},
// 		breakpoints: {
// 			992: {
// 				slidesPerView: 2,
// 				pagination: {
// 					type: 'fraction',
// 				},
// 			}
// 		}
// 	});
// }

// if (document.querySelector('.production__slider')) {
// 	new Swiper('.production__slider', {
// 		autoHeight: true,
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		watchOverflow: false,
// 		speed: 800,
// 		preloadImages: false,
// 		parallax: true,
// 		pagination: {
// 			el: '.controls-production__dotts',
// 			clickable: true,
// 			type: 'bullets',
// 		},
// 		navigation: {
// 			nextEl: '.production__slider .controls-production__next',
// 			prevEl: '.production__slider .controls-production__prev',
// 		},
// 		breakpoints: {
// 			1250: {
// 				slidesPerView: 3,
// 			},
// 			992: {
// 				slidesPerView: 2,
// 			}
// 		}
// 	});
// }

// if (document.querySelector('.partners__slider')) {
// 	new Swiper('.partners__slider', {
// 		autoHeight: true,
// 		observer: true,
// 		observeParents: true,
// 		slidesPerView: 1,
// 		watchOverflow: false,
// 		speed: 800,
// 		preloadImages: false,
// 		parallax: true,
// 		pagination: {
// 			el: '.controls-partners__dotts',
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: '.partners__slider .controls-partners__next',
// 			prevEl: '.partners__slider .controls-partners__prev',
// 		},
// 		breakpoints: {
// 			1151: {
// 				slidesPerView: 4,
// 			},
// 			992: {
// 				slidesPerView: 3,
// 			},
// 			660: {
// 				slidesPerView: 2,
// 			},
// 		}
// 	});
// }

