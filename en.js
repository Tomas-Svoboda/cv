/* window.addEventListener("resize", function() { */
  var navbar = document.querySelector(".navbar");
  var links = navbar.querySelectorAll("a");
  var screenWidth = window.innerWidth;
  if (screenWidth < 600) {
    links[0].textContent = "About";
    links[1].textContent = "Skills";
    links[2].textContent = "Career";
    links[3].textContent = "Projects";
    links[4].textContent = "Certs";
    links[5].textContent = "Contact";
  } else {
    links[0].textContent = "About Me";
    links[1].textContent = "Skills";
    links[2].textContent = "Career";
    links[3].textContent = "Assignments";
    links[4].textContent = "Certifications";
    links[5].textContent = "Contact";
  }
/* }); */
