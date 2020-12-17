(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("if (navigator.serviceWorker) {\n  navigator.serviceWorker.register('/sw.js').then(function (registration) {// console.log(\n    // \t'ServiceWorker registration successful with scope:',\n    // \tregistration.scope\n    // );\n  }).catch(function (error) {\n    console.log('ServiceWorker registration failed:', error);\n  });\n}\n/* ===================\n\nTable of content:\n\n// 1. Navigation\n// 2. Infinite Scroller\n// 3. Carousel\n// 4. Tabs\n// 5. Sliders\n// 6. Smooth Scroll\n// 7. Scroll to ID\n// 8. Lightbox\n\n=================== */\n\n\n$(document).ready(function () {\n  'use strict';\n\n  toggleMenu();\n});\n/* -----------------------------------------------\n\t\t\t Navigation\n-----------------------------------------------*/\n\nfunction toggleMenu() {\n  const toggleMenu = document.querySelector('#toggle-menu');\n  const menu = document.querySelector('#menu-ui');\n  const menuLink = document.querySelectorAll('#menu-ui a');\n  const bodyTag = document.querySelector('#top');\n  const wrapAll = document.querySelector('#wrap-all'); //  toggleMenu\n\n  if (toggleMenu) {\n    toggleMenu.addEventListener('click', function () {\n      toggleMenu.classList.toggle('active');\n      menu.classList.toggle('active');\n\n      if (menu.classList.contains('active')) {\n        $(bodyTag).css('overflow', 'hidden');\n      } else {\n        $(bodyTag).css('overflow', 'auto');\n      }\n    });\n  } // Menu items\n\n\n  $(menuLink).on('click', function () {\n    toggleMenu.classList.toggle('active');\n    menu.classList.toggle('active');\n    $(bodyTag).css('overflow', 'auto');\n  });\n} // -----------------------------------------------\n// Infinite Scroller\n// -----------------------------------------------\n\n\nconst root = document.documentElement;\nconst scrollerElement = getComputedStyle(root).getPropertyValue('--items-displayed');\nconst scrollContent = document.querySelector('.scroll-content'); // root.style.setProperty(\"--scroll-item-count\", scrollContent.children.length);\n\nif (scrollerElement && scrollContent) {\n  for (let i = 0; i < scrollerElement; i++) {\n    scrollContent.appendChild(scrollContent.children[i].cloneNode(true));\n  }\n} // -----------------------------------------------\n// Gallery Filter\n// -----------------------------------------------\n\n\n(function ($) {\n  'use strict';\n\n  $('.filter-ui .filter').on('click', function (e) {\n    e.preventDefault();\n    const filterData = $(this).attr('data-filter');\n    $('.filter-ui .filter').removeClass('link-active-border');\n    $(this).addClass('link-active-border');\n\n    if (filterData === 'all') {\n      $('.gallery-ui li').delay(200).fadeIn(300);\n    } else {\n      $('.gallery-ui li').fadeOut(200);\n      $('.gallery-ui li.' + filterData).delay(200).fadeIn(300);\n    }\n  });\n})(jQuery); // -----------------------------------------------\n// Tabs\n// -----------------------------------------------\n\n\nconst tabsBtn = document.querySelectorAll('.tab-button');\nconst tabsItems = document.querySelectorAll('.tab-content');\ntabsBtn.forEach(function (item) {\n  item.addEventListener('click', function (e) {\n    let currentBtn = item;\n    let tabId = currentBtn.getAttribute('data-tab');\n    let currentTab = document.querySelector(tabId);\n\n    if (!currentBtn.classList.contains('active')) {\n      tabsBtn.forEach(function (item) {\n        item.classList.remove('active');\n      });\n      tabsItems.forEach(function (item) {\n        item.classList.remove('active');\n      });\n      currentBtn.classList.add('active');\n      currentTab.classList.add('active');\n    }\n  });\n}); // -----------------------------------------------\n// Sliders\n// -----------------------------------------------\n//  Portfolio Slider\n\nvar swiper = new Swiper('.slider-large', {\n  centeredSlides: true,\n  spaceBetween: 30,\n  loop: true,\n  mousewheel: true,\n  grabCursor: true,\n  initialSlide: 0,\n  slidesPerView: 1,\n  slidesPerGroup: 1,\n  preloadImages: true,\n  direction: 'horizontal',\n  pagination: false,\n  autoHeight: false,\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  }\n}); //  Recent Articles Slider\n\nvar swiper = new Swiper('.recent-articles', {\n  centeredSlides: true,\n  spaceBetween: 30,\n  loop: true,\n  mousewheel: true,\n  grabCursor: true,\n  initialSlide: 1,\n  direction: 'horizontal',\n  pagination: true,\n  navigation: {\n    nextEl: '.swiper-button-next',\n    prevEl: '.swiper-button-prev'\n  },\n  breakpoints: {\n    '@0.5': {\n      slidesPerView: 1,\n      spaceBetween: 20\n    },\n    '@0.75': {\n      slidesPerView: 2,\n      spaceBetween: 20\n    },\n    '@1.00': {\n      slidesPerView: 3,\n      spaceBetween: 40\n    }\n  }\n}); //  Testimonial Slider\n\nvar swiper = new Swiper('.testimonial-slider', {\n  slidesPerView: 1,\n  autoHeight: false,\n  loop: true,\n  preloadImages: true,\n  mousewheel: true,\n  centeredSlides: true,\n  grabCursor: true,\n  initialSlide: 0,\n  direction: 'horizontal',\n  spaceBetween: 100,\n  pagination: {\n    el: '.swiper-pagination',\n    type: 'progressbar'\n  }\n}); //  Cards Carousel\n\nvar swiper = new Swiper('.carousel', {\n  slidesPerView: '3',\n  centeredSlides: true,\n  spaceBetween: 20,\n  mousewheel: false,\n  grabCursor: true,\n  initialSlide: 1,\n  slidesPerGroup: 1,\n  pagination: {\n    el: '.swiper-pagination',\n    clickable: true\n  },\n  breakpoints: {\n    '@0.5': {\n      width: 1000\n    },\n    '@0.75': {\n      width: 1200\n    }\n  }\n}); // -----------------------------------------------\n// Scroll to #ID\n// -----------------------------------------------\n// Register GSAP plugins (once) before using them\n// Detect if a link's href goes to the current page\n\nfunction getSamePageAnchor(link) {\n  if (link.protocol !== window.location.protocol || link.host !== window.location.host || link.pathname !== window.location.pathname || link.search !== window.location.search) {\n    return false;\n  }\n\n  return link.hash;\n} // Scroll to a given hash, preventing the event given if there is one\n\n\nfunction scrollToHash(hash, e) {\n  const elem = hash ? document.querySelector(hash) : false;\n\n  if (elem) {\n    if (e) e.preventDefault();\n    gsap.to(window, {\n      scrollTo: elem\n    });\n  }\n} // If a link's href is within the current page, scroll to it instead\n\n\ndocument.querySelectorAll('a[href]').forEach(a => {\n  a.addEventListener('click', e => {\n    scrollToHash(getSamePageAnchor(a), e);\n  });\n}); // Scroll to the element in the URL's hash on load\n\nscrollToHash(window.location.hash); // -----------------------------------------------\n// Lightbox Gallery\n// -----------------------------------------------\n\n(function ($) {\n  'use strict';\n\n  const lightbox = document.getElementById('lightbox');\n  const bodyTag = document.querySelector('#top'); // Open Lightbox\n\n  $('.portfolio-img').on('click', function (e) {\n    e.preventDefault();\n    $(bodyTag).css('overflow', 'hidden');\n    $('html').addClass('overflow-h');\n    var imgURL = $(this).attr('href');\n    $(lightbox).addClass('active');\n    $(lightbox).append('<img src=\"' + imgURL + '\">');\n  }); // Close Lightbox\n\n  $('body').on('click', '#lightbox', function () {\n    $('html').removeClass('overflow-h');\n    $(bodyTag).css('overflow', 'auto');\n    $(lightbox).removeClass('active');\n    $(lightbox).empty();\n  });\n})(jQuery); // -----------------------------------------------\n// Gallery loadmore\n// -----------------------------------------------\n\n\n$(function () {\n  $('.gallery-ui li').slice(0, 5).show();\n  $('body').on('click touchstart', '.pagination .load-more', function (e) {\n    e.preventDefault();\n    $('.gallery-ui li:hidden').slice(0, 3).fadeIn();\n\n    if ($('.gallery-ui li:hidden').length == 0) {\n      $('.pagination .load-more').css('visibility', 'hidden');\n    }\n  });\n}); // -----------------------------------------------\n// End\n// -----------------------------------------------\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});