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

function addClipboardBtns() {
  const containerCodeArr = Array.from(
    document.querySelectorAll(".container-code")
  );

  containerCodeArr.forEach((containerCode) => {
    containerCode.innerHTML += `<button class="clipboard-btn" title="Copy to clipboard">Copy</button>`;

    const clipboardBtn = containerCode.children[1];
    const preTagContent = containerCode.children[0].innerText;
    addClipboardEvent(clipboardBtn, preTagContent);
  });
}

function addClipboardEvent(clipboardBtn, preTagContent) {
  clipboardBtn.onclick = () => {
    navigator.clipboard.writeText(preTagContent);
    set;
    clipboardBtn.innerText = "Copied!";
    setTimeout(() => {
      clipboardBtn.innerText = "Copy";
    }, 3000);
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
  const scrollToTopBtn = document.querySelector("#scroll-to-top-btn");
  const scrollToTopContainer = document.querySelector(
    ".scroll-to-top-container"
  );

  addScrollEvents(scrollToTopBtn);
  addClipboardBtns();

  const isMobileOrTouch =
    /Android|iPhone|Tablet|iPhone/i.test(navigator.userAgent) ||
    navigator.maxTouchPoints > 0;
  if (!isMobileOrTouch) {
    animateLogo();
  }
}
main();
