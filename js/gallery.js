document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  let currentIndex = 0;

  const updateCarousel = () => {
    const itemWidth = items[0].getBoundingClientRect().width + 20; 
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  };

  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateCarousel();
  });

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  });

  updateCarousel();
});
