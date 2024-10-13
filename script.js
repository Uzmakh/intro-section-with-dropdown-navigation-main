// Open/Close mobile-menu
const hamBurger = document.querySelector(".ham");
const closeMenu = document.querySelector(".close-menu");
const overLay = document.querySelector(".overlay");
const mobileNav = document.querySelector(".desktop-nav");
hamBurger.addEventListener("click", e => {
   console.log("Menuopen is clicked")
   e.preventDefault();
  mobileNav.classList.add("active");
   overLay.style.display = "block";
   closeMenu.classList.add("active");

})
closeMenu.addEventListener("click", e => {
   console.log("Menuclose is clicked")
   e.preventDefault();
   mobileNav.classList.remove("active");
   overLay.style.display = "none";
   closeMenu.classList.remove("active");
})

// Dropdown Menu Functionality on Mobile
// const dropdownItems = document.querySelectorAll(".dropdown-menu-item");

// dropdownItems.forEach((item) => {
//     item.addEventListener("click", function (e) {
//         e.preventDefault();
//         const dropdownContent = item.querySelector(".dropdown-content");
//         dropdownContent.classList.toggle("show");

//         const dropdownArrow = item.querySelector(".dropbtn");
//         dropdownContent.classList.contains("show") ? (dropdownArrow.src = "images/icon-arrow-up.svg") : (dropdownArrow.src = "images/icon-arrow-down.svg");
//     });
// })