/*
 * This file is part of the "counter" Extension for TYPO3 CMS.
 *
 * For the full copyright and license information, please read the
 * LICENSE file that was distributed with this source code.
 */

let lavitto_counter = {

	/**
	 * Initialize all counters
	 *
	 * @return void
	 */
	init: function () {
		$('.ce-counter').each(function () {
			let el = $(this);
			let lazyStart = parseInt(el.data('counter-lazy-start'));
			if (lazyStart === 1) {
				$(window).on('resize scroll', function () {
					if (lavitto_counter.isInViewport(el) === true) {
						lavitto_counter.startCounterWithDelay(el);
					}
				});
				if (lavitto_counter.isInViewport(el) === true) {
					lavitto_counter.startCounterWithDelay(el);
				}
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
		if (!el.hasClass('counter-started')) {
			let delay = parseFloat(el.data('counter-delay')) * 1000;
			setTimeout(function () {
				if (el.data('counter-start-effect') === 'fadein') {
					let startEffectDuration = parseInt(el.data('counter-start-effect-duration'));
					el.animate({'opacity': 1}, startEffectDuration);
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
		el.addClass('counter-started');
		let start = parseInt(el.data('counter-start')),
			end = parseInt(el.data('counter-end')),
			duration = parseFloat(el.data('counter-duration')) * 1000,
			easing = el.data('counter-easing');
		let numberEl = el.find('.number');
		$({count: start}).animate({count: end}, {
			duration: duration,
			easing: easing,
			step: function () {
				numberEl.text(lavitto_counter.numberFormat(Math.ceil(this.count)));
			},
			complete: function () {
				numberEl.text(lavitto_counter.numberFormat(end));
			}
		});
	},

	/**
	 * Returns the number as formatted string
	 *
	 * @param number
	 * @returns {string}
	 */
	numberFormat: function (number) {
		number = (number + '').replace(/[^0-9+\-Ee.]/g, '');

		let decimals = 0, decPoint = '.', thousandsSep = '\'';
		let n = !isFinite(+number) ? 0 : +number,
			prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
			sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep,
			dec = (typeof decPoint === 'undefined') ? '.' : decPoint,
			s = '';

		let toFixedFix = function (n, prec) {
			if (('' + n).indexOf('e') === -1) {
				return +(Math.round(n + 'e+' + prec) + 'e-' + prec)
			} else {
				let arr = ('' + n).split('e'),
					sig = '';
				if (+arr[1] + prec > 0) {
					sig = '+'
				}
				return (+(Math.round(+arr[0] + 'e' + sig + (+arr[1] + prec)) + 'e-' + prec)).toFixed(prec)
			}
		};

		s = (prec ? toFixedFix(n, prec).toString() : '' + Math.round(n)).split('.');
		if (s[0].length > 3) {
			s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
		}
		if ((s[1] || '').length < prec) {
			s[1] = s[1] || ''
			s[1] += new Array(prec - s[1].length + 1).join('0')
		}
		return s.join(dec)
	},

	/**
	 * Checks if an element is in the viewport
	 *
	 * @param      img        Image Object
	 * @returns    boolean    returns true if the image is in viewport
	 */
	isInViewport: function (img) {
		let elementTop = img.offset().top;
		let elementBottom = elementTop + img.outerHeight();
		let viewportTop = $(window).scrollTop();
		let viewportBottom = viewportTop + $(window).height();
		return elementBottom >= viewportTop && elementTop <= viewportBottom;
	}
};

$(document).ready(function () {
	lavitto_counter.init();
});
