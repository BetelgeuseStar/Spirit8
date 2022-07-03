"use strict"

let lazyImages = document.querySelectorAll('img[data-src]');
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src) {
			const source = img.closest('picture').querySelector('source');
			if (source.type === 'image/webp') {
				source.setAttribute('data-srcset', source.srcset);
				source.srcset = 'img/images/1x1.webp';
			}
		}
	});
}

lazyImages = document.querySelectorAll('img[data-src], source[data-srcset]');
const loadMapBlock = document.querySelector('._load-map');
const windowHeight = document.documentElement.clientHeight;



let lazyImagesPosition = [];
if (lazyImages.length > 0) {
	lazyImages.forEach(img => {
		if (img.dataset.src) {
			img.src = 'img/images/1x1.png';
			img.style.background = 'url(/img/gif/loading.gif) center / 50px no-repeat';
		}
		if (img.dataset.src || img.dataset.srcset) {
			lazyImagesPosition.push(img.getBoundingClientRect().top + pageYOffset);
			lazyScrollCheck();
		}
	});
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
	if (document.querySelectorAll('img[data-src],source[data-srcset]').length > 0) {
		lazyScrollCheck();
	}
	if (!loadMapBlock.classList.contains('_loaded')) {
		getMap();
	}
}

function lazyScrollCheck() {
	let imgIndex = lazyImagesPosition.findIndex(
		item => pageYOffset > item - windowHeight
	);
	if (imgIndex >= 0) {
		if (lazyImages[imgIndex].dataset.src) {
			lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
			lazyImages[imgIndex].removeAttribute('data-src');
		} else if (lazyImages[imgIndex].dataset.srcset) {
			lazyImages[imgIndex].srcset = lazyImages[imgIndex].dataset.srcset;
			lazyImages[imgIndex].removeAttribute('data-srcset');
		}
		delete lazyImagesPosition[imgIndex];
	}
}

// function getMap() {
// 	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
// 	if (pageYOffset > loadMapBlockPos - windowHeight) {
// 		const loadMapUrl = loadMapBlock.dataset.map;
// 		if (loadMapUrl) {
// 			loadMapBlock.insertAdjacentHTML(
// 				"beforeend",
// 				`<iframe src="$(loadMapUrl)" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
// 			);
// 			loadMapBlock.classList.add('_loaded');
// 		}
// 	}
// }

function getMap() {
	loadMapBlock.style.background = 'url(/img/gif/loading.gif) center / 50px no-repeat';
	const LoadMapScript = loadMapBlock.lastElementChild;
	const loadMapBlockPos = loadMapBlock.getBoundingClientRect().top + pageYOffset;
	if (pageYOffset > loadMapBlockPos - windowHeight) {
		const loadMapSrc = LoadMapScript.getAttribute('data-src')
		if (loadMapSrc) {
			LoadMapScript.src = loadMapSrc;
		}
		loadMapBlock.classList.add('_loaded');
	}
}