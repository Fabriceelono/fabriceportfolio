function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.pageYOffset > 50) {
    // Adjust this value based on your needs
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
