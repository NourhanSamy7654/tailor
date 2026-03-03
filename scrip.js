
var preloader = document.getElementsByClassName("preloader")[0]

window.onload = function(){

    setTimeout(function(){

        preloader.style.transition = "opacity 300ms"
        preloader.style.opacity = 0;


        setTimeout(function(){

            preloader.style.display = "none"

        }, 400)
    }, 1000)

}
var headerContainer = document.getElementsByClassName("header__container")[0];
var offers = document.getElementsByClassName("offer");
var carts = document.getElementsByClassName("carts");
var services = document.getElementsByClassName("services")[0];
window.onscroll = function () {

   
    if (window.scrollY > 420) {
        headerContainer.classList.add("fixed-bar");
    } else {
        headerContainer.classList.remove("fixed-bar");
    }

    
    if (window.scrollY > 420) {
        offers[0].style.animation = "fadeInUp 1.5s forwards";
        offers[1].style.animation = "fadeInUp 1.5s .4s forwards";
        offers[2].style.animation = "fadeInUp 1.5s .8s forwards";
    }

  
  // ====== Services Section 
  if (window.scrollY > 1100) {
    // services.style.animation = "fadeInUp 1.2s forwards";

    carts[0].style.animation = "fadeInUp 1.2s .0s forwards";
    carts[1].style.animation = "fadeInUp 1.2s .3s forwards";
    carts[2].style.animation = "fadeInUp 1.2s .6s forwards";
    carts[3].style.animation = "fadeInUp 1.2s .9s forwards";
  }

};
// slider section

var slides = document.querySelectorAll(".slide");
var current = 0;

var nextBtn = document.querySelector(".next");
var prevBtn = document.querySelector(".prev");
var numbersContainer = document.querySelector(".numbers");

if (slides.length > 0) {

  //generate num of section
  slides.forEach(function(_, index) {
    var span = document.createElement("span");
    span.classList.add("num");
    span.textContent = index + 1;

    if (index === 0) {
      span.classList.add("active");
    }

    span.addEventListener("click", function() {
      current = index;
      showSlide(current);
    });

    numbersContainer.appendChild(span);
  });

  function showSlide(index) {
    slides.forEach(function(slide) {
      slide.classList.remove("active");
    });

    document.querySelectorAll(".num").forEach(function(num) {
      num.classList.remove("active");
    });

    slides[index].classList.add("active");
    document.querySelectorAll(".num")[index].classList.add("active");
  }

  function nextSlide() {
    current++;
    if (current >= slides.length) {
      current = 0;
    }
    showSlide(current);
  }

  function prevSlide() {
    current--;
    if (current < 0) {
      current = slides.length - 1;
    }
    showSlide(current);
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Auto Slide
  setInterval(nextSlide, 6000);
}