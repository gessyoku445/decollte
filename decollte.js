document.addEventListener('DOMContentLoaded', function () {
    const mainImages = document.querySelectorAll('.variation-img img');
    const subImages = document.querySelectorAll('.variation-sub-img img');
    let currentIndex = 0;
    let carouselInterval = setInterval(showNextImage, 3000); // Set the carousel interval

    // Function to show a specific image
    function showImage(index) {
        mainImages.forEach(img => img.style.display = 'none'); // Hide all main images
        subImages.forEach(img => img.classList.remove('active')); // Remove active class from all thumbnails
        mainImages[index].style.display = 'block'; // Show the selected image
        subImages[index].classList.add('active'); // Add active class to corresponding thumbnail
        currentIndex = index; // Update the current index
    }

    // Function to show the next image in the carousel
    function showNextImage() {
        let nextIndex = (currentIndex + 1) % mainImages.length;
        showImage(nextIndex);
    }

    // Add click events to sub images
    subImages.forEach((subImg, index) => {
        subImg.addEventListener('click', () => {
            showImage(index); // Show corresponding main image on click
            clearInterval(carouselInterval); // Stop the automatic carousel
            carouselInterval = setInterval(showNextImage, 3000); // Restart the carousel after interaction
        });
    });

    // Initially display the first image and set the first thumbnail as active
    showImage(0);
});