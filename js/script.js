// Toogle Class Active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// tutup navbar diluar nav
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Slider Image
const heroSlider = document.getElementById("hero-slider");
const slides = Array.from(heroSlider.querySelectorAll("img.instagram-slide"));

let index = 0;
let interval;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.style.opacity = i === index ? 1 : 0;
    slide.style.visibility = i === index ? "visible" : "hidden";
  });
}

function plusSlides(n) {
  index += n;
  if (index < 0) {
    index = slides.length - 1;
  } else if (index > slides.length - 1) {
    index = 0;
  }
  showSlide();
  resetInterval();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(() => {
    plusSlides(1);
  }, 6000);
}

showSlide(); // Tampilkan slide pertama
resetInterval();

// Validation Form
function validateForm() {
  const name = document.forms["salesContactForm"]["name"].value;
  const email = document.forms["salesContactForm"]["email"].value;
  const options = document.forms["salesContactForm"]["options"].value;

  const isEmail = email.match(/[\w.]+@\w+.\w{2,3}(.\w{2,})?/);

  if (!name) {
    const errName = document.getElementById("name-error");

    errName.style.display = "block";
    errName.style.visibility = "visible";
  }

  if ((email && !isEmail) || !email) {
    const errEmail = document.getElementById("email-error");

    errEmail.style.display = "block";
    errEmail.style.visibility = "visible";
  }

  if (options === "") {
    const errOptions = document.getElementById("options-error");

    errOptions.style.display = "block";
    errOptions.style.visibility = "visible";
  }

  if (name && email && isEmail && options !== "") {
    alert(`Data anda telah sukses terkirim, ${name}`);

    return false;
  }

  return false;
}

function fillInput(fieldName) {
  const inputValue = document.getElementById(fieldName).value;
  const errorText = document.getElementById(`${fieldName}-error`);

  if (inputValue && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}

function selectOptions() {
  const optionsValue = document.getElementById("options").value;
  const errorText = document.getElementById("options-error");

  if (optionsValue !== "" && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}

document
  .getElementById("salesContactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });
