/*
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

var lavitto_counter = {

	/**
	 * Initialize all counters
	 *
	 * @return void
	 */
	init: function () {
		var counterElements = document.querySelectorAll('.ce-counter');
		counterElements.forEach(function (el) {
			var lazyStart = parseInt(el.getAttribute('data-counter-lazy-start'));
			if (lazyStart === 1) {
				window.addEventListener('resize', checkViewport);
				window.addEventListener('scroll', checkViewport);
				checkViewport();
			} else {
				lavitto_counter.startCounterWithDelay(el);
			}
		});
	},

	/**
	 * Starts the counter
	 *
	 * @param el     object    Starts the counter
	 * @return       void
	 */
	startCounterWithDelay: function (el) {
		if (!el.classList.contains('counter-started')) {
			var delay = parseFloat(el.getAttribute('data-counter-delay')) * 1000;
			setTimeout(function () {
				if (el.getAttribute('data-counter-start-effect') === 'fadein') {
					var startEffectDuration = parseInt(el.getAttribute('data-counter-start-effect-duration'));
					el.style.opacity = '1';
					el.style.transition = 'opacity ' + startEffectDuration + 'ms';
				}
				lavitto_counter.startCounter(el);
			}, delay);
		}
	},

	/**
	 * Starts the counter
	 *
	 * @param el     object    Starts the counter
	 * @return       void
	 */
	startCounter: function (el) {
		el.classList.add('counter-started');
		var start = parseInt(el.getAttribute('data-counter-start'));
		var end = parseInt(el.getAttribute('data-counter-end'));
		var duration = parseFloat(el.getAttribute('data-counter-duration')) * 1000;
		var easing = el.getAttribute('data-counter-easing');
		var numberEl = el.querySelector('.number');

		var count = start;
		var startTime = null;

		function animateCounter(timestamp) {
			if (!startTime) startTime = timestamp;
			var progress = timestamp - startTime;
			var step = Math.ceil((progress / duration) * (end - start) + start);
			numberEl.textContent = lavitto_counter.numberFormat(step);
			if (progress < duration) {
				requestAnimationFrame(animateCounter);
			} else {
				numberEl.textContent = lavitto_counter.numberFormat(end);
			}
		}

		requestAnimationFrame(animateCounter);
	},

	/**
	 * Returns the number as formatted string
	 *
	 * @param number
	 * @returns {string}
	 */
	numberFormat: function (number) {
		number = (number + '').replace(/[^0-9+\-Ee.]/g, '');

		var decimals = 0, decPoint = '.', thousandsSep = '\'';
		var n = !isFinite(+number) ? 0 : +number;
		var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
		var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
		var dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
		var s = '';

		function toFixedFix(n, prec) {
			if (('' + n).indexOf('e') === -1) {
				return +(Math.round(n + 'e+' + prec) + 'e-' + prec);
			} else {
				var arr = ('' + n).split('e');
				var sig = '';
				if (+arr[1] + prec > 0) {
					sig = '+';
				}
				return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec);
			}
		}

		s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || '';
			s[1] += new Array(prec - s[1].length + 1).join('0');
		}
		return s.join(dec);
	},

	/**
	 * Checks if an element is in the viewport
	 *
	 * @param      img        Image Object
	 * @returns    boolean    returns true if the image is in viewport
	 */
	isInViewport: function (el) {
		var elementTop = el.offsetTop;
		var elementBottom = elementTop + el.offsetHeight;
		var viewportTop = window.pageYOffset || document.documentElement.scrollTop;
		var viewportBottom = viewportTop + window.innerHeight;
		return elementBottom >= viewportTop && elementTop <= viewportBottom;
	}
};

function checkViewport() {
	var counterElements = document.querySelectorAll('.ce-counter');
	counterElements.forEach(function (el) {
		if (lavitto_counter.isInViewport(el)) {
			lavitto_counter.startCounterWithDelay(el);
		}
	});
}

document.addEventListener('DOMContentLoaded', function () {
	lavitto_counter.init();
});
