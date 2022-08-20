const navbarToggle = document.querySelector(".navbar_toggle");
const searchNav = document.querySelector(".search_nav");
const navLinks = document.querySelector(".navlinks");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  harmBurgar();
});
const harmBurgar = () => {
  if (
    navLinks.classList.contains("clicked") &&
    searchNav.classList.contains("clicked")
  ) {
    searchNav.classList.remove("clicked");
    navLinks.classList.remove("clicked");
  } else {
    navLinks.classList.add("clicked");
    searchNav.classList.add("clicked");
  }
};

//close harmburgar menu on click of navlinks
const RegLinks = document.querySelectorAll(".search_nav .registeration a");
const NavLinks = document.querySelectorAll(".navlinks ul li");

RegLinks.forEach((link) => {
  link.addEventListener("click", () => {
    harmBurgar();
    CloseBtn();
  });
});

NavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    harmBurgar();
    CloseBtn();
  });
});

const CloseBtn = () => {
  if (
    navLinks.classList.contains("clicked") &&
    searchNav.classList.contains("clicked")
  ) {
    navbarToggle.classList.add("active");
  } else {
    navbarToggle.classList.remove("active");
  }
};
