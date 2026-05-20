const themeToggle = document.getElementById("theme-toggle");
const mainContent = document.querySelectorAll(".main-content");
const body = document.querySelector("body");
const icon = themeToggle.querySelector("i");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu a");
const form = document.querySelector(".contact-form");
const popup = document.getElementById("success-popup");

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  });
});

form.addEventListener("submit", () => {
  setTimeout(() => {
    form.reset();

    // show popup
    popup.style.display = "block";

    // hide after 3 seconds
    setTimeout(() => {
      popup.style.display = "none";
    }, 3000);
  }, 500);
});

window.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
  }
});
