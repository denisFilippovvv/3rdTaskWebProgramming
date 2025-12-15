const images = [
    './img1.jpg',
    './img2.jpg',
    './img3.jpg',
    './img4.jpg',
    './img5.jpg'
];

let currentImageIndex = 0;

const imageElement = document.getElementById('myImage');
const buttonElement = document.getElementById('changeImageBtn');

buttonElement.addEventListener('click', function() {
    currentImageIndex = currentImageIndex + 1;
    
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
    
    imageElement.src = images[currentImageIndex];
});