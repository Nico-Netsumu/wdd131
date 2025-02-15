// main.js - Universal JavaScript for Interactive Travel Guide

document.addEventListener("DOMContentLoaded", () => {
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Initialize Carousel (if present on the page)
    const carouselImage = document.getElementById("carousel-image");
    if (carouselImage) {
        const images = ["images/travel1.webp", "images/travel2.jpg", "images/travel3.jpg"];
        let index = 0;

        document.getElementById("prev").addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            carouselImage.src = images[index];
        });

        document.getElementById("next").addEventListener("click", () => {
            index = (index + 1) % images.length;
            carouselImage.src = images[index];
        });
    }
});
