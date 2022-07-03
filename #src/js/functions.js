/*-------Menu burger------*/

// if (document.querySelector('.burger-icon')) {
// 	const burgerIcon = document.querySelector('.burger-icon');
// 	const inner = document.querySelector('.header__inner');
// 	burgerIcon.addEventListener('click', function (e) {
// 		//document.querySelector('body').classList.toggle('lock');
// 		burgerIcon.classList.toggle('active');
// 		inner.classList.toggle('active');
// 		//document.querySelector('.nav').classList.toggle('active');
// 	})
// };
/*-------Menu burger over------*/
/*---------ibg--------*/

function ibg() {
	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

/*-------ibg over------*/


