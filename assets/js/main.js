if (navigator.serviceWorker) {
	navigator.serviceWorker
		.register('/sw.js')
		.then(function(registration) {
			// console.log(
			// 	'ServiceWorker registration successful with scope:',
			// 	registration.scope
			// );
		})
		.catch(function(error) {
			console.log('ServiceWorker registration failed:', error);
		});
}

/* ===================

Table of content:

// 1. Navigation
// 2. Infinite Scroller
// 3. Carousel
// 4. Tabs
// 5. Sliders
// 6. Smooth Scroll
// 7. Scroll to ID
// 8. Lightbox

=================== */

$(document).ready(function() {
	'use strict';

	toggleMenu();
});

/* -----------------------------------------------
			 Navigation
-----------------------------------------------*/

function toggleMenu() {
	const toggleMenu = document.querySelector('#toggle-menu');
	const menu = document.querySelector('#menu-ui');
	const menuLink = document.querySelectorAll('#menu-ui a');
	const bodyTag = document.querySelector('#top');
	const wrapAll = document.querySelector('#wrap-all');

	//  toggleMenu
	if (toggleMenu) {
		toggleMenu.addEventListener('click', function() {
			toggleMenu.classList.toggle('active');
			menu.classList.toggle('active');

			if (menu.classList.contains('active')) {
				$(bodyTag).css('overflow', 'hidden');
			} else {
				$(bodyTag).css('overflow', 'auto');
			}
		});
	}
	// Menu items

	$(menuLink).on('click', function() {
		toggleMenu.classList.toggle('active');
		menu.classList.toggle('active');
		$(bodyTag).css('overflow', 'auto');
	});
}

// -----------------------------------------------
// Infinite Scroller
// -----------------------------------------------

const root = document.documentElement;
const scrollerElement = getComputedStyle(root).getPropertyValue(
	'--items-displayed'
);
const scrollContent = document.querySelector('.scroll-content');
// root.style.setProperty("--scroll-item-count", scrollContent.children.length);

if (scrollerElement && scrollContent) {
	for (let i = 0; i < scrollerElement; i++) {
		scrollContent.appendChild(scrollContent.children[i].cloneNode(true));
	}
}
// -----------------------------------------------
// Gallery Filter
// -----------------------------------------------
(function($) {
	'use strict';
	$('.filter-ui .filter').on('click', function(e) {
		e.preventDefault();

		const filterData = $(this).attr('data-filter');
		$('.filter-ui .filter').removeClass('link-active-border');
		$(this).addClass('link-active-border');

		if (filterData === 'all') {
			$('.gallery-ui li')
				.delay(200)
				.fadeIn(300);
		} else {
			$('.gallery-ui li').fadeOut(200);
			$('.gallery-ui li.' + filterData)
				.delay(200)
				.fadeIn(300);
		}
	});
})(jQuery);

// -----------------------------------------------
// Tabs
// -----------------------------------------------

const tabsBtn = document.querySelectorAll('.tab-button');
const tabsItems = document.querySelectorAll('.tab-content');

tabsBtn.forEach(function(item) {
	item.addEventListener('click', function(e) {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute('data-tab');
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active')) {
			tabsBtn.forEach(function(item) {
				item.classList.remove('active');
			});
			tabsItems.forEach(function(item) {
				item.classList.remove('active');
			});

			currentBtn.classList.add('active');
			currentTab.classList.add('active');
		}
	});
});

// -----------------------------------------------
// Sliders
// -----------------------------------------------

//  Portfolio Slider
var swiper = new Swiper('.slider-large', {
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	mousewheel: true,
	grabCursor: true,
	initialSlide: 0,
	slidesPerView: 1,
	slidesPerGroup: 1,
	preloadImages: true,
	direction: 'horizontal',
	pagination: false,
	autoHeight: false,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

//  Recent Articles Slider
var swiper = new Swiper('.recent-articles', {
	centeredSlides: true,
	spaceBetween: 30,
	loop: true,
	mousewheel: true,
	grabCursor: true,
	initialSlide: 1,
	direction: 'horizontal',
	pagination: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		'@0.5': {
			slidesPerView: 1,
			spaceBetween: 20
		},
		'@0.75': {
			slidesPerView: 2,
			spaceBetween: 20
		},
		'@1.00': {
			slidesPerView: 3,
			spaceBetween: 40
		}
	}
});

//  Testimonial Slider
var swiper = new Swiper('.testimonial-slider', {
	slidesPerView: 1,
	autoHeight: false,
	loop: true,
	preloadImages: true,
	mousewheel: true,
	centeredSlides: true,
	grabCursor: true,
	initialSlide: 0,
	direction: 'horizontal',
	spaceBetween: 100,
	pagination: {
		el: '.swiper-pagination',
		type: 'progressbar'
	}
});

//  Cards Carousel
var swiper = new Swiper('.carousel', {
	slidesPerView: '3',
	centeredSlides: true,
	spaceBetween: 20,
	mousewheel: false,
	grabCursor: true,
	initialSlide: 1,
	slidesPerGroup: 1,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	breakpoints: {
		'@0.5': {
			width: 1000
		},
		'@0.75': {
			width: 1200
		}
	}
});

// -----------------------------------------------
// Scroll to #ID
// -----------------------------------------------
// Register GSAP plugins (once) before using them
// Detect if a link's href goes to the current page
function getSamePageAnchor(link) {
	if (
		link.protocol !== window.location.protocol ||
		link.host !== window.location.host ||
		link.pathname !== window.location.pathname ||
		link.search !== window.location.search
	) {
		return false;
	}

	return link.hash;
}

// Scroll to a given hash, preventing the event given if there is one
function scrollToHash(hash, e) {
	const elem = hash ? document.querySelector(hash) : false;
	if (elem) {
		if (e) e.preventDefault();
		gsap.to(window, { scrollTo: elem });
	}
}

// If a link's href is within the current page, scroll to it instead
document.querySelectorAll('a[href]').forEach(a => {
	a.addEventListener('click', e => {
		scrollToHash(getSamePageAnchor(a), e);
	});
});

// Scroll to the element in the URL's hash on load
scrollToHash(window.location.hash);

// -----------------------------------------------
// Lightbox Gallery
// -----------------------------------------------
(function($) {
	'use strict';
	const lightbox = document.getElementById('lightbox');
	const bodyTag = document.querySelector('#top');

	// Open Lightbox
	$('.portfolio-img').on('click', function(e) {
		e.preventDefault();
		$(bodyTag).css('overflow', 'hidden');
		$('html').addClass('overflow-h');
		var imgURL = $(this).attr('href');
		$(lightbox).addClass('active');
		$(lightbox).append('<img src="' + imgURL + '">');
	});
	// Close Lightbox
	$('body').on('click', '#lightbox', function() {
		$('html').removeClass('overflow-h');
		$(bodyTag).css('overflow', 'auto');
		$(lightbox).removeClass('active');
		$(lightbox).empty();
	});
})(jQuery);

// -----------------------------------------------
// Gallery loadmore
// -----------------------------------------------

$(function() {
	$('.gallery-ui li')
		.slice(0, 5)
		.show();
	$('body').on('click touchstart', '.pagination .load-more', function(e) {
		e.preventDefault();
		$('.gallery-ui li:hidden')
			.slice(0, 3)
			.fadeIn();
		if ($('.gallery-ui li:hidden').length == 0) {
			$('.pagination .load-more').css('visibility', 'hidden');
		}
	});
});

// -----------------------------------------------
// End
// -----------------------------------------------
