document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeMenu = document.querySelector(".close-menu");

  burgerMenu.addEventListener("click", () => {
    mobileMenu.style.left = "0";
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.style.left = "100%";
  });
});
