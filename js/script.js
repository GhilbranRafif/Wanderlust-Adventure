// Efek Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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
    if (i === index) {
      slide.style.opacity = 1;
      slide.style.visibility = "visible";
      slide.style.transform = "translateX(0)";
    } else if (i < index) {
      slide.style.opacity = 0;
      slide.style.visibility = "hidden";
      slide.style.transform = "translateX(-100%)";
    } else {
      slide.style.opacity = 0;
      slide.style.visibility = "hidden";
      slide.style.transform = "translateX(100%)";
    }
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

  let isValid = true;

  if (!name) {
    const errName = document.getElementById("name-error");

    errName.style.display = "block";
    errName.style.visibility = "visible";
    isValid = false;
  }

  if ((email && !isEmail) || !email) {
    const errEmail = document.getElementById("email-error");

    errEmail.style.display = "block";
    errEmail.style.visibility = "visible";
    isValid = false;
  }

  if (options === "") {
    const errOptions = document.getElementById("option-error");

    errOptions.style.display = "block";
    errOptions.style.visibility = "visible";
    isValid = false;
  }

  if (isValid) {
    alert(`Selamat Datang ${name}, Harap tunggu email dari sales kami `);
  }

  return isValid;
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
  const errorText = document.getElementById("option-error");

  if (optionsValue !== "" && errorText.style.visibility === "visible") {
    errorText.style.display = "none";
    errorText.style.visibility = "hidden";
  }
}

document
  .getElementById("salesContactForm")
  .addEventListener("submit", function (event) {
    const isValid = validateForm();
    if (!isValid) {
      event.preventDefault();
    }
  });

document.getElementById("name").addEventListener("input", function () {
  fillInput("name");
});

document.getElementById("email").addEventListener("input", function () {
  fillInput("email");
});

document.getElementById("options").addEventListener("change", selectOptions);
