const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navlink");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("aktif");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("aktif");
    }
  });
});