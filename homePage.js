document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image img");

    function animateOnScroll() {
        images.forEach((element) => {
            const imagePosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (imagePosition < windowHeight - 50) {
                element.classList.add("animate");
            }
        });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll();
});
function initSlideshow(slideshowContainer) {
    const slides = slideshowContainer.getElementsByClassName("slideshow-img");
    let slideIndex = 0;


    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("active");
        }


        slideIndex++;
        if (slideIndex >= slides.length) {
            slideIndex = 0;
        }


        slides[slideIndex].classList.add("active");


        setTimeout(showSlides, 3000);
    }


    showSlides();
}
window.addEventListener("load", () => {
    setTimeout(() => {
      document.getElementById("message").classList.add("visible");
    }, 3000);
  });
  


document.addEventListener("DOMContentLoaded", () => {
    const slideshowContainers = document.getElementsByClassName("slideshow-container");
    for (let i = 0; i < slideshowContainers.length; i++) {
        initSlideshow(slideshowContainers[i]);
    }
});
