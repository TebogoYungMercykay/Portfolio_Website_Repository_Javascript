// * Modal Effects

document.addEventListener('DOMContentLoaded', function() {
	var ModalEffects = (function() {
	
		function init() {
	
			[].slice.call(document.querySelectorAll('.custom-trigger')).forEach(function(el, i) {
	
				var modal = document.querySelector('#resume-modal'),
					close = modal.querySelector('.md-close');
	
				function removeModal(hasPerspective) {
					classie.remove(modal, 'md-show');
	
					if (hasPerspective) {
						classie.remove(document.documentElement, 'md-perspective');
					}
				}
	
				function removeModalHandler() {
					var opacity = 1;
					var fadeOutInterval = setInterval(function () {
						modal.style.opacity = opacity;
						opacity -= 0.1;
						if (opacity <= 0) {
							clearInterval(fadeOutInterval);
							removeModal(classie.has(el, 'md-setperspective'));
							modal.style.opacity = 1;
						}
					}, 300);
				}
	
				el.addEventListener('click', function(ev) {
					classie.add(modal, 'md-show');
	
					if (classie.has(el, 'md-setperspective')) {
						setTimeout(function() {
							classie.add(document.documentElement, 'md-perspective');
						}, 25);
					}
	
					// Automatically remove the modal after 6 seconds (6000 milliseconds)
					setTimeout(function() {
						removeModalHandler();
					}, 6500);
				});
	
				close.addEventListener('click', function(ev) {
					ev.stopPropagation();
					removeModalHandler();
				});
	
			});
	
		}
	
		init();
	
	})(window);
	
	(function(window) {
	
		'use strict';
	
		function classReg(className) {
			return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
		}
	
	
		var hasClass, addClass, removeClass;
	
		if ('classList' in document.documentElement) {
			hasClass = function(elem, c) {
				return elem.classList.contains(c);
			};
			addClass = function(elem, c) {
				elem.classList.add(c);
			};
			removeClass = function(elem, c) {
				elem.classList.remove(c);
			};
		} else {
			hasClass = function(elem, c) {
				return classReg(c).test(elem.className);
			};
			addClass = function(elem, c) {
				if (!hasClass(elem, c)) {
					elem.className = elem.className + ' ' + c;
				}
			};
			removeClass = function(elem, c) {
				elem.className = elem.className.replace(classReg(c), ' ');
			};
		}
	
		function toggleClass(elem, c) {
			var fn = hasClass(elem, c) ? removeClass : addClass;
			fn(elem, c);
		}
	
		var classie = {
			// full names
			hasClass: hasClass,
			addClass: addClass,
			removeClass: removeClass,
			toggleClass: toggleClass,
			// short names
			has: hasClass,
			add: addClass,
			remove: removeClass,
			toggle: toggleClass
		};
	
		// transport
		if (typeof define === 'function' && define.amd) {
			// AMD
			define(classie);
		} else {
			// browser global
			window.classie = classie;
		}
	
	})(window);
});

