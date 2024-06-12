function animateLogo() {
  const nav = document.querySelector("nav");
  const docTitle = document.querySelector("#doc-title");
  nav.onmouseenter = (e) => docTitle.classList.add("nav-hover");
  nav.onmouseout = (e) => {
    const mouseOutNav = !nav.contains(e.relatedTarget);
    if (mouseOutNav) {
      docTitle.classList.remove("nav-hover");
    }
  };
}

function fixBackToTopBtn(scrollToTopBtn, scrollToTopContainer) {
  scrollToTopContainer.style.position = "absolute";
  scrollToTopBtn.style.display = "none";
  scrollToTopBtn.style.position = "fixed";
  scrollToTopBtn.style.right = "unset";
}

function addClipboardBtns() {
  const containerCodeArr = Array.from(
    document.querySelectorAll(".container-code")
  );

  containerCodeArr.forEach((containerCode) => {
    containerCode.innerHTML += `<button class="clipboard-btn" title="Copy to clipboard">Copy</button>`;

    const clipboardBtn = containerCode.children[1];
    const preTagContent = containerCode.children[0].textContent;
    addClipboardEvent(clipboardBtn, preTagContent);
  });
}

function addClipboardEvent(clipboardBtn, preTagContent) {
  clipboardBtn.onclick = () => {
    navigator.clipboard.writeText(preTagContent);
  };
}

function addScrollEvents(scrollToTopBtn) {
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
}

function main() {
  const deviceHasTouchScreen = navigator.maxTouchPoints > 0;
  const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");
  const scrollToTopContainer = document.querySelector(
    ".scroll-to-top-container"
  );

  addScrollEvents(scrollToTopBtn);
  if (deviceHasTouchScreen) {
    fixBackToTopBtn(scrollToTopBtn, scrollToTopContainer);
  } else {
    animateLogo();
    addClipboardBtns();
  }
}
main();
