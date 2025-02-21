document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.cultural-figure-slider', {
        // Enable loop mode
        loop: true,
        
        // Enable smooth transitions
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        
        // Configure speed
        speed: 500,
        
        // Add auto height
        autoHeight: true,
        
        // Navigation buttons
        navigation: {
            nextEl: '.next-button',
            prevEl: '.prev-button',
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1,
                spaceBetween: 40
            }
        }
    });

    // Add slide change animation
    swiper.on('slideChange', function () {
        const activeSlide = this.slides[this.activeIndex];
        activeSlide.style.opacity = 0;
        setTimeout(() => {
            activeSlide.style.opacity = 1;
        }, 50);
    });

    // Update navigation buttons state
    function updateNavigationState() {
        const prevButton = document.querySelector('.prev-button');
        const nextButton = document.querySelector('.next-button');
        
        if (swiper.isBeginning) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
        
        if (swiper.isEnd) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    swiper.on('slideChange', updateNavigationState);
    updateNavigationState();

    // Sticky navbar on scroll script
    const navbar = document.querySelector(".navbar");
    const scrollUpBtn = document.querySelector(".scroll-up-btn");
    const sectionIds = document.querySelectorAll("a.nav-link");

    function handleScroll() {
        if (window.scrollY > 10) {
            navbar.classList.add("sticky");
            scrollUpBtn.classList.add("show");
        } else {
            navbar.classList.remove("sticky");
            scrollUpBtn.classList.remove("show");
        }

        // sectionIds.forEach(function (element) {
        //     const container = document.querySelector(element.getAttribute("href"));
        //     const containerOffset = container.offsetTop;
        //     const containerHeight = container.offsetHeight;
        //     const containerBottom = containerOffset + containerHeight;
        //     const scrollPosition = window.scrollY;
        //     if (scrollPosition < containerBottom - 350 && scrollPosition >= containerOffset - 350) {
        //         element.classList.add("active");
        //     } else {
        //         element.classList.remove("active");
        //     }
        // });
    }

    window.addEventListener("scroll", handleScroll);
    

    // Scroll-up script
    scrollUpBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Menu button and overlay
    const body = document.querySelector("body");
    const menuBtn = document.querySelector(".menu-btn");
    const cancelBtn = document.querySelector(".cancel-btn");
    const overlay = document.querySelector(".overlay");
    const navLinks = document.querySelectorAll("li");

    menuBtn.addEventListener("click", function () {
        navbar.classList.add("show");
        menuBtn.classList.add("hide");
        body.classList.add("disabled");
        overlay.classList.add("show");
    });

    overlay.addEventListener("click", closeSidebar);
    navLinks.forEach(function (link) {
        link.addEventListener("click", closeSidebar);
    });

    cancelBtn.addEventListener("click", closeSidebar);

    function closeSidebar() {
        if (navbar.classList.contains("show")) {
            body.classList.remove("disabled");
            navbar.classList.remove("show");
            menuBtn.classList.remove("hide");
            overlay.classList.remove("show");
        }
    }
});

const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const overlay = document.querySelector('.overlay');
const navLink = document.querySelectorAll('li');

menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
    overlay.classList.add("show");
}
overlay.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    overlay.classList.remove("show");
}
navLink.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    overlay.classList.remove("show");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
    overlay.classList.remove("show");
}

function closeSidebar() {
    if (navbar.classList.contains("show")) {
        body.classList.remove("disabled");
        navbar.classList.remove("show");
        menuBtn.classList.remove("hide");
        overlay.classList.remove("show");
    }
}