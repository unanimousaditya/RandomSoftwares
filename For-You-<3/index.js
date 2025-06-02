const images = [
  './assets/image-content/image-1.png',
  './assets/image-content/image-2.png',
  './assets/image-content/image-3.png',
  './assets/image-content/image-4.png',
  './assets/image-content/image-5.png',
  './assets/image-content/image-6.png'
];

const imageContent = document.querySelector('.image-content');
const mainButton = document.getElementById('main-button');
const finalMessage = document.querySelector('.final-message');

let currentIndex = 0;

function updateImage() {
  imageContent.style.opacity = 0;
  
  const img = new Image();
  img.src = images[currentIndex];
  
  img.onload = () => {
    imageContent.style.backgroundImage = `url('${images[currentIndex]}')`;
    imageContent.style.opacity = 1;
  };
}

updateImage();

mainButton.addEventListener('click', () => {
  currentIndex++;
  
  if (currentIndex < images.length) {
    updateImage();
  }
  
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});