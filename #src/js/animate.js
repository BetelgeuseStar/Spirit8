function animate({ timing, draw, duration }) {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
// пример написания
// animate({
// 	duration: 1000,
// 	timing(timeFraction) {
// 		return timeFraction;
// 	},
// 	draw(progress) {
// 		elem.style.width = progress * 100 + '%';
// 	}
// });