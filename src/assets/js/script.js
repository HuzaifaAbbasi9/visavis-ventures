document.addEventListener('DOMContentLoaded', function () {
    let tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(function (tab) {
        tab.onclick = function () {
            tabButtons.forEach(function (ele) {
                if (tab !== ele) {
                    ele.querySelector('.tab-arrow-down').classList.remove('rotate-180');
                    ele.nextElementSibling.style.height = 0;
                }
            });

            tab.querySelector('.tab-arrow-down').classList.toggle('rotate-180');
            const tabBody = tab.nextElementSibling;

            if (tabBody.clientHeight === 0) {
                tabBody.style.height = tabBody.scrollHeight + 'px';
            } else {
                tabBody.style.height = 0;
            }
        };
    });

    var options = {
        strings: ['Cofounder', 'CTO', 'Designer', 'Investor', 'Partner', 'Team'],
        typeSpeed: 150, // Adjust the typing speed here
        backSpeed: 75, // Adjust the backspacing speed here
        loop: true,
        showCursor: false,
    };

    var typed = new Typed('#typed-output', options);

    var swiper = new Swiper('.case-studies-slider', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            768: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 1.6,
                spaceBetween: 50,
            },
        },
    });

    const openNav = document.querySelector('.open-mobile-nav');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeNav = document.querySelector('.close-mobile-nav');
    const navOverlay = document.querySelector('.nav-overlay');

    openNav.onclick = function () {
        navOverlay.classList.remove('hidden');
        mobileNav.classList.remove('-translate-x-full', 'opacity-0');
    };
    function closeMobileNav() {
        navOverlay.classList.add('hidden');
        mobileNav.classList.add('-translate-x-full', 'opacity-0');
    }
    closeNav.addEventListener('click', closeMobileNav);
    navOverlay.addEventListener('click', closeMobileNav);
});
