        const navbarToggle = document.getElementById("navbarToggle");
        const mainNav = document.getElementById("mainNav");

        navbarToggle.addEventListener("click", function () {

            mainNav.classList.toggle("show");

            const isOpen = mainNav.classList.contains("show");

            navbarToggle.setAttribute("aria-expanded", isOpen);

            if (isOpen) {
                navbarToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            } else {
                navbarToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
            }

        });

        // Close menu after clicking a navigation link
        const navLinks = mainNav.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("show");

                navbarToggle.setAttribute("aria-expanded", "false");

                navbarToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';

            });

        });

        // Initial animation
  
document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        root: null, 
        rootMargin: '0px',
        threshold: 0.15 
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                //trigger the animation
                entry.target.classList.add('show');
                
                // Stop animation only happens once
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target all elements with the class
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    const elementsToAnimateX = document.querySelectorAll('.animateX-on-scroll');
    elementsToAnimate.forEach(el => observer.observe(el));
    elementsToAnimateX.forEach(el => observer.observe(el));
});