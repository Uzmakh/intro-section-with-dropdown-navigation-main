// Open/Close mobile-menu
const hamBurger = document.querySelector(".ham");
const closeMenu = document.querySelector(".close-menu");
const overLay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".mobile-nav");
hamBurger.addEventListener("click", e => {
  mobileNav.classList.add("show");
   overLay.style.display = "block";
    document.querySelector("body").classList.add("lock");
})
closeMenu.addEventListener("click", e => {
   mobileNav.classList.remove("show");
   overLay.style.display = "none";
    document.querySelector("body").classList.remove("lock");
})

// Dropdown Menu Functionality on Mobile
const dropdownItems = document.querySelectorAll(".dropdown-menu-item");

dropdownItems.forEach((item) => {
    item.addEventListener("click", function (e) {
        e.preventDefault();
        const dropdownContent = item.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");

        const dropdownArrow = item.querySelector(".dropbtn");
        dropdownContent.classList.contains("show") ? (dropdownArrow.src = "images/icon-arrow-up.svg") : (dropdownArrow.src = "images/icon-arrow-down.svg");
    });
})