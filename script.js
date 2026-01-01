// Dark Mode Toggle
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

/*
const music = document.getElementById("bg-music");

// FULL VOLUME agad
music.volume = 1.0;
music.muted = false;

// Try autoplay on load
window.addEventListener("load", () => {
  music.play().catch(() => {
    console.log("Autoplay blocked. Waiting for user interaction.");
  });
});

// Fallback kapag blocked
document.addEventListener("click", () => {
  music.play();
}, { once: true });

document.addEventListener("scroll", () => {
  music.play();
}, { once: true });

*/

//
const music = document.getElementById("bg-music");
const startScreen = document.getElementById("start-screen");
const enterBtn = document.getElementById("enter-btn");

music.volume = 1.0;

enterBtn.addEventListener("click", () => {
  music.play();
  startScreen.style.display = "none";
});
