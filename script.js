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

const introText = "Hello, I'm ";
const nameText = "Fabrice Elono";

const typedText = document.getElementById("typed-text");
const typedName = document.getElementById("typed-name");
const cursor1 = document.getElementById("cursor-1");
const cursor2 = document.getElementById("cursor-2");

let index = 0;
let nameIndex = 0;

function typeIntro() {
  if (index < introText.length) {
    typedText.textContent += introText.charAt(index);
    index++;
    setTimeout(typeIntro, 100);
  } else {
    cursor1.style.display = "none"; // hide first cursor
    cursor2.style.display = "inline-block"; // show second
    typeName(); // start next typing
  }
}

function typeName() {
  if (nameIndex < nameText.length) {
    typedName.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 120);
  } else {
    cursor2.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  cursor2.style.display = "none"; // hide second cursor initially
  typeIntro();
});

window.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".section__pic-container");
  if (profileImage) {
    profileImage.classList.add("floating-image");
  }
});
