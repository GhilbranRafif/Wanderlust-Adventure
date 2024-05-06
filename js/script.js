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
(function () {
  function Slideshow(element) {
    this.el = document.querySelector(element);
    this.init();
  }

  Slideshow.prototype = {
    init: function () {
      this.wrapper = this.el.querySelector(".slider-wrapper");
      this.slides = this.el.querySelectorAll(".slide");
      this.index = 0;
      this.total = this.slides.length;
      this.timer = null;

      this.action();
      this.stopStart();
    },

    _slideTo: function (slide) {
      var currentSlide = this.slides[slide];
      currentSlide.style.opacity = 1;

      for (var i = 0; i < this.slides.length; i++) {
        var slide = this.slides[i];
        if (slide !== currentSlide) {
          slide.style.opacity = 0;
        }
      }
    },

    action: function () {
      var self = this;
      self.timer = setInterval(function () {
        self.index++;
        if (self.index == self.slides.length) {
          self.index = 0;
        }
        self._slideTo(self.index);
      }, 4000);
    },

    stopStart: function () {
      var self = this;
      self.el.addEventListener(
        "mouseover",
        function () {
          clearInterval(self.timer);
          self.timer = null;
        },
        false
      );
      self.el.addEventListener(
        "mouseout",
        function () {
          self.action();
        },
        false
      );
    },
  };

  document.addEventListener("DOMContentLoaded", function () {
    var slider = new Slideshow("#slider-utama");
  });
})();
// End Slider image

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
