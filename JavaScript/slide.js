const slides = document.querySelector(".s2");
const slider = document.querySelector(".s1");
const slideWidth = slides.children[0].offsetWidth;

const leftArrow = document.createElement("button");
const rightArrow = document.createElement("button");

leftArrow.innerHTML = "&#10094;";
rightArrow.innerHTML = "&#10095;";

const baseArrowStyle = {
  position: "absolute",
  top: "40%",
  transform: "translateY(-50%)",
  backgroundColor: "#fff",
  color: "#000",
  border: "none",
  borderRadius: "2px",
  width: "50px",
  height: "100px",
  fontSize: "32px",
  cursor: "pointer",
  zIndex: "10",
  boxShadow: "0 2px 6px rgba(130, 126, 126, 0.3)",
  transition: "opacity 0.3s ease",
  
};

Object.assign(leftArrow.style, baseArrowStyle, { left: "15px" });
Object.assign(rightArrow.style, baseArrowStyle, { right: "15px" });

slider.appendChild(leftArrow);
slider.appendChild(rightArrow);

let currentIndex = 0;
const totalSlides = slides.children.length;

function updateArrowVisibility() {
  if (currentIndex === 0) {
    leftArrow.style.opacity = "0";
    leftArrow.style.pointerEvents = "none";
    rightArrow.style.opacity = "1";
    rightArrow.style.pointerEvents = "auto";
  } else if (currentIndex === totalSlides - 1) {
    leftArrow.style.opacity = "1";
    leftArrow.style.pointerEvents = "auto";
    rightArrow.style.opacity = "0";
    rightArrow.style.pointerEvents = "none";
  } else {
    leftArrow.style.opacity = "1";
    rightArrow.style.opacity = "1";
    leftArrow.style.pointerEvents = "auto";
    rightArrow.style.pointerEvents = "auto";
  }
}

function slideNext() {
  if (currentIndex >= totalSlides - 1) return;
  currentIndex++;
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  updateArrowVisibility();
}

function slidePrev() {
  if (currentIndex <= 0) return;
  currentIndex--;
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  updateArrowVisibility();
}

rightArrow.addEventListener("click", slideNext);
leftArrow.addEventListener("click", slidePrev);

updateArrowVisibility();
