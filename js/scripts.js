// JavaScript Document for Navigation Section
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Activate the Navbar on click
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

// Remover the Navbar on clicking link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))