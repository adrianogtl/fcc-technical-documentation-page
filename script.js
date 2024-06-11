const nav = document.querySelector("nav");
const docTitle = document.querySelector("#doc-title");
const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");
const scrollToTopContainer = document.querySelector(".scroll-to-top-container");

const isPhoneOrTouch =
  /Android|iPhone/i.test(navigator.userAgent) || navigator.maxTouchPoints > 0;

function animateLogo() {
  nav.onmouseenter = (e) => docTitle.classList.add("nav-hover");
  nav.onmouseout = (e) => {
    const mouseOutNav = !nav.contains(e.relatedTarget);
    if (mouseOutNav) {
      docTitle.classList.remove("nav-hover");
    }
  };
}

function fixBackToTopBtn() {
  scrollToTopContainer.style.position = "absolute";
  scrollToTopBtn.style.display = "none";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.right = "unset";
}

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 800) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

if (isPhoneOrTouch) {
  fixBackToTopBtn();
} else {
  animateLogo();
}
