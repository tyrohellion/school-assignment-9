document.querySelector('.hamburger').addEventListener('click',function() {
    document.querySelector('nav ul').classList.toggle('active');
});


document.addEventListener('DOMContentLoaded', function () {
    const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg'];
    let currentIndex = 0;
    const imageElement = document.getElementById('gallery-image');
    const prevButton = document.getElementById('prev-btn');
    const nextButton = document.getElementById('next-btn');
  
    // Function to update the displayed image
    function updateImage() {
      imageElement.src = images[currentIndex];
    }
  
    // Event listener for previous button
    prevButton.addEventListener('click', function () {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateImage();
    });
  
    // Event listener for next button
    nextButton.addEventListener('click', function () {
      currentIndex = (currentIndex + 1) % images.length;
      updateImage();
    });
  
    // Initial image update
    updateImage();
  });