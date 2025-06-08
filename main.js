// Image slideshow for Home Section
const slideshow = document.getElementById("slideshow");
const images = ["image1.png", "image2.png", "image3.png", "image4.png"];
let currentIndex = 0;

function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  slideshow.classList.remove("bounce-in");
  void slideshow.offsetWidth; // trigger reflow to restart animation
  slideshow.src = images[currentIndex];
  slideshow.classList.add("bounce-in");
}

// Bounce-in animation class
const style = document.createElement("style");
style.innerHTML = `
  .bounce-in {
    animation: bounceIn 1s ease;
  }
`;
document.head.appendChild(style);

setInterval(changeImage, 2000);


// Get elements



