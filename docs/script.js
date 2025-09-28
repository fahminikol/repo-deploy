// Typed.js
var typed = new Typed("#multiple-text", {
  strings: ["Frontend Developer", "Gamer", "Blogger"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Navbar aktif sesuai section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
        document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
      });
    }
  });
};

// Typed.js untuk About section
var typedAbout = new Typed("#about-text", {
  strings: ["Frontend Developer", "Tech Enthusiast", "Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Typed.js Skills
var typedSkills = new Typed("#skills-text", {
  strings: ["HTML & CSS", "JavaScript", "React.js", "UI/UX Design"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
