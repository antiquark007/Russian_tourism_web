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


document.addEventListener("DOMContentLoaded", () => {
    const slideshowContainers = document.getElementsByClassName("slideshow-container");
    for (let i = 0; i < slideshowContainers.length; i++) {
        initSlideshow(slideshowContainers[i]);
    }
});
