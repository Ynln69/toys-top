document.addEventListener("DOMContentLoaded", () => {
  const initializeMenu = () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeMenu = document.querySelector(".close-menu");
    const overlay = document.querySelector(".mobile-menu-overlay");

    if (burgerMenu && mobileMenu && closeMenu && overlay) {
      
      burgerMenu.addEventListener("click", () => {
        mobileMenu.style.left = "0";
        overlay.classList.add("active"); 
      });

      closeMenu.addEventListener("click", () => {
        mobileMenu.style.left = "100%";
        overlay.classList.remove("active"); 
      });


      overlay.addEventListener("click", () => {
        mobileMenu.style.left = "100%";
        overlay.classList.remove("active"); 
      });
    }
  };


  initializeMenu();

 
  const observer = new MutationObserver(() => {
    if (
      document.querySelector(".burger-menu") &&
      document.querySelector(".mobile-menu-overlay")
    ) {
      initializeMenu();
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
