function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.pageYOffset > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

const greetings = ["Hello, I'm", "Bienvenue Je suis", "Welkom Ik ben"];
const greetingEl = document.getElementById("greeting-loop");
let greetingIndex = 0;

function showNextGreeting() {
  greetingEl.style.opacity = 0;
  setTimeout(() => {
    greetingEl.textContent = greetings[greetingIndex];
    greetingEl.style.opacity = 1;
    greetingIndex = (greetingIndex + 1) % greetings.length;
  }, 500);
}

greetingEl.textContent = greetings[0];
greetingEl.style.opacity = 1;
setInterval(showNextGreeting, 2000);

window.addEventListener("DOMContentLoaded", () => {
  const profileImage = document.querySelector(".section__pic-container img");
  if (profileImage) {
    profileImage.classList.add("floating-image");
  }

  const toggleBtn = document.getElementById("toggleFacts");
  const factsBlock = document.getElementById("aboutFacts");
  let isOpen = false;

  if (toggleBtn && factsBlock) {
    toggleBtn.addEventListener("click", () => {
      isOpen = !isOpen;
      factsBlock.style.display = isOpen ? "block" : "none";
      toggleBtn.innerHTML = isOpen
        ? 'Less About Me <i class="fa-solid fa-chevron-up"></i>'
        : 'More About Me <i class="fa-solid fa-chevron-down"></i>';
    });
  }

  const toggleProjectsBtn = document.getElementById("toggleProjectsBtn");
  const hiddenProjects = document.querySelector(".hidden-projects");
  let showing = false;

  if (toggleProjectsBtn && hiddenProjects) {
    toggleProjectsBtn.addEventListener("click", () => {
      showing = !showing;
      hiddenProjects.style.display = showing ? "block" : "none";
      toggleProjectsBtn.innerHTML = showing
        ? 'View Less <i class="fa-solid fa-chevron-up"></i>'
        : 'View More <i class="fa-solid fa-chevron-down"></i>';
      toggleProjectsBtn.classList.toggle("rotated", showing);
    });
  }
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dots .dot");
  const track = document.querySelector(".carousel-track");
  let currentIndex = 0;

  function showSlide(index) {
    const offset = -index * 100;
    track.style.transform = `translateX(${offset}vw)`;
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[index].classList.add("active");
    currentIndex = index;
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // Optional: auto-slide with dot sync
  setInterval(() => {
    let nextIndex = (currentIndex + 1) % slides.length;
    showSlide(nextIndex);
  }, 5000); // Adjust interval
});
