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
				if(el.data('counter-start-effect') === 'fadein') {
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
				numberEl.text(Math.ceil(this.count));
			},
			complete: function () {
				numberEl.text(end);
			}
		});
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
